## AP0110.org - Independent Internet (Web 4.0) Development

**AP0110.org** is the official website for AP0110 Systems' Independent Internet (Web 4.0) technology development. Our core mission is to build decentralized, user-owned internet infrastructure through open-source development, mesh networking, post-quantum security, and edge computing technologies.

### Core Mission

AP0110.org focuses on:
- **Independent Internet (Web 4.0) Development** - Building the next generation of decentralized internet infrastructure
- **AP0110 Network Operating System** - Modular, containerized network OS for routers and servers
- **Open Protocols & Standards** - Creating publicly documented, interoperable networking protocols
- **Community Development** - Fostering an open-source community of developers and curators

### Current Applications

AP0110 technologies are currently being applied to:
- CalCompute (SB-53)
- Providing independent internet infrastructure for disenfranchised children worldwide
- Demonstrating Web 4.0 capabilities in challenging regulatory environments

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation
```bash
# Clone the repository (with submodules)
git clone --recursive https://github.com/AP0110-Systems/ap0110-systems.github.io.git
cd ap0110-systems.github.io

# Or if already cloned, initialize submodules
git submodule update --init --recursive

# Install dependencies
npm install

# Start development server (assets are automatically copied from Web-Assets submodule)
npm run dev
```

### Available Scripts
```bash
npm run dev          # Start development server (copies Web-Assets automatically)
npm run build        # Build for production (copies Web-Assets automatically)
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking
```

### Web-Assets Integration

This repository uses the [Web-Assets](https://github.com/AP0110-Systems/Web-Assets) repository as a git submodule to share assets (images, components) across AP0110 websites.

- **Submodule location**: `web-assets/`
- **Assets are copied** from `web-assets/public/images/` to `public/images/` during build/dev
- **To update assets**: Pull the latest Web-Assets submodule:
  ```bash
  git submodule update --remote web-assets
  ```

The build process automatically copies assets from the submodule, so you don't need to manually manage files in `public/images/Partners/`.

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
