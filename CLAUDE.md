# CLAUDE.md - Project Overview and Architecture

## Project Overview

**Project Name**: my-app  
**Type**: Modern Next.js 15 web application with App Router  
**Primary Purpose**: E-commerce platform with authentication and user management  
**Status**: Actively in development

## Technology Stack

### Core Framework

- **Next.js 15** - React framework with App Router and Turbopack
- **React 19** - Latest stable React version
- **TypeScript 5** - Type safety and modern JavaScript features

### UI & Styling

- **Ant Design 5.27.1** - Primary component library
  - Icons: @ant-design/icons
  - Next.js registry integration: @ant-design/nextjs-registry
  - React 19 compatibility: @ant-design/v5-patch-for-react-19
- **Tailwind CSS 4** - Utility-first CSS framework
  - PostCSS integration for build processing
  - Custom CSS variables for theming
- **Custom Theme System** - Light/dark mode with CSS variables

### State Management & Data Fetching

- **TanStack Query 5.87.0** - Server state management
  - React Query DevTools integration
  - Custom hooks for data fetching

### Forms & Validation

- **React Hook Form 7.62.0** - High-performance form management
  - Built-in validation
  - Minimal re-renders
  - TypeScript support

### Internationalization

- **i18next 25.4.2** - Internationalization framework
- **react-i18next 15.7.3** - React bindings
- **next-i18next 15.4.2** - Next.js integration
- **Languages**: Vietnamese (default), English

### Development Tools

- **ESLint 9** - Code linting with Next.js config
- **Prettier 3.6.2** - Code formatting
- **Husky 9.1.7** - Git hooks
- **lint-staged** - Pre-commit linting
- **Commitlint** - Conventional commit messages
- **Package Manager**: pnpm (current)

## Project Structure

```
src/
├── app/                          # Next.js App Router
│   ├── (auth)/                  # Route group for authentication
│   │   ├── signin/              # Login page
│   │   └── register/            # Registration page (JSX)
│   ├── api/                     # API routes
│   │   ├── auth/                # Authentication API
│   │   │   └── auth.ts          # Auth API implementation
│   │   └── client.ts            # API client configuration
│   ├── globals.css              # Global styles with theme variables
│   ├── layout.tsx              # Root layout with providers
│   └── page.tsx                # Home page
├── components/                  # Reusable components
│   ├── auth/                   # Authentication components
│   │   ├── SignInForm.tsx       # Login form component
│   │   └── RegisterForm.tsx     # Registration form component
│   ├── base/                   # Base UI components
│   │   ├── header/             # Header components
│   │   │   ├── header.tsx      # Main header
│   │   │   ├── sub_header.tsx  # Sub header
│   │   │   └── top_header.tsx  # Top header
│   │   └── chat/               # Chat component
│   │       └── chat.tsx        # Chat implementation
│   ├── providers/              # Context providers
│   │   ├── I18nProvider.tsx    # Internationalization provider
│   │   ├── QueryProvider.tsx   # TanStack Query provider
│   │   └── AntdThemeProvider.tsx # Ant Design theming
│   └── HomeSections/           # Home page sections
├── config/                     # Configuration files
│   ├── constants/              # Constants
│   │   └── language.ts         # Language constants
│   └── i18.js                  # i18next configuration
├── hooks/                      # Custom hooks
│   └── hooks.ts                # Custom React hooks
├── lib/                        # Utility libraries
│   ├── cloudflare/             # Cloudflare integrations
│   │   └── cloudflare_turnstile.tsx # Turnstile component
│   ├── selectLanguage.tsx      # Language selector
│   └── selectTheme.tsx         # Theme selector
├── locales/                    # Translation files
│   ├── en.json                 # English translations
│   └── vi.json                 # Vietnamese translations
├── middleware.ts               # Next.js middleware
├── app/style/                  # App-specific styles
│   └── theme.css               # Theme definitions
└── helper/                     # Helper functions
    └── localstorage.ts          # Local storage utilities

memory-bank/                    # Project documentation
├── projectbrief.md             # Project overview and goals
├── techContext.md             # Technical stack details
├── progress.md                # Development progress tracking
└── ...                        # Additional documentation
```

## Architecture Patterns

### Provider Hierarchy

The application follows a hierarchical provider pattern in `src/app/layout.tsx`:

1. **ThemeProvider** (next-themes) - Manages light/dark mode
2. **AntdThemeProvider** - Applies Ant Design theming
3. **AntdRegistry** - Ant Design component registry
4. **QueryProvider** - TanStack Query context
5. **I18nProvider** - Internationalization context

### Authentication Flow

- **Middleware Protection**: Routes are protected via `src/middleware.ts`
- **Public Routes**: `/`, `/signin`, `/register` are accessible without authentication
- **Token Storage**: Uses cookies for authentication tokens
- **API Client**: Centralized HTTP client with error handling

### Form Architecture

- **React Hook Form**: Performance-focused form management
- **Validation**: Built-in validation with custom error messages
- **Loading States**: Async form submission with loading indicators
- **Responsive Design**: Mobile-optimized form layouts

### Theme System

- **CSS Variables**: Custom properties for light/dark themes
- **Tailwind Integration**: Custom utility classes for theme-aware styling
- **Ant Design Theming**: Custom theme provider for Ant Design components
- **System Preference**: Follows system color scheme by default

