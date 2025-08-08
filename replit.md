# Overview

This is a professional personal portfolio website for Raed Fadhlaoui, a Full Stack Developer (.NET/JS) and OSS Contributor. The application is built as a modern, responsive single-page application showcasing personal projects, skills, experience, education, certifications, and providing a contact form. The portfolio features a sleek dark theme design with smooth animations and multi-language support (English, French, Arabic) with RTL support for Arabic.

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
- Build configuration supports static deployment to Vercel/Netlify
- Environment variable configuration for database connections