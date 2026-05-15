---
version: alpha
name: Life Impact International
description: Mission-driven nonprofit design system focused on urgency, compassion, rescue, restoration, and trust.
colors:
  primary: "#111111"
  secondary: "#6B6B6B"
  tertiary: "#C0392B"
  neutral: "#F7F5F2"
  surface: "#FFFFFF"
  on-surface: "#111111"
  accent-gold: "#D9A441"
  success: "#3E7C59"
  warning: "#E08B2C"
  error: "#B42318"
  overlay-dark: "#1C1C1CE6"
  border-soft: "#E8E1DA"
typography:
  headline-display:
    fontFamily: "Montserrat"
    fontSize: 64px
    fontWeight: 800
    lineHeight: 1.0
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: "Montserrat"
    fontSize: 42px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -0.02em
  headline-md:
    fontFamily: "Montserrat"
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: -0.01em
  body-lg:
    fontFamily: "Open Sans"
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: 0em
  body-md:
    fontFamily: "Open Sans"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0em
  body-sm:
    fontFamily: "Open Sans"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0em
  label-lg:
    fontFamily: "Montserrat"
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0.02em
  label-md:
    fontFamily: "Montserrat"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 0.02em
rounded:
  sm: 4px
  md: 8px
  lg: 16px
  xl: 24px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  xxl: 72px
components:
  button-primary:
    backgroundColor: "{colors.tertiary}"
    textColor: "#FFFFFF"
    typography: "{typography.label-lg}"
    rounded: "{rounded.full}"
    padding: 16px
  button-primary-hover:
    backgroundColor: "#A62C20"
    textColor: "#FFFFFF"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.surface}"
    rounded: "{rounded.full}"
    padding: 16px
  card-feature:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
    padding: 24px
  section-dark:
    backgroundColor: "{colors.primary}"
    textColor: "#FFFFFF"
  donate-banner:
    backgroundColor: "{colors.tertiary}"
    textColor: "#FFFFFF"
    rounded: "{rounded.md}"
---

# Life Impact International DESIGN.md

## Overview

Life Impact International’s visual identity is built around emotional urgency, human dignity, and hope. The design language should feel courageous and compassionate at the same time — never corporate, trendy, or overly polished.

The organization exists to prevent child exploitation, rescue vulnerable children, and bring long-term healing and restoration. Every design decision should reinforce trust, action, safety, and humanity.

The emotional experience should move users from awareness to empathy to action.

Core brand attributes:

- Urgent but hopeful
- Bold but compassionate
- Human-centered and documentary-inspired
- Faith-driven without visual cliché
- International, field-oriented, and authentic
- Mission-first over marketing-first

Photography should feel real and emotionally grounded rather than staged. Interfaces should prioritize storytelling, readability, donation clarity, and accessibility.

Large typography, high-contrast overlays, emotionally resonant imagery, and simple calls-to-action are preferred over decorative visuals or abstract graphics.

The design system should support:

- Donation funnels
- Rescue and impact storytelling
- International mission pages
- Volunteer and fundraising workflows
- Child sponsorship and outreach campaigns
- Emergency response initiatives
- Social sharing and awareness campaigns

## Colors

The palette is rooted in documentary realism and emotional contrast.

