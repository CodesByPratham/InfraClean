---
name: Aerospace Precision Cleaning System
colors:
  surface: '#f9f9ff'
  surface-dim: '#d8d9e3'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3fd'
  surface-container: '#ecedf7'
  surface-container-high: '#e6e8f1'
  surface-container-highest: '#e0e2ec'
  on-surface: '#191c22'
  on-surface-variant: '#414753'
  inverse-surface: '#2d3038'
  inverse-on-surface: '#eff0fa'
  outline: '#727785'
  outline-variant: '#c1c6d6'
  surface-tint: '#005cbd'
  primary: '#0059b8'
  on-primary: '#ffffff'
  primary-container: '#1872e1'
  on-primary-container: '#fefcff'
  inverse-primary: '#acc7ff'
  secondary: '#006a61'
  on-secondary: '#ffffff'
  secondary-container: '#86f2e4'
  on-secondary-container: '#006f66'
  tertiary: '#944600'
  on-tertiary: '#ffffff'
  tertiary-container: '#ba5900'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d7e2ff'
  primary-fixed-dim: '#acc7ff'
  on-primary-fixed: '#001a40'
  on-primary-fixed-variant: '#004591'
  secondary-fixed: '#89f5e7'
  secondary-fixed-dim: '#6bd8cb'
  on-secondary-fixed: '#00201d'
  on-secondary-fixed-variant: '#005049'
  tertiary-fixed: '#ffdbc8'
  tertiary-fixed-dim: '#ffb689'
  on-tertiary-fixed: '#311300'
  on-tertiary-fixed-variant: '#743500'
  background: '#f9f9ff'
  on-background: '#191c22'
  surface-variant: '#e0e2ec'
typography:
  display:
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
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '500'
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
  label-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 40px
  margin-mobile: 16px
---

## Brand & Style
This design system embodies "Clinical Precision." It is engineered for an aerospace-grade cleaning startup where reliability and hygiene are paramount. The aesthetic is a fusion of **Modern Minimalism** and **High-Tech Professionalism**, prioritizing clarity and structural integrity. 

The visual narrative avoids heavy ornamentation, opting instead for a "Laboratory Grade" atmosphere. High-contrast typography ensures readability, while the subtle use of light blue tints conveys a sterilized, high-tech environment. The interface should feel like an advanced diagnostic instrument: calibrated, responsive, and uncompromisingly clean.

## Colors
The palette is rooted in a "Sterile Blue" spectrum to reinforce the cleaning and aerospace context. 

- **Primary Background (#F8FAFC):** Used for the main canvas to provide a cool, expansive feel.
- **Secondary Background (#FFFFFF):** Reserved for elevated containers, cards, and interactive surfaces to draw focus.
- **Surface Accent (#EFF6FF):** Applied to active states, sidebars, or subtle sectioning to maintain a monochromatic, clean depth.
- **Accent Colors:** Electric Blue (#2D7DED) signifies action and primary utility, while Teal (#0D9488) represents "Go/Success" states and environmental safety.
- **Borders:** Instead of gray, use `#DBEAFE` (light blue) for all structural lines to maintain the tech-focused theme.

## Typography
The typographic hierarchy relies on the contrast between technical geometry and utilitarian clarity. 

**Space Grotesk** is used for headlines to evoke a scientific, futuristic feel. Its unique letterforms act as a brand signifier. **Inter** is utilized for all functional text, ensuring maximum legibility across data-heavy dashboards. Labels and small metadata should use Inter Bold with slight tracking (letter-spacing) and uppercase styling to mimic instrument labeling.

## Layout & Spacing
This design system utilizes a **Fixed Grid** for desktop and a **Fluid Grid** for mobile. 

- **Desktop:** 12-column system with a 24px gutter. Content is centered with a max-width of 1280px.
- **Mobile:** 4-column fluid system with 16px margins.
- **Rhythm:** An 8px linear scaling system (0.5rem) is used for all internal component spacing, ensuring mathematical precision. Vertical breathing room is prioritized to avoid a cluttered "industrial" look, opting instead for an "airy laboratory" feel.

## Elevation & Depth
Depth is achieved through **Tonal Layering** and **Subtle Shadows** rather than heavy fills.

- **Level 0 (Base):** #F8FAFC background.
- **Level 1 (Cards/Surfaces):** #FFFFFF background with a 1px border of #DBEAFE. 
- **Level 2 (Active/Floating):** A very soft, diffused shadow: `0px 4px 20px rgba(15, 23, 42, 0.05)`. 

Avoid dark shadows. The goal is to make elements appear as though they are resting on a clean, glass-like surface. Use #EFF6FF (Surface Blue) to highlight rows or sections instead of gray.

## Shapes
Shapes follow a **Soft (0.25rem)** rounding strategy. This provides a professional "machined" edge—rounded enough to feel modern and safe, but sharp enough to maintain a sense of aerospace precision. 

- **Standard Buttons/Inputs:** 4px (0.25rem) radius.
- **Large Containers/Cards:** 8px (0.5rem) radius.
- **Inner Elements (Tags/Chips):** 2px or 4px radius to maintain nested harmony.

## Components
- **Buttons:** Primary buttons use #2D7DED with white text. Secondary buttons use a #DBEAFE border with #2D7DED text. Use a 1px stroke for all "ghost" variations.
- **Inputs:** White background with a #DBEAFE border. On focus, the border transitions to #2D7DED with a subtle 2px outer glow of #EFF6FF.
- **Cards:** Pure white (#FFFFFF) with a 1px #DBEAFE border. Avoid shadows unless the card is interactive or floating.
- **Chips/Status:** Use the Teal (#0D9488) for "Cleaned" or "System Ready" indicators. These should have a background opacity of 10% and a solid text color.
- **Data Tables:** Use #F8FAFC for headers and #FFFFFF for rows. Use #DBEAFE for horizontal dividers only.
- **Progress Indicators:** Use thin, 4px tall bars with Electric Blue fills to represent "Cleaning Cycles" or "System Calibration."