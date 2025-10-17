# AP0110 Systems Website

The official website for AP0110 Systems, focused on providing independent internet access to disenfranchised children around the world.

## About

AP0110 Systems is a technology company with a mission to provide independent internet access to disenfranchised children globally. The website showcases our technology solutions, community initiatives, and educational resources.

## Website Sections

- **Home**: Main landing page with community information and calls to action
- **Children**: Interactive globe visualization showing global reach and impact
- **Web 4.0**: Comprehensive whitepaper on decentralized internet access
- **Education**: Technology solutions and educational resources

## Technologies

- **Next.js 15**: React framework with App Router
- **React 19**: Latest React with modern features
- **TypeScript**: Type-safe development
- **TailwindCSS**: Utility-first styling
- **Three.js**: 3D globe visualization
- **Leaflet**: Interactive maps

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/AP0110-Systems/ap0110-systems.github.io.git
cd ap0110-systems.github.io

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking
```

## Project Structure

```
app/                  # Next.js App Router pages
├── children/         # Children page with globe visualization
├── education/        # Education/technology page
├── web4/            # Web 4.0 whitepaper
└── layout.tsx       # Root layout

src/
├── components/       # React components
│   ├── ui/          # Reusable UI components
│   ├── Earth.tsx    # 3D globe component
│   ├── Moon.tsx     # Moon visualization
│   └── WorldMap.tsx # Interactive world map
├── context/         # React Context providers
├── hooks/           # Custom React hooks
├── styles/          # Global styles
├── types/           # TypeScript definitions
└── utils/           # Utility functions
```

## Features

- **Interactive 3D Globe**: Visual representation of global connectivity
- **Responsive Design**: Optimized for all devices
- **Modern UI**: Glassmorphism design with smooth animations
- **Educational Content**: Web 4.0 whitepaper and technology documentation
- **Community Focus**: Information about contributing and volunteering

## Deployment

The website is configured for GitHub Pages deployment and can also be deployed to Vercel or other platforms.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## Mission

**AP0110 Systems Mission**: Provide Independent Internet to disenfranchised children around the world