- **Primary (#111111):** Deep charcoal black used for dramatic overlays, text, and emotional gravity.
- **Secondary (#6B6B6B):** Neutral gray used for supporting text, metadata, and secondary UI elements.
- **Tertiary (#C0392B):** Mission red used for calls-to-action, donation prompts, rescue messaging, and urgency.
- **Neutral (#F7F5F2):** Warm off-white that softens the interface and keeps the organization approachable.
- **Accent Gold (#D9A441):** Used sparingly for hope-oriented moments, milestones, and highlighted impact metrics.
- **Success (#3E7C59):** Reserved for positive action confirmations and restoration-focused messaging.

Color usage rules:

- Use the tertiary red only for the most important actions or mission-critical emphasis.
- Avoid bright saturated palettes that make the mission feel commercial.
- Preserve strong contrast between imagery and text overlays.
- Neutral backgrounds should dominate informational pages.
- Use dark overlays on hero photography to maintain readability.

## Typography

Typography should feel confident, readable, and emotionally direct.

Headlines use a bold geometric sans-serif such as Montserrat to create urgency and clarity. Body copy uses Open Sans or an equivalent humanist sans-serif for readability across long-form stories, testimonials, and donation content.

Typography priorities:

- Strong emotional headlines
- Clear donation messaging
- Readable storytelling blocks
- Excellent mobile legibility
- High accessibility contrast

Display headlines should be large, condensed visually through spacing, and often paired with emotional photography.

Body text should maintain generous line spacing and avoid dense nonprofit-style paragraphs.

Avoid:

- Thin font weights
- Decorative serif headlines
- Overly modern startup typography
- Excessive italics
- Tiny text over photography

## Layout

The layout system is editorial and impact-focused.

Pages should alternate between:

- Full-width emotional storytelling sections
- High-contrast impact metrics
- Donation or action-focused conversion sections
- Modular mission cards
- Testimonial and rescue-story sections

The design should breathe. Use generous vertical spacing between sections.

Preferred layout characteristics:

- Full-width hero imagery
- Large headline blocks
- Strong CTA hierarchy
- Alternating light and dark sections
- Mobile-first stacking behavior
- Clear scan patterns for donors

Use asymmetric composition sparingly and only to support storytelling.

Primary CTA placement should remain highly consistent across pages.

## Elevation & Depth

Depth should feel subtle and documentary-inspired rather than app-like.

Use:

- Soft shadows
- Tonal layering
- Dark image overlays
- Contrast shifts between sections
- Gentle card elevation

Avoid:

- Heavy neumorphism
- Extreme glassmorphism
- Bright glowing effects
- Over-animated UI elements

Cards should feel tactile and trustworthy.

Hero sections should rely more on cinematic imagery and tonal contrast than dramatic visual effects.

## Shapes

The shape language balances softness with seriousness.

Cards and content containers should use medium rounded corners. Buttons should use pill-style radii to feel approachable and touch-friendly.

Preferred shape characteristics:

- Rounded CTA buttons
- Soft-edged cards
- Clean rectangular content layouts
- Minimal ornamental shapes

Avoid:

- Sharp aggressive corners everywhere
- Excessively playful rounded interfaces
- Highly futuristic shapes
- Heavy skeuomorphic styling

Consistency is more important than novelty.

## Components

### Buttons

Primary buttons should use the tertiary rescue red with white text and strong contrast.

Button copy should be action-oriented:

- Donate Now
- Join the Fight
- Become a Partner
- Rescue a Child
- Learn More

Buttons should feel immediate and emotionally actionable.

Secondary buttons may use transparent or dark styles depending on background context.

### Hero Sections

Hero sections are emotionally central.

Use:

- Large photographic imagery
- High-opacity dark overlays
- Bold mission headlines
- Short emotionally direct supporting copy
- Singular primary CTA

Avoid clutter in hero regions.

### Impact Statistics

Statistics should be large, bold, and emotionally resonant.

Examples include:

- Children rescued
- Countries served
- Monthly support impact
- Prevention program reach

Numbers should use oversized typography and minimal surrounding decoration.

### Donation Panels

Donation modules should prioritize trust and simplicity.

Include:

- Clear giving outcomes
- Monthly and one-time options
- Minimal form friction
- Secure visual cues
- Strong contrast CTA buttons

Suggested donation framing:

- Prevent
- Rescue
- Heal

### Story Cards

Story cards should highlight real people and transformation.

Use:

- Authentic photography
- Brief excerpts
- Clear emotional hierarchy
- Simple navigation to full stories

Cards should feel respectful and human-centered.

### Navigation

Navigation should be simple and mission-focused.

Primary nav priorities:

- About
- Our Story
- The Solution
- Get Involved
- Give
- Contact

Avoid overcrowded mega-menus.

The donation CTA should remain persistently visible on desktop and mobile.

### Forms

Forms should feel calm and trustworthy.

Use:

- Large tap targets
- Clear labels
- Minimal required fields
- Strong success/error messaging
- Accessible contrast ratios

Avoid overly technical form styling.

## Do's and Don'ts

### Do

- Use emotionally authentic photography
- Keep calls-to-action visible and clear
- Maintain strong accessibility contrast
- Use whitespace generously
- Prioritize mobile readability
- Create emotional momentum through storytelling
- Keep donation flows frictionless
- Use real-world impact language
- Maintain visual consistency across campaigns

### Don't

- Use trendy startup aesthetics disconnected from the mission
- Over-design critical messaging
- Use excessive animation
- Overcrowd pages with too many CTAs
- Use stock imagery that feels staged or artificial
- Hide donation actions deep in the interface
- Use bright cheerful palettes that reduce emotional seriousness
- Make mission stories feel transactional
- Use tiny text over imagery

## Brand Keywords

- Rescue
- Hope
- Restoration
- Compassion
- Courage
- Urgency
- Protection
- Dignity
- Healing
- Freedom
- Advocacy
- Faith in action

## Accessibility Standards

- Maintain WCAG AA minimum contrast ratios.
- All CTA buttons must remain readable over imagery.
- Donation flows must be fully keyboard accessible.
- Body copy should not drop below 16px on mobile.
- Form labels must remain permanently visible.
- Video content should include captions whenever possible.
- Emotional storytelling must never compromise readability.

## Motion Guidance

Animation should feel restrained and purposeful.

Recommended motion:

- Soft fade-ins
- Subtle parallax on hero imagery
- Gentle hover transitions
- Smooth scrolling anchors
- Counter animations for impact statistics

Avoid:

- Bouncy animations
- Overly playful transitions
- Rapid flashing motion
- Gamified interactions

Motion should reinforce dignity, seriousness, and hope.

