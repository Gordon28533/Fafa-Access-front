# Fafa Access Frontend

Frontend application for the Fafa Access platform.

## Tech Stack

- React 18
- Vite
- React Router
- TypeScript + JavaScript components

## Quick Start

1. Install dependencies:
   ```bash
   npm install
   ```
2. Configure environment:
   ```bash
   cp .env.example .env
   ```
3. Start dev server:
   ```bash
   npm run dev
   ```

Frontend default: `http://localhost:5173`

## Scripts

- `npm run dev` - start Vite dev server
- `npm run build` - build production assets
- `npm run preview` - preview production build
- `npm run lint` - run ESLint

## Project Layout

- `src/pages/` - route pages
- `src/components/` - reusable UI components
- `src/contexts/` - app-wide context providers
- `src/services/` - frontend API service layer
- `src/styles/` - global and feature styles

## Notes

This repository is frontend-only. Backend API is maintained in a separate repository.
