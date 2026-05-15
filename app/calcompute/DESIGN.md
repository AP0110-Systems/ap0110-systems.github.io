---
version: alpha
name: CalCompute Public Infrastructure
description: Public-sector AI infrastructure design system for California government, universities, and public institutions.

colors:
  primary: "#0A0F1C"
  secondary: "#4B5563"
  tertiary: "#2563EB"
  neutral: "#F8FAFC"
  surface: "#FFFFFF"
  surface-alt: "#F1F5F9"
  border: "#E2E8F0"
  success: "#16A34A"
  warning: "#D97706"
  error: "#DC2626"
  on-primary: "#FFFFFF"
  on-surface: "#0F172A"
  on-tertiary: "#FFFFFF"

typography:
  headline-display:
    fontFamily: Inter
    fontSize: 64px
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: -0.04em

  headline-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -0.03em

  headline-md:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: 650
    lineHeight: 1.2
    letterSpacing: -0.02em

  body-lg:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: 0em

  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: 0em

  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0em

  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0.02em

  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0.04em

rounded:
  sm: 6px
  md: 12px
  lg: 20px
  xl: 28px
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
    textColor: "{colors.on-tertiary}"
    rounded: "{rounded.full}"
    typography: "{typography.label-lg}"
    padding: 14px

  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.full}"
    typography: "{typography.label-lg}"
    padding: 14px

  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
    padding: 24px

  section:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-surface}"

  navbar:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"

  hero-panel:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.xl}"
    padding: 40px
---

# CalCompute DESIGN.md

## Overview

CalCompute is a public infrastructure platform, not a startup SaaS product.

The visual system should communicate:
- Institutional legitimacy
- Technical sophistication
- Public trust
- Research credibility
- California-scale infrastructure
- Calm confidence instead of venture-backed hype

The interface should feel:
- Minimal
- Serious
- Spacious
- Quietly ambitious
- Durable
- Accessible
- Policy-aware
- Academic rather than corporate

This is infrastructure for governments, universities, and researchers. Every design decision should reinforce stability, openness, and long-term stewardship.

Avoid startup aesthetics, growth-hacking patterns, crypto visual language, or exaggerated AI futurism.

The site should resemble:
- Public-interest infrastructure
- Research institutions
- Modern government platforms
- High-end developer tooling
- Academic computing systems

The overall emotional tone is:
“Public cloud infrastructure built to research standards.”

## Colors

The palette uses restrained institutional neutrals with a single confident blue accent.

- **Primary (#0A0F1C):** Deep infrastructure navy used for hero sections, key statements, and major emphasis.
- **Secondary (#4B5563):** Slate gray for supporting copy, metadata, and utility content.
- **Tertiary (#2563EB):** Action blue for links, calls-to-action, and interactive focus states.
- **Neutral (#F8FAFC):** Cool off-white background for large content surfaces.
- **Surface (#FFFFFF):** Primary card and layout surface.
- **Border (#E2E8F0):** Quiet structural separation without visible heaviness.

Color usage should prioritize readability and restraint over visual expressiveness.

Avoid gradients unless extremely subtle.

Avoid saturated neon colors, cyberpunk palettes, or dark-mode-only aesthetics.

## Typography

Typography should feel editorial, technical, and institutional.

Use Inter throughout the system for consistency and readability.

Headlines should be:
- Dense
- Confident
- Tight in tracking
- Left-aligned
- Large but not theatrical

Body text should prioritize:
- Long-form readability
- Policy clarity
- Technical comprehension
- Accessibility

Paragraph widths should remain constrained for readability.

Avoid:
- Decorative typography
- Excessive uppercase
- Condensed display fonts
- Startup-style oversized marketing copy

Numeric and infrastructure metrics should align cleanly in grid layouts.

## Layout

The layout system is modular, spacious, and grid-oriented.

Use:
- Wide horizontal breathing room
- Structured content blocks
- Consistent vertical rhythm
- Large section spacing
- Left-aligned content hierarchy

Pages should scroll like:
- Technical documentation
- Research briefings
- Infrastructure overviews

Hero sections should establish:
- Clear mission statement
- Institutional trust
- Immediate understanding of purpose

Cards should be:
- Quiet
- Border-light
- Structured
- Information-dense without clutter

Avoid:
- Excessive animation
- Floating marketing elements
- Aggressive conversion patterns
- Dashboard overload
- Dense enterprise UI chrome

## Elevation & Depth

Depth should be subtle and functional.

Use minimal shadows with low blur and low opacity.

Most surfaces should rely on:
- Spacing
- Borders
- Contrast
instead of dramatic elevation.

Cards may use soft ambient shadows only when necessary for separation.

The interface should feel flat, stable, and infrastructural.

Avoid:
- Glassmorphism
- Heavy drop shadows
- Overlapping floating panels
- Skeuomorphic effects

## Shapes

The design language uses soft but restrained geometry.

Corners should feel:
- Modern
- Friendly
- Institutional
- Durable

Primary actions use pill-shaped buttons.

Cards use medium-to-large radii to soften dense technical content.

Avoid:
- Sharp aggressive geometry
- Extreme rounded “playful” UI
- Blob shapes
- Organic asymmetry

Shapes should support clarity and calmness.

## Components

### Buttons

Primary buttons:
- Solid blue fill
- White text
- Medium weight
- Pill radius

Secondary buttons:
- White or neutral background
- Thin border
- Minimal emphasis

Buttons should never feel sales-oriented.

### Navigation

Navigation should be:
- Thin
- Quiet
- Minimal
- Text-first

Avoid oversized navbars or promotional announcement bars.

### Cards

Cards organize:
- Infrastructure capabilities
- Policy sections
- Research information
- Institutional partnerships

Cards should emphasize hierarchy through spacing rather than decoration.

### Data & Metrics

Statistics and milestones should appear:
- Structured
- Grid-aligned
- Editorial
- Easy to scan

Metrics should resemble institutional reports rather than startup KPI dashboards.

### CTAs

Calls-to-action should feel civic and collaborative.

Preferred language:
- “Request Early Access”
- “Learn More”
- “Read the Framework”
- “Join the Coalition”

Avoid:
- “Get Started Now”
- “Scale Faster”
- “Unlock Growth”
- “10x Productivity”

## Do's and Don'ts

### Do

- Design for trust first
- Use restrained visual hierarchy
- Prioritize readability
- Emphasize public infrastructure
- Maintain institutional tone
- Use whitespace generously
- Keep interactions calm and predictable
- Design for policymakers and researchers equally
- Treat AI as infrastructure, not spectacle

### Don't

- Use venture-backed startup aesthetics
- Over-market AI capabilities
- Add unnecessary motion
- Use hype-driven language
- Introduce crypto or sci-fi visual motifs
- Overuse gradients or glowing effects
- Build growth-hacking UX patterns
- Sacrifice clarity for novelty
- Make the interface feel commercial-first