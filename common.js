document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuToggle = document.querySelector('[data-mobile-menu-toggle]');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuIcon = document.querySelector('[data-mobile-menu-icon]');

    if (mobileMenuToggle && mobileMenu) {
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');

        const setMobileMenuState = (isOpen) => {
            mobileMenu.classList.toggle('is-open', isOpen);
            mobileMenuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
            mobileMenu.setAttribute('aria-hidden', isOpen ? 'false' : 'true');

            if (mobileMenuIcon) {
                mobileMenuIcon.textContent = isOpen ? 'close' : 'menu';
            }
        };

        mobileMenuToggle.addEventListener('click', () => {
            const isOpen = mobileMenuToggle.getAttribute('aria-expanded') === 'true';
            setMobileMenuState(!isOpen);
        });

        mobileMenuLinks.forEach((link) => {
            link.addEventListener('click', () => setMobileMenuState(false));
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth >= 768) {
                setMobileMenuState(false);
            }
        });
    }

    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
            } else {
                backToTopBtn.classList.add('opacity-0', 'pointer-events-none');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    const modalTriggers = document.querySelectorAll('[data-modal-open]');
    const modalElements = document.querySelectorAll('.policy-modal');
    let activeModal = null;

    const setModalState = (modal, isOpen) => {
        if (!modal) {
            return;
        }

        modal.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
        modal.classList.toggle('hidden', !isOpen);
        modal.classList.toggle('flex', isOpen);
        modal.classList.toggle('is-open', isOpen);
    };

    const openModal = (modalId) => {
        const modal = document.getElementById(modalId);

        if (!modal) {
            return;
        }

        if (activeModal) {
            setModalState(activeModal, false);
        }

        activeModal = modal;
        setModalState(activeModal, true);
        document.body.classList.add('overflow-hidden');
    };

    const closeModal = () => {
        if (!activeModal) {
            return;
        }

        setModalState(activeModal, false);
        activeModal = null;
        document.body.classList.remove('overflow-hidden');
    };

    modalTriggers.forEach((trigger) => {
        trigger.addEventListener('click', () => {
            openModal(trigger.dataset.modalOpen);
        });
    });

    modalElements.forEach((modal) => {
        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                closeModal();
            }
        });

        modal.querySelectorAll('[data-modal-close]').forEach((closeBtn) => {
            closeBtn.addEventListener('click', closeModal);
        });
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeModal();
        }
    });

    const dropdown = document.querySelector('.custom-dropdown');
    if (dropdown) {
        const toggle = dropdown.querySelector('.custom-dropdown-toggle');
        const list = dropdown.querySelector('.custom-dropdown-list');
        const options = dropdown.querySelectorAll('.custom-dropdown-option');
        const selected = dropdown.querySelector('#serviceDropdownSelected');
        const input = dropdown.querySelector('#serviceDropdownInput');

        if (toggle && list && options.length && selected && input) {
            let open = false;
            let focusedIdx = -1;

            const openDropdown = () => {
                list.classList.remove('hidden');
                toggle.setAttribute('aria-expanded', 'true');
                open = true;

                const selectedOption = dropdown.querySelector('.custom-dropdown-option.selected');
                focusedIdx = selectedOption ? Array.from(options).indexOf(selectedOption) : 0;
                options[focusedIdx]?.classList.add('active');
                options[focusedIdx]?.scrollIntoView({ block: 'nearest' });
            };

            const closeDropdown = () => {
                list.classList.add('hidden');
                toggle.setAttribute('aria-expanded', 'false');
                open = false;
                options.forEach((option) => option.classList.remove('active'));
            };

            const selectOption = (idx) => {
                options.forEach((option) => option.classList.remove('selected'));
                options[idx].classList.add('selected');
                selected.textContent = options[idx].textContent;
                input.value = options[idx].dataset.value;
                closeDropdown();
            };

            toggle.addEventListener('click', (event) => {
                event.stopPropagation();
                open ? closeDropdown() : openDropdown();
            });

            options.forEach((option, idx) => {
                option.addEventListener('click', () => {
                    selectOption(idx);
                });

                option.addEventListener('mouseenter', () => {
                    options.forEach((opt) => opt.classList.remove('active'));
                    option.classList.add('active');
                    focusedIdx = idx;
                });
            });

            document.addEventListener('click', (event) => {
                if (!dropdown.contains(event.target)) {
                    closeDropdown();
                }
            });

            toggle.addEventListener('keydown', (event) => {
                if (!open && (event.key === 'ArrowDown' || event.key === 'Enter' || event.key === ' ')) {
                    event.preventDefault();
                    openDropdown();
                }
            });

            list.addEventListener('keydown', (event) => {
                if (!open) {
                    return;
                }

                if (event.key === 'ArrowDown') {
                    event.preventDefault();
                    options[focusedIdx]?.classList.remove('active');
                    focusedIdx = (focusedIdx + 1) % options.length;
                    options[focusedIdx].classList.add('active');
                    options[focusedIdx].scrollIntoView({ block: 'nearest' });
                } else if (event.key === 'ArrowUp') {
                    event.preventDefault();
                    options[focusedIdx]?.classList.remove('active');
                    focusedIdx = (focusedIdx - 1 + options.length) % options.length;
                    options[focusedIdx].classList.add('active');
                    options[focusedIdx].scrollIntoView({ block: 'nearest' });
                } else if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    selectOption(focusedIdx);
                } else if (event.key === 'Escape') {
                    closeDropdown();
                    toggle.focus();
                }
            });

            list.addEventListener('focusout', (event) => {
                if (!list.contains(event.relatedTarget)) {
                    closeDropdown();
                }
            });
        }
    }

    const contactForm = document.querySelector('[data-contact-form]');
    if (contactForm) {
        const statusElement = contactForm.querySelector('[data-contact-status]');
        const submitButton = contactForm.querySelector('[data-contact-submit]');
        const serviceLabel = contactForm.querySelector('#serviceDropdownSelected');
        const serviceInput = contactForm.querySelector('#serviceDropdownInput');

        const playSubmitConfetti = (anchor) => {
            if (!anchor) {
                return;
            }

            const anchorRect = anchor.getBoundingClientRect();
            const container = document.createElement('div');
            container.setAttribute('aria-hidden', 'true');
            container.style.position = 'fixed';
            container.style.left = `${anchorRect.left}px`;
            container.style.top = `${anchorRect.top}px`;
            container.style.width = `${anchorRect.width}px`;
            container.style.height = `${anchorRect.height}px`;
            container.style.pointerEvents = 'none';
            container.style.overflow = 'visible';
            container.style.zIndex = '80';

            document.body.appendChild(container);

            const colors = ['#2D7DED', '#00A693', '#F59E0B', '#F97316', '#FFFFFF'];
            const totalPieces = 20;

            for (let index = 0; index < totalPieces; index += 1) {
                const piece = document.createElement('span');
                const size = 8 + Math.random() * 8;
                const angle = (Math.PI * 2 * index) / totalPieces;
                const distance = 70 + Math.random() * 70;
                const driftX = Math.cos(angle) * distance;
                const driftY = Math.sin(angle) * distance - (25 + Math.random() * 20);
                const spin = 220 + Math.random() * 260;

                piece.style.position = 'absolute';
                piece.style.left = '50%';
                piece.style.top = '50%';
                piece.style.width = `${size}px`;
                piece.style.height = `${size * (0.6 + Math.random() * 0.6)}px`;
                piece.style.borderRadius = Math.random() > 0.5 ? '9999px' : '2px';
                piece.style.background = colors[index % colors.length];
                piece.style.willChange = 'transform, opacity';
                piece.style.transform = 'translate(-50%, -50%)';
                piece.style.boxShadow = '0 0 0 1px rgba(255,255,255,0.15)';

                container.appendChild(piece);

                piece.animate(
                    [
                        { transform: 'translate(-50%, -50%) scale(1) rotate(0deg)', opacity: 1 },
                        { transform: `translate(-50%, -50%) translate(${driftX}px, ${driftY}px) rotate(${spin}deg) scale(0.35)`, opacity: 0 }
                    ],
                    {
                        duration: 900 + Math.random() * 220,
                        delay: Math.random() * 80,
                        easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
                        fill: 'forwards'
                    }
                );
            }

            window.setTimeout(() => {
                container.remove();
            }, 1300);
        };

        const setFormStatus = (message, isError) => {
            if (!statusElement) {
                return;
            }

            statusElement.textContent = message;
            statusElement.classList.remove('hidden', 'text-red-600', 'text-brand-teal');
            statusElement.classList.add(isError ? 'text-red-600' : 'text-brand-teal');
        };

        const clearFormStatus = () => {
            if (!statusElement) {
                return;
            }

            statusElement.textContent = '';
            statusElement.classList.add('hidden');
            statusElement.classList.remove('text-red-600', 'text-brand-teal');
        };

        contactForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            const formData = new FormData(contactForm);
            const payload = {
                fullName: (formData.get('fullName') || '').toString().trim(),
                company: (formData.get('company') || '').toString().trim(),
                email: (formData.get('email') || '').toString().trim(),
                service: (formData.get('service') || '').toString().trim(),
                message: (formData.get('message') || '').toString().trim(),
                companyWebsite: (formData.get('companyWebsite') || '').toString().trim()
            };

            if (!payload.fullName || !payload.email || !payload.message) {
                setFormStatus('Please fill in your name, email, and message.', true);
                return;
            }

            if (!payload.service) {
                setFormStatus('Please select a service interest before submitting.', true);
                return;
            }

            const originalButtonText = submitButton ? submitButton.textContent : '';
            if (submitButton) {
                submitButton.disabled = true;
                submitButton.textContent = 'SENDING...';
                submitButton.classList.add('opacity-70', 'cursor-not-allowed');
            }

            clearFormStatus();

            try {
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(payload)
                });

                const result = await response.json().catch(() => ({}));

                if (!response.ok) {
                    throw new Error(result.error || 'Unable to submit your request right now.');
                }

                contactForm.reset();
                if (serviceLabel) {
                    serviceLabel.textContent = 'Select a service';
                }
                if (serviceInput) {
                    serviceInput.value = '';
                }

                playSubmitConfetti(submitButton);
                setFormStatus('Thanks. Your enquiry has been sent successfully.', false);
            } catch (error) {
                setFormStatus(error.message || 'Something went wrong while sending your enquiry.', true);
            } finally {
                if (submitButton) {
                    submitButton.disabled = false;
                    submitButton.textContent = originalButtonText;
                    submitButton.classList.remove('opacity-70', 'cursor-not-allowed');
                }
            }
        });
    }
});