## Key Configuration Files

### Package.json Scripts

```json
{
  "dev": "next dev --turbopack", // Development server with Turbopack
  "build": "next build --turbopack", // Production build with Turbopack
  "start": "next start", // Production server
  "lint": "eslint . --ext .js,.jsx,.ts,.tsx",
  "typecheck": "tsc --noEmit"
}
```

### TypeScript Configuration

- **Strict Mode**: Enabled for type safety
- **Path Aliases**: `@/*` maps to `./src/*`
- **Target**: ES2017 with modern features
- **Module Resolution**: Bundler-based

### Environment Variables

- **NEXT_PUBLIC_API_URL**: Base API URL for external API calls
- Authentication cookies managed via middleware

## Development Workflow

### Getting Started

1. Install dependencies: `pnpm install`
2. Run development server: `pnpm dev`
3. Open http://localhost:3000

### Code Quality Standards

- **ESLint**: Next.js TypeScript configuration
- **Prettier**: Consistent code formatting
- **Commitlint**: Conventional commit messages
- **lint-staged**: Pre-commit linting

### Testing

- **Current**: No testing framework implemented
- **Future Plans**: Jest + React Testing Library integration planned

## Key Features Implemented

### ✅ Completed

- Next.js 15 setup with App Router
- Ant Design + Tailwind CSS integration
- Authentication foundation (login form)
- Multi-language support (Vietnamese/English)
- Theme system (light/dark mode)
- Responsive design
- Middleware-based route protection
- Form validation with React Hook Form

### 🔄 In Progress

- Registration form implementation
- API integration for authentication
- User dashboard development
- Navigation system refinement

### 📋 Planned

- Advanced authentication features
- User profile management
- Shopping cart functionality
- Product catalog
- Order management

## Architecture Notes

### Performance Considerations

- **Turbopack**: Faster development builds
- **Image Optimization**: Next.js Image component usage
- **Code Splitting**: Automatic via Next.js
- **Font Optimization**: Geist fonts with next/font

### Security Considerations

- **Authentication**: JWT tokens stored in cookies
- **Route Protection**: Middleware-based access control
- **Form Validation**: Client-side validation with server-side checks
- **CSP**: Content Security Policy considerations

### Accessibility

- **ARIA Labels**: Implementation in progress
- **Keyboard Navigation**: Form navigation support
- **Color Contrast**: Theme-aware contrast ratios
- **Responsive Design**: Mobile-first approach

## Environment Context

### Development Environment

- **OS**: Linux (WSL2)
- **Terminal**: zsh
- **IDE**: Cursor with intelligent features
- **Package Manager**: pnpm (memory suggests Yarn preferred)

### Current Project Context

- **Primary Language**: Vietnamese with English mixed in
- **Target Market**: Vietnamese users
- **Business Domain**: E-commerce (tech/gear)
- **Development Team**: Small team with focus on rapid iteration

## Dependencies Management

### Critical Dependencies

- `next` - React framework
- `react` & `react-dom` - React ecosystem
- `antd` - UI components
- `@tanstack/react-query` - State management
- `react-hook-form` - Form handling
- `i18next` - Internationalization

### Missing Dependencies (According to Memory)

- `undici` - Preferred HTTP client (not yet implemented)
- Testing libraries (Jest, React Testing Library)
- State management library (if needed beyond TanStack Query)

## Common Patterns & Conventions

### File Naming

- **Components**: PascalCase (e.g., `SignInForm.tsx`)
- **Hooks**: camelCase with `use` prefix (e.g., `useMe.ts`)
- **Utilities**: camelCase (e.g., `apiFetch.ts`)
- **Configs**: camelCase (e.g., `i18.js`)

### Code Style

- **TypeScript**: Strict mode with proper typing
- **ESLint**: Next.js recommended rules
- **Prettier**: Consistent formatting
- **Imports**: Use absolute imports with `@/` alias

### Component Structure

- **Props**: TypeScript interfaces for type safety
- **State**: React hooks with proper typing
- **API Calls**: TanStack Query for server state
- **Styling**: Tailwind classes with custom theme variables

## Important Notes for Future Claude Instances

1. **Language Context**: The project uses Vietnamese primarily with some English mixed in. Be aware of this when generating text content.

2. **Authentication**: The authentication system is foundational but not fully implemented. The current login form is a mock implementation.

3. **API Integration**: The API client is set up but not fully connected to backend services. Use `apiFetch` for all HTTP calls.

4. **Theme System**: The project uses a sophisticated theme system with CSS variables. Always use the provided theme-aware classes.

5. **Internationalization**: i18next is configured with Vietnamese as default. Use translation keys instead of hardcoded strings.

6. **Performance**: The project uses Turbopack for development builds. Be mindful of performance when adding new dependencies.

7. **File Structure**: Follow the established patterns in the src/ directory. The memory-bank folder contains important project context.

8. **Package Manager**: Currently using pnpm, but memory suggests Yarn as preferred. Consider this when adding new dependencies.

9. **Testing**: No testing framework is currently implemented. Consider adding Jest and React Testing Library for future development.

10. **Accessibility**: Focus on accessibility improvements, particularly ARIA labels and keyboard navigation.
