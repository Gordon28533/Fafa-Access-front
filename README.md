# Fafa Access - Frontend

A modern, production-ready web application for the Fafa Access Student Laptop Access Platform. Built with React, TypeScript, and Vite for optimal performance and developer experience.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Access to the Fafa Access backend API

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Gordon28533/Fafa-Access-front.git
cd Fafa-Access-front
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

Edit `.env` and update `VITE_API_URL` to point to your backend API.

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 📁 Project Structure

```
src/
 ├─ components/      # Reusable UI components
 ├─ pages/          # Page components (routes)
 ├─ layouts/        # Layout components
 ├─ services/       # API service layer
 ├─ hooks/          # Custom React hooks
 ├─ contexts/       # React context providers
 ├─ utils/          # Utility functions
 ├─ lib/            # Third-party library configurations
 ├─ styles/         # Global styles and CSS
 ├─ assets/         # Static assets (images, fonts, etc.)
 └─ types/          # TypeScript type definitions
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server (port 5173)
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 🚢 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Gordon28533/Fafa-Access-front)

#### Manual Deployment Steps:

1. **Connect to Vercel:**
   - Sign up/login to [Vercel](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect the Vite framework

2. **Configure Environment Variables:**
   In your Vercel project settings, add:
   ```
   VITE_API_URL=https://your-backend-api-url.com/api
   VITE_APP_NAME=Fafa Access
   VITE_APP_VERSION=1.0.0
   ```

3. **Update API Proxy:**
   Edit `vercel.json` and update the backend URL in the `rewrites` section:
   ```json
   "rewrites": [
     {
       "source": "/api/:path*",
       "destination": "https://your-backend-api-url.com/api/:path*"
     }
   ]
   ```

4. **Deploy:**
   - Push to your main branch
   - Vercel will automatically build and deploy
   - Your site will be live at `https://your-project.vercel.app`

### Other Deployment Options

#### Netlify
```bash
npm run build
# Upload the 'dist' folder to Netlify
```

#### Traditional Hosting
```bash
npm run build
# Upload contents of 'dist' folder to your web server
```

## 🔧 Configuration Files

- `package.json` - Dependencies and scripts
- `tsconfig.json` - TypeScript configuration
- `vite.config.ts` - Vite build configuration
- `.eslintrc.cjs` - ESLint rules
- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration
- `vercel.json` - Vercel deployment settings
- `.env.example` - Environment variables template

## 📝 Environment Variables

Create a `.env` file based on `.env.example`:

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_API_URL` | Backend API base URL | `http://localhost:3000/api` |
| `VITE_APP_NAME` | Application name | `Fafa Access` |
| `VITE_APP_VERSION` | Application version | `1.0.0` |
| `VITE_ENABLE_ANALYTICS` | Enable analytics tracking | `false` |
| `VITE_DATADOG_ENABLED` | Enable Datadog RUM | `false` |
| `VITE_DATADOG_APP_ID` | Datadog application ID | - |
| `VITE_DATADOG_CLIENT_TOKEN` | Datadog client token | - |

⚠️ **Important:** All frontend environment variables must be prefixed with `VITE_` to be accessible in the application.

## 🧩 Tech Stack

- **React 18** - UI library with hooks and concurrent features
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **Recharts** - Composable charting library
- **ESLint** - Code linting and quality

## 📋 Development Guidelines

### Code Style
- Follow TypeScript best practices
- Use functional components with hooks
- Keep components small and focused (single responsibility)
- Use meaningful variable and function names
- Add JSDoc comments for complex functions

### Component Organization
- Place reusable components in `src/components/`
- Place page-specific components in `src/pages/`
- Use the API service layer in `src/services/` for all HTTP requests
- Create custom hooks in `src/hooks/` for reusable logic
- Use contexts in `src/contexts/` for global state management

### Type Safety
- Define interfaces for all data structures
- Avoid using `any` type
- Use strict TypeScript configuration
- Export types from `src/types/`

### Performance
- Use React.memo() for expensive components
- Implement code splitting with lazy loading
- Optimize images and assets
- Use the production build for deployment

## 🔒 Security Features

- Content Security Policy headers (via Vercel)
- XSS protection headers
- Frame options to prevent clickjacking
- Secure cookie handling
- Environment variable validation
- Input sanitization

## 🏗️ Build Optimization

The production build includes:
- Code splitting for vendor and chart libraries
- Tree shaking to remove unused code
- Minification of JS, CSS, and HTML
- Asset optimization and compression
- Source map generation (disabled by default for security)

## 🔗 Related Repositories

- Backend API: [Fafa-Access](https://github.com/Gordon28533/Fafa-Access)

## 📦 Professional Improvements Implemented

1. **Separated Frontend from Backend** - Clean separation for easier deployment and scaling
2. **Vercel-Optimized Configuration** - Ready for one-click deployment
3. **Security Headers** - Protection against common web vulnerabilities
4. **Build Optimization** - Code splitting and vendor chunking
5. **Environment Management** - Proper configuration for different environments
6. **Type Safety** - Full TypeScript support with strict mode
7. **Asset Caching** - Long-term caching for static assets
8. **API Proxy Setup** - Seamless API communication in all environments

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 💬 Support

For support and questions, please open an issue in the GitHub repository.

---

**Built with ❤️ for Fafa Access**
