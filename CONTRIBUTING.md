# Contributing to Fafa Access Frontend

Thank you for your interest in contributing to the Fafa Access Frontend! This document provides guidelines and instructions for contributing.

## 🚀 Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/Fafa-Access-front.git
   cd Fafa-Access-front
   ```
3. **Add upstream remote**:
   ```bash
   git remote add upstream https://github.com/Gordon28533/Fafa-Access-front.git
   ```
4. **Install dependencies**:
   ```bash
   npm install
   ```
5. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 📝 Code Style Guidelines

### TypeScript
- Use TypeScript for all new files
- Avoid using `any` type - use proper type definitions
- Export interfaces and types from `src/types/`
- Use meaningful variable and function names

### React Components
- Use functional components with hooks
- Keep components focused on a single responsibility
- Use proper prop types with TypeScript interfaces
- Implement error boundaries where appropriate

### File Organization
```
src/
├── components/     # Reusable UI components
├── pages/         # Page components
├── layouts/       # Layout wrappers
├── hooks/         # Custom React hooks
├── contexts/      # React contexts
├── services/      # API service layer
├── utils/         # Utility functions
├── types/         # TypeScript types
└── assets/        # Static assets
```

### Naming Conventions
- **Components**: PascalCase (e.g., `UserProfile.tsx`)
- **Hooks**: camelCase with 'use' prefix (e.g., `useAuth.ts`)
- **Utilities**: camelCase (e.g., `formatDate.ts`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `API_ENDPOINTS.ts`)
- **Types/Interfaces**: PascalCase (e.g., `User`, `ApiResponse`)

## 🧪 Testing

Before submitting a pull request:

1. **Lint your code**:
   ```bash
   npm run lint
   ```

2. **Build the application**:
   ```bash
   npm run build
   ```

3. **Test locally**:
   ```bash
   npm run dev
   ```

## 📋 Pull Request Process

1. **Update your fork** with the latest upstream changes:
   ```bash
   git fetch upstream
   git checkout main
   git merge upstream/main
   ```

2. **Rebase your feature branch**:
   ```bash
   git checkout feature/your-feature-name
   git rebase main
   ```

3. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

4. **Create a Pull Request** on GitHub with:
   - Clear title describing the change
   - Detailed description of what was changed and why
   - Screenshots for UI changes
   - Reference to any related issues

5. **Wait for review** - maintainers will review your PR and may request changes

## 🐛 Bug Reports

When reporting bugs, please include:
- Clear description of the issue
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable
- Browser and OS information
- Console error messages

## 💡 Feature Requests

For feature requests:
- Describe the feature and its benefits
- Explain the use case
- Provide mockups or examples if possible

## ✅ Commit Message Guidelines

Use clear, descriptive commit messages:

```
feat: add user profile page
fix: resolve login redirect issue
docs: update deployment instructions
style: format code with prettier
refactor: simplify auth context
perf: optimize image loading
test: add unit tests for utils
chore: update dependencies
```

## 🔒 Security

If you discover a security vulnerability:
1. **DO NOT** open a public issue
2. Email the maintainers directly
3. Provide detailed information about the vulnerability

## 📄 License

By contributing, you agree that your contributions will be licensed under the same license as the project.

## 🙏 Thank You

Your contributions make this project better for everyone!
