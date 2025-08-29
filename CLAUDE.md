# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 project for a SoftVanguard redesign concept built with TypeScript and React 19. The project uses a component-based architecture with CSS modules for styling.

## Development Commands

- `npm run dev` - Start the development server (http://localhost:3000)
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

## Architecture

### File Structure

- `src/app/` - Next.js App Router pages and layout
- `src/components/` - Reusable React components organized by type:
  - `layout/` - Layout components (Header, Footer)
  - `ui/` - UI components (Brand, Buttons, DropDownMenus)
- `src/lib/` - Utility functions and shared logic
- `public/images/` - Static assets (SoftVanguard logos)

### Component Organization

Components follow a consistent pattern:

- Each component has its own directory with TypeScript file, CSS module, and index.ts
- Components use CSS modules for styling (e.g., `Component.module.css`)
- Index files provide clean exports from component directories

### Styling

- CSS Modules for component-specific styles
- Global styles in `src/app/globals.css`
- Geist fonts loaded via Next.js font optimization
- Utility function `cn()` in `src/lib/utils.ts` combines clsx for conditional classes

### TypeScript Configuration

- Path alias `@/*` maps to `./src/*` for clean imports
- Strict TypeScript configuration enabled
- Next.js TypeScript plugin integrated

### Key Dependencies

- Next.js 15 with App Router
- React 19
- TypeScript 5
- clsx for conditional styling
- ESLint with Next.js configuration

The project structure emphasizes modularity with clear separation between layout, UI components, and utilities.

- 請把所有claude相關檔案放置在gitignore中，並且不要把你自己設置為co-author
