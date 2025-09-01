# Tech Context - My App

## Stack công nghệ

### Frontend Framework

- **Next.js 15**: React framework với App Router
  - Server-side rendering và static generation
  - File-based routing system
  - Built-in optimization và performance
  - Turbopack cho development build nhanh hơn

### Runtime & Language

- **React 19**: Latest stable version
- **TypeScript 5**: Type safety và developer experience
- **Node.js**: Runtime environment

### UI & Styling

- **Ant Design 5.27.1**: Component library chính
  - Pre-built components với design system
  - Icons package (@ant-design/icons)
  - Theming và customization support
- **Tailwind CSS 4**: Utility-first CSS framework
  - PostCSS integration
  - Responsive design utilities
  - Custom design tokens

### Form Management

- **React Hook Form 7.62.0**:
  - Performance-focused form library
  - Minimal re-renders
  - Built-in validation
  - TypeScript support

### Development Tools

- **ESLint 9**: Code linting với Next.js config
- **Prettier 3.6.2**: Code formatting
- **TypeScript**: Static type checking
- **Husky 9.1.7**: Git hooks
- **lint-staged**: Pre-commit linting
- **Commitlint**: Conventional commit messages

### Package Management

- **Yarn**: Preferred package manager (theo memory)
- **pnpm**: Hiện tại đang sử dụng (có pnpm-lock.yaml)

### HTTP Client

- **undici**: Preferred cho HTTP/HTTPS calls (theo memory)
- Chưa được implement, cần thêm vào dependencies

## Cấu trúc dự án

### Directory Structure

```
src/
├── app/                 # Next.js App Router
│   ├── (auth)/         # Route group cho authentication
│   │   └── login/      # Login page
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # Reusable components
│   └── SignInForm.tsx  # Login form component
├── config/            # Configuration files
├── lib/               # Utilities và libraries
└── utils/             # Helper functions
```

### Fonts

- **Geist Sans**: Primary font family
- **Geist Mono**: Monospace font cho code

## Development Setup

### Scripts

- `dev`: Development server với Turbopack
- `build`: Production build với Turbopack
- `start`: Production server
- `lint`: ESLint checking
- `typecheck`: TypeScript type checking
- `prepare`: Husky setup

### Environment

- **OS**: Linux (WSL2)
- **Shell**: zsh
- **IDE**: Cursor với intelligent features

## Constraints & Decisions

### Technical Constraints

- Must use TypeScript cho type safety
- Responsive design required
- Performance optimization essential
- SEO-friendly implementation

### Architectural Decisions

- App Router over Pages Router (Next.js 13+)
- Component-based architecture
- Controlled forms với React Hook Form
- Utility-first CSS với Tailwind
- Pre-built components từ Ant Design

### Code Quality

- ESLint rules enforcement
- Prettier formatting
- Conventional commits
- Pre-commit hooks
- TypeScript strict mode

## Dependencies Management

### Production Dependencies

- Core: next, react, react-dom
- UI: antd, @ant-design/icons
- Forms: react-hook-form
- HTTP: undici (cần thêm)

### Development Dependencies

- Build: typescript, @types/\*
- Linting: eslint, prettier
- Git: husky, lint-staged, commitlint
- Styling: tailwindcss, postcss

## Performance Considerations

- Turbopack cho faster builds
- Next.js built-in optimizations
- Tree shaking và code splitting
- Image optimization
- Font optimization với next/font
