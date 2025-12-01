/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './web-assets/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },
      colors: {
        'ap-cyan': '#00b0ff',
        'ap-red': '#E4002B',
        'ap-orange': '#FF4F00',
        'ap-yellow': '#E2B46C',
        'ap-green': '#47B332',
        'ap-blue': '#0032A0',
        'ap-violet': '#8E24AA',
      },
      backgroundImage: {
        'hero-pattern': "url('/images/rosa-rafael-rQSKTNvaVdE-unsplash-2.jpg')",
      },
    },
  },
  plugins: [],
}
