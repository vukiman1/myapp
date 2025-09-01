# System Patterns - My App

## Kiến trúc tổng thể

### Application Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Presentation  │    │   Business      │    │   Data          │
│   Layer         │    │   Logic         │    │   Layer         │
├─────────────────┤    ├─────────────────┤    ├─────────────────┤
│ • Components    │◄──►│ • Form Logic    │◄──►│ • API Calls     │
│ • Pages         │    │ • Validation    │    │ • State Mgmt    │
│ • Layouts       │    │ • Auth Logic    │    │ • Local Storage │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

### Next.js App Router Pattern

- **Route Groups**: `(auth)` cho authentication pages
- **Nested Layouts**: Shared layouts cho route groups
- **Server/Client Components**: Phân biệt rendering strategy
- **File Conventions**: `page.tsx`, `layout.tsx`, `loading.tsx`

## Component Patterns

### Component Architecture

```
src/components/
├── forms/              # Form-specific components
│   ├── SignInForm.tsx
│   └── SignUpForm.tsx
├── ui/                 # Base UI components
├── layout/             # Layout components
└── shared/             # Shared utilities
```

### Form Component Pattern

```typescript
// Pattern: Controlled Forms với React Hook Form
const FormComponent = () => {
  const { control, handleSubmit, formState } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    // Business logic
  };

  return (
    <Form onFinish={handleSubmit(onSubmit)}>
      <Controller
        name="field"
        control={control}
        rules={{ required: "Error message" }}
        render={({ field }) => <Input {...field} />}
      />
    </Form>
  );
};
```

### Component Composition

- **Container/Presentational**: Logic vs UI separation
- **Compound Components**: Related components grouped together
- **Render Props**: Flexible component reusability
- **Custom Hooks**: Shared logic extraction

## State Management Patterns

### Form State

- **React Hook Form**: Primary form state management
- **Controlled Components**: Ant Design integration
- **Validation**: Real-time validation với rules
- **Error Handling**: Centralized error display

### Application State

- **Local State**: useState cho component-specific state
- **Server State**: Sẽ sử dụng cho API data
- **Session State**: Authentication state management

## Styling Patterns

### CSS Architecture

```
globals.css              # Global styles và resets
├── Tailwind utilities   # Utility classes
├── Component styles     # Component-specific styles
└── Ant Design theme     # Design system overrides
```

### Styling Strategy

- **Utility-First**: Tailwind CSS cho layout và spacing
- **Component Library**: Ant Design cho complex components
- **CSS Variables**: Custom properties cho theming
- **Responsive Design**: Mobile-first approach

## Data Flow Patterns

### Authentication Flow

```
1. User Input → 2. Validation → 3. Submit → 4. API Call → 5. Response → 6. Redirect
     ↓              ↓             ↓          ↓           ↓          ↓
   Form State → Error State → Loading → HTTP Request → Auth State → Navigation
```

### Error Handling Pattern

```typescript
// Pattern: Centralized error handling
const handleError = (error: Error) => {
  // Log error
  console.error(error);

  // Display user-friendly message
  message.error(getErrorMessage(error));

  // Reset form state if needed
  reset();
};
```

## Code Organization Patterns

### File Naming Conventions

- **Components**: PascalCase (`SignInForm.tsx`)
- **Pages**: lowercase (`page.tsx`, `layout.tsx`)
- **Utilities**: camelCase (`formatDate.ts`)
- **Constants**: UPPER_CASE (`API_ENDPOINTS.ts`)

### Import/Export Patterns

```typescript
// Named exports cho utilities
export const formatDate = () => {};
export const validateEmail = () => {};

// Default exports cho components
export default function SignInForm() {}

// Barrel exports cho clean imports
export { SignInForm } from "./SignInForm";
export { SignUpForm } from "./SignUpForm";
```

### TypeScript Patterns

```typescript
// Interface cho props
interface ComponentProps {
  title: string;
  onSubmit: (data: FormData) => void;
}

// Type cho form data
type SignInInputs = {
  email: string;
  password: string;
};

// Generic types cho reusability
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}
```

## Performance Patterns

### Optimization Strategies

- **Code Splitting**: Dynamic imports cho large components
- **Memoization**: React.memo cho expensive components
- **Lazy Loading**: Suspend components khi cần
- **Bundle Analysis**: Webpack bundle analyzer

### Loading Patterns

```typescript
// Pattern: Loading states
const [isLoading, setIsLoading] = useState(false);

const handleSubmit = async (data) => {
  setIsLoading(true);
  try {
    await submitForm(data);
  } finally {
    setIsLoading(false);
  }
};
```

## Security Patterns

### Input Validation

- **Client-side**: React Hook Form validation
- **Server-side**: API validation (sẽ implement)
- **Sanitization**: Input cleaning trước khi submit
- **XSS Prevention**: Proper escaping và sanitization

### Authentication Security

- **Token Management**: Secure storage và refresh
- **HTTPS Only**: Production environment
- **CSRF Protection**: Cross-site request forgery prevention
- **Session Management**: Proper logout và cleanup

## Testing Patterns (Future)

### Testing Strategy

- **Unit Tests**: Component logic testing
- **Integration Tests**: Form submission flows
- **E2E Tests**: Complete user journeys
- **Visual Regression**: UI consistency testing
