---
name: Aerospace Infrastructure System
colors:
  surface: '#10131a'
  surface-dim: '#10131a'
  surface-bright: '#363941'
  surface-container-lowest: '#0b0e15'
  surface-container-low: '#191c22'
  surface-container: '#1d2026'
  surface-container-high: '#272a31'
  surface-container-highest: '#32353c'
  on-surface: '#e0e2ec'
  on-surface-variant: '#c1c6d6'
  inverse-surface: '#e0e2ec'
  inverse-on-surface: '#2d3038'
  outline: '#8b909f'
  outline-variant: '#414753'
  surface-tint: '#acc7ff'
  primary: '#acc7ff'
  on-primary: '#002f67'
  primary-container: '#468fff'
  on-primary-container: '#00285a'
  inverse-primary: '#005cbd'
  secondary: '#ffffff'
  on-secondary: '#003737'
  secondary-container: '#00fbfb'
  on-secondary-container: '#007070'
  tertiary: '#bcc6e2'
  on-tertiary: '#263046'
  tertiary-container: '#8790ab'
  on-tertiary-container: '#20293f'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d7e2ff'
  primary-fixed-dim: '#acc7ff'
  on-primary-fixed: '#001a40'
  on-primary-fixed-variant: '#004591'
  secondary-fixed: '#00fbfb'
  secondary-fixed-dim: '#00dddd'
  on-secondary-fixed: '#002020'
  on-secondary-fixed-variant: '#004f4f'
  tertiary-fixed: '#d8e2ff'
  tertiary-fixed-dim: '#bcc6e2'
  on-tertiary-fixed: '#111b30'
  on-tertiary-fixed-variant: '#3d475e'
  background: '#10131a'
  on-background: '#e0e2ec'
  surface-variant: '#32353c'
typography:
  headline-xl:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.1em
  telemetry:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1.0'
spacing:
  base: 4px
  unit-1: 4px
  unit-2: 8px
  unit-4: 16px
  unit-8: 32px
  unit-12: 48px
  container-max: 1440px
  gutter: 24px
  margin-mobile: 16px
---

## Brand & Style
The design system is engineered for the high-stakes world of aerospace maintenance and autonomous infrastructure cleaning. It evokes a "Mission Control" aesthetic—prioritizing technical precision, real-time data clarity, and industrial reliability. 

The style is **Modern-Technical**, blending high-density information display with a sophisticated dark-mode environment. It utilizes a surgical application of color, where light is used as a functional tool rather than just decoration. The visual language leans into "HUD" (Heads-Up Display) elements, featuring ultra-thin lines and technical ornaments that suggest a high level of engineering and enterprise-grade security.

## Colors
The palette is rooted in deep space and electric tones, reflecting both the environment drones operate in and the high-visibility digital interfaces used to track them.

- **Foundational Neutrals:** The backgrounds utilize a layered navy approach (#10131a) to provide deep contrast for white text and vibrant accents. Card surfaces (#162035) are slightly lifted to create visual hierarchy without relying on shadows.
- **Functional Accents:** Accent Blue (#2D7DED) is used for primary actions and "active" system states. Accent Cyan (#00FFFF) is reserved for "success," "optimized," or "online" statuses, providing a high-visibility, electric contrast that feels digital and ultra-modern.
- **Typography Tones:** Pure White is used sparingly for high-priority headings, while Muted Text (#8A9BB5) handles secondary information to reduce cognitive load in data-heavy views.

## Typography
The typography strategy differentiates between "Display" and "Data."

**Space Grotesk** is used for all headlines. Its geometric construction and idiosyncratic "tech" details provide the aerospace personality. On mobile, `headline-xl` should scale down to 36px to maintain readability.

**Inter** serves as the workhorse for body copy and interface elements, chosen for its exceptional legibility and neutral tone.

**JetBrains Mono** (or a similar monospaced font) is introduced for labels and telemetry data. This reinforces the "engineered" feel of the design system and ensures that numerical data (like drone coordinates or battery levels) remains perfectly aligned and legible at small sizes.

## Layout & Spacing
The layout uses a **Rigid 12-Column Grid** for desktop and a **4-Column Grid** for mobile. 

The spacing rhythm is built on a 4px baseline, but defaults to 24px (unit-6) for standard gutters to maintain an "airy" yet structured feel. For dashboard views where data density is critical, the system allows for "High-Density" layouts using 8px padding between elements to mimic a cockpit instrument panel.

Alignment should always favor a vertical axis; cards and telemetry blocks should feel mathematically locked into place.

## Elevation & Depth
This design system rejects traditional soft shadows in favor of **Tonal Layering and Light Strokes**.

- **Surfaces:** Depth is created by placing `Card Surfaces` (#162035) on top of the `Primary Background`.
- **Outlines:** Every interactive container or card must feature a 1px solid border. Use `rgba(45, 125, 237, 0.15)` for standard states and `rgba(0, 255, 255, 0.4)` for active or "optimized" states.
- **Subtle Glows:** Instead of drop shadows, use `box-shadow: 0 0 15px rgba(45, 125, 237, 0.1)` to simulate a low-level screen emission.
- **Glassmorphism:** Use backdrop blurs (20px+) sparingly for floating modals or navigation bars to maintain the sense of translucent high-tech glass.

## Shapes
To emphasize aerospace engineering and "crisp edges," this design system uses **Sharp (0px)** roundedness for all primary components. 

- **Cards and Buttons:** Must have 90-degree corners. 
- **Icons:** Should follow a linear, 2px stroke weight with sharp joins.
- **Exceptions:** Very small UI elements like radio buttons or toggles may use a 2px radius only if required for component recognition, but the preference is always for structural, rectangular forms.

## Components
- **Buttons:** Primary buttons are solid #2D7DED with white text. Secondary buttons are transparent with a 1px #2D7DED border. All buttons use `label-caps` typography for a professional, button-label feel.
- **Cards:** Background #162035 with a 1px border. Header areas of cards should have a subtle top-border glow in Cyan or Blue to indicate category.
- **Inputs:** Dark backgrounds (#10131a) with 1px muted borders. Focus states should trigger a full-box glow and a color shift to Accent Blue.
- **Status Indicators:** Small 8px circles using Accent Cyan (for active) or a pulsing animation for "Live" drone feeds.
- **Telemetry Readouts:** Use the `telemetry` mono font. Labels should be `text-muted` and 10px, while the values are 14px white.
- **Data Visualizations:** Charts should use thin 1px lines. Fills should be low-opacity gradients (e.g., Blue to Transparent) to keep the UI from feeling heavy.