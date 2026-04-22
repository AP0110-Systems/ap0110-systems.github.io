# Shared Components

Reusable React components for ap0110.org. All components use Tailwind CSS utilities and the `cn()` helper from `@/utils/cn`.

## Layout

### Header.jsx
Top navigation bar with logo and route links.

### Footer.jsx
Site footer. Uses `/images/moon.webp` and the `useScrollIndicator` hook for scroll-aware positioning.

## Visualizations

### Earth.jsx
Three.js 3D Earth globe. Requires `/images/globe/earth-day.jpg`.

### Moon.jsx
Moon globe visualization. Requires `/images/globe/lunar_surface.jpg`.

### MoonDataOverlay.jsx
Data overlay panel rendered on top of the Moon component.

### WorldMap.jsx
Leaflet interactive world map.

### CaliforniaUCMap.jsx
UC campus map using Leaflet and `/public/california-*.json` geo data.

### flyover.jsx
Flyover animation component.

## UI Primitives

### ui/Button.jsx
Button with multiple variants and sizes.

### ui/Card.jsx
Card with glass morphism styling.

### icons/AmericanFlagIcon.jsx
SVG American flag icon.

## Modals

### VolunteerModal.jsx
Volunteer signup / newsletter modal.

### DonationModal.jsx
Donation flow modal.

## Utilities

### TypingText.jsx
Animated typing text component.

### LazyBackgroundImage.jsx
Intersection-observer-based lazy background image loader.

### LazyDigitalRain.jsx / LazyStars.jsx / LazyPartners.jsx
Lazy-loaded wrappers for heavy visual components.

### AP0110MonoProvider.jsx
Context provider for the AP0110 monospace font.

## Import path

```jsx
import Header from '@/components/Header'
import Button from '@/components/ui/Button'
```
