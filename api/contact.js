const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;

const rateLimitStore = globalThis.__infraCleanContactRateLimit || new Map();
globalThis.__infraCleanContactRateLimit = rateLimitStore;

function setCommonHeaders(res) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 'no-store');
}

function getClientIp(req) {
    const forwardedFor = req.headers['x-forwarded-for'];
    if (typeof forwardedFor === 'string' && forwardedFor.length > 0) {
        return forwardedFor.split(',')[0].trim();
    }

    const realIp = req.headers['x-real-ip'];
    if (typeof realIp === 'string' && realIp.length > 0) {
        return realIp.trim();
    }

    return req.socket?.remoteAddress || 'unknown';
}

function isRateLimited(ip) {
    const now = Date.now();
    const entry = rateLimitStore.get(ip);

    if (!entry || now > entry.expiresAt) {
        rateLimitStore.set(ip, { count: 1, expiresAt: now + RATE_LIMIT_WINDOW_MS });
        return false;
    }

    if (entry.count >= RATE_LIMIT_MAX_REQUESTS) {
        return true;
    }

    entry.count += 1;
    rateLimitStore.set(ip, entry);
    return false;
}

function cleanText(value, maxLength) {
    return String(value || '')
        .replace(/\s+/g, ' ')
        .trim()
        .slice(0, maxLength);
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function parseRequestBody(req) {
    if (!req.body) {
        return {};
    }

    if (typeof req.body === 'string') {
        try {
            return JSON.parse(req.body);
        } catch {
            return {};
        }
    }

    if (typeof req.body === 'object') {
        return req.body;
    }

    return {};
}

async function sendViaResend(payload) {
    const resendApiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL || 'InfraClean Enquiry <onboarding@resend.dev>';

    if (!resendApiKey || !toEmail) {
        throw new Error('Server is not configured for email delivery.');
    }

    const subject = `New InfraClean enquiry: ${payload.fullName}`;

    const text = [
        'New enquiry received from infraclean website',
        `Name: ${payload.fullName}`,
        `Email: ${payload.email}`,
        `Company: ${payload.company || 'N/A'}`,
        `Service: ${payload.service}`,
        '',
        'Message:',
        payload.message
    ].join('\n');

    const html = `
        <h2>New InfraClean enquiry</h2>
        <p><strong>Name:</strong> ${payload.fullName}</p>
        <p><strong>Email:</strong> ${payload.email}</p>
        <p><strong>Company:</strong> ${payload.company || 'N/A'}</p>
        <p><strong>Service:</strong> ${payload.service}</p>
        <p><strong>Message:</strong></p>
        <p>${payload.message.replace(/\n/g, '<br>')}</p>
    `;

    const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            from: fromEmail,
            to: [toEmail],
            reply_to: payload.email,
            subject,
            text,
            html
        })
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Resend API failed: ${errorText}`);
    }
}

export default async function handler(req, res) {
    setCommonHeaders(res);

    if (req.method === 'OPTIONS') {
        res.status(204).end();
        return;
    }

    if (req.method !== 'POST') {
        res.status(405).json({ error: 'Method not allowed.' });
        return;
    }

    const body = parseRequestBody(req);

    const fullName = cleanText(body.fullName, 80);
    const company = cleanText(body.company, 120);
    const email = cleanText(body.email, 120);
    const service = cleanText(body.service, 80);
    const message = cleanText(body.message, 2000);
    const companyWebsite = cleanText(body.companyWebsite, 200);

    if (companyWebsite) {
        res.status(200).json({ ok: true });
        return;
    }

    if (!fullName || !email || !service || !message) {
        res.status(400).json({ error: 'Missing required fields.' });
        return;
    }

    if (!isValidEmail(email)) {
        res.status(400).json({ error: 'Invalid email address.' });
        return;
    }

    if (message.length < 10) {
        res.status(400).json({ error: 'Message is too short.' });
        return;
    }

    const ip = getClientIp(req);
    if (isRateLimited(ip)) {
        res.status(429).json({ error: 'Too many requests. Please try again later.' });
        return;
    }

    try {
        await sendViaResend({
            fullName,
            company,
            email,
            service,
            message
        });

        res.status(200).json({ ok: true });
    } catch (error) {
        console.error('Contact form send failed', error);
        res.status(500).json({ error: 'Unable to send your enquiry right now. Please try again.' });
    }
}
