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
