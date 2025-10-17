# AP0110 Font-Mono Feature

This feature automatically applies `font-mono` styling to all instances of "AP0110" throughout the application.

## How it works

The feature uses a DOM traversal algorithm that:

1. **Scans the entire document** for text nodes containing "AP0110"
2. **Wraps each instance** in a `<span className="font-mono">AP0110</span>`
3. **Avoids double-processing** by checking if the text is already styled
4. **Handles dynamic content** through MutationObserver for SPA navigation
5. **Skips code elements** like `<script>`, `<style>`, `<code>`, and `<pre>`

## Implementation

### Files Created/Modified

- `src/utils/applyMonoToAP0110.ts` - Core utility functions
- `src/hooks/useAP0110Mono.ts` - React hook wrapper
- `src/components/AP0110MonoProvider.tsx` - React component wrapper
- `app/layout.tsx` - Integrated into root layout

### Usage

The feature is automatically enabled across the entire application through the root layout. No additional setup is required.

## Features

- ✅ **Automatic detection** of all AP0110 instances
- ✅ **Dynamic content support** for SPA navigation
- ✅ **Avoids double-processing** of already styled text
- ✅ **Performance optimized** with targeted DOM traversal
- ✅ **TypeScript support** with full type safety

## Browser Compatibility

- Modern browsers with ES6+ support
- MutationObserver API support
- DocumentFragment API support

## Performance

- Lightweight DOM traversal
- Efficient text node processing
- Minimal memory footprint
- Debounced mutation observation
