# Cheap Transfers Cabo Website

A modern Next.js website for Cheap Transfers Cabo - your friendly, family-run transportation service in Los Cabos, Mexico. This website showcases transportation services, tours, and activities throughout the Los Cabos region.

## Features

- **Next.js 16** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Responsive Design** - Mobile, tablet, and desktop optimized
- **Google Fonts** - Montserrat font family
- **SEO Optimized** with proper metadata
- **Dynamic Activity Pages** - Dynamic routing for individual tour/activity pages
- **Image Optimization** - Next.js Image component for optimized assets

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Rodrigo
```

2. Install dependencies:
```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The page auto-updates as you edit the files.

### Build

Build the production application:

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Linting

Run ESLint to check for code issues:

```bash
npm run lint
```

## Project Structure

```
├── app/
│   ├── layout.tsx              # Root layout with fonts and metadata
│   ├── page.tsx                # Homepage
│   ├── globals.css             # Global styles with Tailwind
│   ├── about/
│   │   └── page.tsx            # About page
│   ├── contact/
│   │   └── page.tsx            # Contact page
│   ├── activity/
│   │   ├── page.tsx            # Activities listing page
│   │   ├── [slug]/
│   │   │   └── page.tsx        # Dynamic activity detail pages
│   │   └── reservation/
│   │       └── page.tsx        # Activity reservation page
│   ├── cabo/
│   │   └── reservation/
│   │       └── page.tsx        # Cabo reservation page
│   └── policy/
│       └── page.tsx            # Privacy policy page
├── components/
│   ├── homepage/               # Homepage-specific components
│   │   ├── Hero.tsx
│   │   ├── IntroText.tsx
│   │   ├── OurServices.tsx
│   │   ├── WhyTrustUs.tsx
│   │   ├── AboutUs.tsx
│   │   ├── Activities.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   ├── aboutpage/              # About page components
│   │   ├── AboutHero.tsx
│   │   ├── AboutWelcome.tsx
│   │   ├── AboutMeetRodrigo.tsx
│   │   ├── AboutMissionVision.tsx
│   │   ├── AboutCallToAction.tsx
│   │   └── AboutNavigation.tsx
│   ├── allactivitycomponents/  # Activity-related components
│   │   └── Activities.tsx
│   └── CustomHero.tsx          # Reusable hero component
├── lib/
│   ├── data.ts                 # Activity data and content
│   └── utils.ts                 # Utility functions (cn helper)
├── public/                     # Static assets
│   ├── activity/               # Activity images
│   ├── aboutus/                # About page images
│   ├── contact/                 # Contact page assets
│   ├── home/                    # Homepage assets
│   ├── client/                  # Client testimonials images
│   └── socialmedia/             # Social media icons
├── components.json             # shadcn/ui configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
├── tsconfig.json               # TypeScript configuration
└── next.config.js              # Next.js configuration
```

## Available Activities & Tours

The website features the following activities and tours:

1. **La Paz** - City Tour & Beach Day (10+ hours)
2. **Todos Santos** - Explore the Charm (5+ hours)
3. **Cerritos Beach** - Relax, Surf & Explore (6+ hours)
4. **Los Cabos** - Explore the Best of Los Cabos (5+ hours)
5. **Art Walk** - San José del Cabo (5+ hours)
6. **Horseback Riding** - Beach & Desert Trail (1:45-2 hours)
7. **Hidden Towns** - Southern Baja (7+ hours)
8. **Desert Safari** - Razor Desert & Beach Adventure (1:45-2 hours)
9. **ATV's** - Desert & Beach Adventure (1:45-2 hours)
10. **40 ft Sport Fishing Boat** - Full & Half Day Adventures
11. **33 Footer Boat** - Private boat experience

Activity data is managed in `lib/data.ts` and can be easily updated there.

## Design

This website is based on the Figma design: [Cheap Cabo Website Redesign](https://www.figma.com/design/m2ypNnYX4eXsg9PaMuG21N/Cheap-Cabo-WEbsite-redesign?node-id=265-1113)

## Technologies Used

- **Framework**: Next.js 16
- **Language**: TypeScript 5.9
- **Styling**: Tailwind CSS 3.4
- **UI Utilities**: 
  - class-variance-authority
  - clsx
  - tailwind-merge
  - tailwindcss-animate
- **Icons**: lucide-react
- **Fonts**: Google Fonts (Montserrat)

## Features Implemented

### Homepage Sections

1. **Hero Section** - Eye-catching introduction with CTAs
2. **Intro Text** - Welcome message and company introduction
3. **Services Section** - Three main service offerings
4. **Trust Section** - Four key value propositions
5. **About Section** - Company story and mission
6. **Activities Section** - Featured tours and activities grid
7. **Testimonials** - Customer reviews with images
8. **Contact Section** - Contact form and information
9. **Footer** - Site navigation, contact details, and social media links

### Additional Pages

- **About Page** - Detailed company information, mission, vision, and team
- **Contact Page** - Contact form and business information
- **Activities Listing** - Grid view of all available activities
- **Activity Detail Pages** - Dynamic pages for each activity with full details
- **Reservation Pages** - Booking forms for activities
- **Policy Page** - Privacy policy and terms

## Contact Information

- **Phone**: +52 (624) 182 0525
- **Email**: bookingcheaptransferscabo@gmail.com
- **Location**: Cabo San Lucas, Baja California Sur, Mexico
- **Hours**: 24/7 Service Available

## Development Notes

- All images are optimized using Next.js Image component
- Components are modular and reusable
- Activity data is centralized in `lib/data.ts` for easy content management
- Responsive design follows mobile-first approach
- TypeScript ensures type safety throughout the application

## License

All Rights Reserved - Cheap Transfers Cabo



















