# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a cabin rental website built with React, TypeScript, Vite, and Tailwind CSS v4. Generated from a Figma design, it features a luxury aesthetic with extensive UI components from shadcn/ui (Radix UI primitives).

## Build Commands

```bash
npm install       # Install dependencies
npm run dev       # Start development server (Vite, typically http://localhost:5173)
npm run build     # Build for production (outputs to dist/)
```

## Architecture

### Component Structure
The app uses a single-page layout with distinct sections orchestrated in `src/app/App.tsx`:

```
src/
├── main.tsx                    # Entry point
├── app/
│   ├── App.tsx                 # Root component with scroll navigation
│   └── components/
│       ├── HeroSection.tsx     # Hero with CTA buttons
│       ├── GallerySection.tsx  # Photo gallery
│       ├── HighlightsSection.tsx
│       ├── BookingSection.tsx  # Date picker and reservation
│       ├── RatesPoliciesSection.tsx
│       ├── LocationSection.tsx
│       ├── FAQSection.tsx
│       ├── ContactSection.tsx
│       ├── Footer.tsx
│       ├── figma/              # Figma-specific utilities
│       └── ui/                 # 48 shadcn/ui components
└── styles/
    ├── index.css               # Main stylesheet
    ├── fonts.css               # Cormorant, Inter fonts
    ├── tailwind.css            # Tailwind directives
    └── theme.css               # CSS variables and design tokens
```

### Key Patterns
- **Scroll Navigation**: App.tsx passes scroll callbacks to HeroSection for CTA navigation using `scrollIntoView()`
- **Path Alias**: Use `@` for imports from `./src` (configured in vite.config.ts)
- **Toast Notifications**: Sonner toaster wrapped at root level
- **Dark Mode**: Supported via CSS variables and `.dark` class, managed by next-themes

### Styling System
- **Tailwind CSS v4** with @tailwindcss/vite plugin
- **Design tokens** in `src/styles/theme.css`:
  - Primary: `#3F4F3A` (forest green)
  - Secondary: `#E8E4DD` (warm cream)
  - Background: `#FDFCFA` (off-white)
- **Typography**: Cormorant (serif headings), Inter (body)
- **Component utilities**: clsx, tailwind-merge, class-variance-authority

### Key Dependencies
- React 18.3 with TypeScript
- react-hook-form for form handling
- react-day-picker for calendar/date selection
- Radix UI primitives via shadcn/ui
- MUI Material (secondary component library)
- lucide-react for icons
- motion for animations
