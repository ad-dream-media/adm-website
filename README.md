# Ad Dream Media - Next.js Website

A modern, animated website for Ad Dream Media LTD built with Next.js 14, TypeScript, Tailwind CSS, and GSAP.

## Features

- ⚡ Next.js 14 with App Router
- 🎨 Tailwind CSS for styling
- ✨ GSAP animations with ScrollTrigger
- 📱 Fully responsive design
- 🎯 SEO optimized
- 🚀 Ready for Vercel deployment

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   ├── privacy-policy/     # Privacy policy page
│   │   ├── terms-and-conditions/ # Terms page
│   │   └── globals.css         # Global styles
│   └── components/
│       ├── Header.tsx          # Navigation header
│       ├── HeroSection.tsx     # Hero section
│       ├── ServicesMarquee.tsx # Services marquee
│       ├── TeamSection.tsx     # Team/Expertise/Mission
│       └── Footer.tsx          # Footer
├── public/                     # Static assets
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json              # TypeScript configuration
└── package.json               # Dependencies

```

## Deployment to Vercel

### Option 1: Using Vercel CLI

1. Install Vercel CLI (if not already installed):

```bash
npm install -g vercel
```

2. Deploy to production:

```bash
npm run deploy:website
```

### Option 2: Using Vercel Dashboard

1. Push your code to GitHub
2. Import the repository in [Vercel Dashboard](https://vercel.com/dashboard)
3. Vercel will automatically detect Next.js and deploy

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run deploy:website` - Deploy to Vercel

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **GSAP** - Animation library
- **Vercel** - Deployment platform

## Console Logs

The application includes comprehensive console logs for debugging:
- Component mounting/unmounting
- Animation setup and cleanup
- Scroll event tracking
- GSAP version information

## License

© 2020 – 2025 Ad Dream Media LTD
