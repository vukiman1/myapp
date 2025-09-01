# Active Context - My App

## Trọng tâm công việc hiện tại

### Giai đoạn hiện tại: Authentication Foundation

Dự án đang ở giai đoạn xây dựng nền tảng cho hệ thống authentication. Đã hoàn thành form đăng nhập cơ bản và đang chuẩn bị mở rộng thành hệ thống authentication hoàn chỉnh.

### Công việc vừa hoàn thành

- ✅ **Cấu trúc dự án Next.js 15**: Setup với App Router và TypeScript
- ✅ **UI Foundation**: Tích hợp Ant Design + Tailwind CSS
- ✅ **SignInForm Component**: Form đăng nhập với validation
  - Email validation với regex pattern
  - Password validation với độ dài tối thiểu
  - Loading state và error handling
  - Responsive design
- ✅ **Development Setup**: ESLint, Prettier, Husky, lint-staged
- ✅ **Route Structure**: Authentication route group `(auth)/login`

### Công việc đang thực hiện

- 🔄 **Memory Bank Setup**: Tạo documentation system hoàn chỉnh
- 🔄 **Code Review**: Đánh giá và cải thiện SignInForm component

## Quyết định kỹ thuật gần đây

### Architecture Decisions

1. **App Router vs Pages Router**: Chọn App Router cho performance và DX tốt hơn
2. **Form Library**: React Hook Form cho performance và flexibility
3. **UI Strategy**: Kết hợp Ant Design (components) + Tailwind (utilities)
4. **TypeScript**: Strict mode cho type safety

### Implementation Decisions

1. **Route Groups**: Sử dụng `(auth)` để tổ chức authentication pages
2. **Component Structure**: Tách biệt form logic và presentation
3. **Validation Strategy**: Client-side validation với React Hook Form
4. **Styling Approach**: Inline styles cho Ant Design, Tailwind cho layout

## Thách thức hiện tại

### Technical Challenges

1. **Package Manager Mismatch**:
   - Memory cho biết prefer Yarn [[memory:3836324]]
   - Nhưng hiện tại đang dùng pnpm (có pnpm-lock.yaml)
   - Cần quyết định và standardize

2. **HTTP Client**:
   - Memory cho biết prefer undici [[memory:7139972]]
   - Chưa được thêm vào dependencies
   - Cần implement cho API calls

3. **Language Consistency**:
   - SignInForm có mix tiếng Việt và tiếng Anh
   - Cần standardize theo yêu cầu user (tiếng Việt)

### Design Challenges

1. **Form UX**: Cần improve error messaging và user feedback
2. **Responsive**: Test và optimize cho mobile experience
3. **Accessibility**: Chưa implement ARIA labels và keyboard navigation

## Kế hoạch ngắn hạn (1-2 tuần)

### Immediate Next Steps

1. **Hoàn thiện Authentication**:
   - Tạo SignUpForm component
   - Implement forgot password flow
   - Add form validation improvements

2. **API Integration**:
   - Setup undici cho HTTP calls
   - Create API client structure
   - Implement authentication endpoints

3. **Code Quality**:
   - Fix language consistency issues
   - Add proper TypeScript types
   - Improve accessibility

### Technical Improvements

1. **Performance**:
   - Add loading skeletons
   - Implement error boundaries
   - Optimize bundle size

2. **Security**:
   - Input sanitization
   - CSRF protection
   - Secure token storage

## Kế hoạch trung hạn (1 tháng)

### Feature Development

1. **User Dashboard**: Post-login user interface
2. **Profile Management**: User settings và preferences
3. **Session Management**: Proper logout và token refresh
4. **Testing Suite**: Unit và integration tests

### Infrastructure

1. **State Management**: Context API hoặc external library
2. **Error Handling**: Global error boundary và reporting
3. **Logging**: Client-side error tracking
4. **Performance Monitoring**: Core Web Vitals tracking

## Metrics và Goals

### Current Metrics

- **Components**: 1 (SignInForm)
- **Pages**: 2 (Home, Login)
- **Form Fields**: 2 (Email, Password)
- **Validation Rules**: 3 (Required, Email format, Min length)

### Target Metrics (Next Sprint)

- **Components**: 5+ (Add SignUp, Layout, Navigation)
- **Pages**: 4+ (Add Dashboard, Profile)
- **Test Coverage**: 80%+
- **Performance Score**: 90+ (Lighthouse)
- **Accessibility Score**: 95+ (WCAG AA)

## Decisions Pending

### Technical Decisions

1. **State Management**: Context API vs Redux vs Zustand
2. **Database**: PostgreSQL vs MongoDB vs Supabase
3. **Deployment**: Vercel vs Netlify vs AWS
4. **Authentication Provider**: Custom vs Auth0 vs Supabase Auth

### Design Decisions

1. **Theme System**: Dark mode support
2. **Mobile Navigation**: Drawer vs Bottom tabs
3. **Error Handling**: Toast vs Inline vs Modal
4. **Loading States**: Skeleton vs Spinner vs Progressive

## Team Communication

- **Documentation**: Memory Bank system cho knowledge sharing
- **Code Style**: ESLint + Prettier configuration
- **Commit Style**: Conventional commits với Commitlint
- **Review Process**: PR templates và checklists (sẽ setup)
