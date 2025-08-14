# Overview

This is a professional personal portfolio website for Raed Fadhlaoui, a Full Stack Developer (.NET/JS) and OSS Contributor. The application is built as a modern, responsive single-page application showcasing personal projects, skills, experience, education, certifications, volunteer experience, testimonials, and providing a contact form. The portfolio features a clean light theme design with smooth animations and multi-language support (English, French, Arabic) with RTL support for Arabic.

## Recent Changes (January 2025)
- **GitHub Pages Deployment Ready** - Created complete static build configuration with automatic GitHub Actions deployment workflow
- **Static Build System** - Added vite.config.static.ts for frontend-only builds without server dependencies
- **Deployment Automation** - Implemented `.github/workflows/deploy.yml` for automatic deployment on push to main branch
- **Build Scripts** - Created `build-static.js` script for easy local static builds and deployment preparation
- **Complete Dark Mode Enhancement** - Fixed all text contrast issues across every component ensuring perfect readability in both light and dark themes
- **Major Code Cleanup & Optimization** - Removed unused CSS classes, consolidated duplicate styles, cleaned up empty lines, and streamlined codebase structure
- **Technology Tags Dark Mode** - Updated all technology badges in Projects and Experience sections with proper dark mode backgrounds and text colors
- **Contact Section Polish** - Enhanced social links and call-to-action sections with appropriate dark theme styling (email links remain functional in static build)
- **Skills Section Improvement** - Fixed category titles and skill progress bars for optimal dark mode visibility
- **Navigation Simplification** - Cleaned up scroll function using modern scrollIntoView API and reverted to clean EN/FR/AR language switcher without flags
- **Complete Multilingual Support** - Achieved 100% translation coverage across English, French, and Arabic for every text element
- **Professional SEO Implementation** - Added comprehensive meta tags, Schema.org markup, geographic targeting, and structured data
- **Custom Favicon & Branding** - Created professional RF monogram favicon in SVG format with consistent branding
- **Performance Optimization** - Added DNS prefetching, proper meta tags, and web manifest for PWA capabilities
- Maintained clean, professional design with premium agency-grade styling and perfect theme consistency

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The client uses a modern React-based architecture with TypeScript for type safety. The application follows a component-based structure with:

- **React 18** with functional components and hooks
- **TypeScript** for static type checking and better developer experience
- **Tailwind CSS** with shadcn/ui components for consistent, modern styling
- **Wouter** for lightweight client-side routing
- **TanStack React Query** for server state management and API calls
- **Context API** for theme management (dark/light mode) and internationalization

## Component Structure
The application uses a hierarchical component structure:
- Main sections: Hero, About, Projects, Skills, Experience, Contact, Footer
- Reusable UI components from shadcn/ui library
- Custom hooks for intersection observer animations and mobile detection
- Context providers for global state (theme, language)

## Backend Architecture
The server implements a lightweight REST API using:

- **Express.js** as the web framework
- **TypeScript** for consistency with frontend
- **In-memory storage** with an interface design that allows easy migration to persistent storage
- **Zod** for request validation using shared schemas

## Database Design
Currently uses in-memory storage with well-defined interfaces for:
- **Users table** with id, username, and password fields
- **Contact messages table** for form submissions with name, email, message, and timestamp
- **Drizzle ORM** configured for PostgreSQL migration path with schema definitions

## API Structure
RESTful API endpoints:
- `POST /api/contact` - Submit contact form with validation
- `GET /api/contact` - Retrieve contact messages (admin functionality)

Request validation is handled through shared Zod schemas ensuring type safety between client and server.

## Development Tooling
- **Vite** for fast development server and optimized production builds
- **ESBuild** for server-side bundling
- **PostCSS** with Tailwind for CSS processing
- **Replit integration** for cloud development environment

# External Dependencies

## UI and Styling
- **shadcn/ui components** - Complete React component library built on Radix UI primitives
- **Tailwind CSS** - Utility-first CSS framework for responsive design
- **Radix UI** - Accessible, unstyled UI components
- **Lucide React** - Icon library for consistent iconography
- **class-variance-authority** - Utility for creating variant-based component APIs

## State Management and Data Fetching
- **TanStack React Query** - Server state management, caching, and synchronization
- **React Hook Form** - Form state management and validation
- **Zod** - TypeScript-first schema validation

## Database and ORM
- **Drizzle ORM** - Type-safe SQL toolkit configured for PostgreSQL
- **Neon Database Serverless** - Serverless PostgreSQL database driver
- **Drizzle Kit** - Database migration and introspection tools

## Development and Build Tools
- **TypeScript** - Static type checking for both client and server
- **Vite** - Fast build tool and development server
- **ESBuild** - JavaScript bundler for production builds
- **PostCSS** with Autoprefixer - CSS processing and vendor prefixing

## Internationalization and Accessibility
- **Custom translation system** supporting English, French, and Arabic
- **RTL support** for Arabic language
- **Intersection Observer API** for scroll-triggered animations
- Full keyboard navigation and screen reader compatibility through Radix UI

## Deployment and Hosting
- **Replit** integration for cloud development
- **GitHub Pages** ready with automatic deployment workflow via GitHub Actions
- **Static Build Support** with dedicated configuration for frontend-only deployment
- Build configuration supports deployment to Vercel/Netlify/GitHub Pages
- Automated deployment on push to main branch
- Custom domain support configuration available