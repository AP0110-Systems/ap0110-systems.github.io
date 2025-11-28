# Web Assets Components

This directory contains reusable React components that can be shared across multiple AP0110 sites.

## Components

### Header.jsx
Navigation header component with logo and menu items.

**Dependencies:**
- Next.js: `next/link`, `next/navigation` (usePathname)
- TailwindCSS for styling

**Usage:**
```jsx
import Header from '@/web-assets/components/Header'

<Header 
  className="custom-class" 
  showLogo={true}
>
  {/* Optional children */}
</Header>
```

### Footer.jsx
Footer component with extended content that switches between fixed and absolute positioning.

**Dependencies:**
- Next.js: `next/navigation` (usePathname)
- Custom hook: `useScrollIndicator`
- Components: `Button`, `AmericanFlagIcon`, `VolunteerModal`
- TailwindCSS for styling

**Usage:**
```jsx
import Footer from '@/web-assets/components/Footer'

<Footer />
```

## Supporting Components

### icons/AmericanFlagIcon.jsx
SVG icon component for the American flag.

### ui/Button.jsx
Reusable button component with multiple variants and sizes.

**Dependencies:**
- `utils/cn` for class merging
- TailwindCSS

### ui/Card.jsx
Card component with glass morphism effects.

**Dependencies:**
- `utils/cn` for class merging
- TailwindCSS

### VolunteerModal.jsx
Modal component for volunteer signup and newsletter subscription.

**Dependencies:**
- `ui/Button`
- `ui/Card`

## Hooks

### hooks/useScrollIndicator.js
Custom hook that tracks scroll position and page height in viewport units.

**Returns:**
- `scrollPositionInVh`: Current scroll position in viewport height units
- `pageHeightInViewports`: Total page height in viewport units

## Utils

### utils/cn.js
Utility function for merging TailwindCSS classes using `clsx` and `tailwind-merge`.

## Installation Requirements

When using these components in a project, ensure you have:

1. **Next.js** (for routing and navigation hooks)
2. **React** (for component framework)
3. **TailwindCSS** (for styling)
4. **clsx** and **tailwind-merge** (for class utilities):
   ```bash
   npm install clsx tailwind-merge
   ```

## Import Path Configuration

To use these components, configure your project's path aliases (e.g., in `jsconfig.json` or `tsconfig.json`):

```json
{
  "compilerOptions": {
    "paths": {
      "@/web-assets/*": ["../Web-Assets/*"]
    }
  }
}
```

Or use relative imports:
```jsx
import Header from '../../../Web-Assets/components/Header'
```

## Notes

- These components are designed for Next.js projects but can be adapted for other React frameworks
- All components use TailwindCSS utility classes
- Some components rely on Next.js-specific features (Link, usePathname) and may need adaptation for non-Next.js projects
- The `ap-blue` color class should be defined in your TailwindCSS configuration

