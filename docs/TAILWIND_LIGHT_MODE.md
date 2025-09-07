# Tại Sao Không Có `light:` Modifier Trong Tailwind CSS

## Vấn Đề

Bạn thắc mắc tại sao không thể sử dụng `light:` classes như `light:bg-gradient-to-r` trong Tailwind CSS.

## Giải Thích

### Tailwind CSS Chỉ Có `dark:` Modifier

Tailwind CSS mặc định chỉ cung cấp `dark:` modifier, không có `light:` modifier built-in.

```css
/* ✅ Có sẵn */
.dark\:bg-blue-500 {
  /* dark mode styles */
}

/* ❌ Không có sẵn */
.light\:bg-blue-500 {
  /* không tồn tại */
}
```

### Lý Do Thiết Kế

1. **Light mode là default**: Tailwind giả định light mode là trạng thái mặc định
2. **Dark mode là exception**: Dark mode được coi là variation của light mode
3. **Simplicity**: Giảm complexity và bundle size

## Solutions

### 1. CSS Variables Approach (✅ Recommended)

```css
/* CSS Variables */
:root {
  --gradient-from: #1e3a8a; /* Light mode gradient */
  --gradient-to: #312e81;
}

.dark {
  --gradient-from: #111827; /* Dark mode gradient */
  --gradient-to: #1f2937;
}

/* Custom Class */
.bg-gradient-theme {
  background: linear-gradient(
    to right,
    var(--gradient-from),
    var(--gradient-to)
  );
}
```

```tsx
// Usage
<div className="bg-gradient-theme">Content</div>
```

### 2. Component-Based Approach

```tsx
const BackgroundGradient = ({ children }) => {
  const { resolvedTheme } = useTheme();

  const gradientClass =
    resolvedTheme === "dark"
      ? "bg-gradient-to-r from-gray-900 to-gray-800"
      : "bg-gradient-to-r from-blue-800 to-indigo-900";

  return <div className={gradientClass}>{children}</div>;
};
```

### 3. Tailwind Config Extension (Advanced)

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      screens: {
        light: { raw: "(prefers-color-scheme: light)" },
      },
    },
  },
};
```

Nhưng cách này không được khuyến nghị vì:

- Conflict với existing Tailwind logic
- Browser support issues
- Maintenance overhead

### 4. Arbitrary Values với CSS Variables

```tsx
// Sử dụng arbitrary values
<div className="bg-[linear-gradient(to_right,var(--gradient-from),var(--gradient-to))]">
```

## Best Practice: CSS Variables

### Ưu Điểm

1. **Clean HTML**: Không có conditional logic trong JSX
2. **Performance**: CSS handles transitions natively
3. **Maintainable**: Single source of truth
4. **Scalable**: Easy to add more themes

### Implementation

```css
/* globals.css */
:root {
  --gradient-from: #1e3a8a;
  --gradient-to: #312e81;
}

.dark {
  --gradient-from: #111827;
  --gradient-to: #1f2937;
}

.bg-gradient-theme {
  background: linear-gradient(
    to right,
    var(--gradient-from),
    var(--gradient-to)
  );
  transition: background 0.2s ease;
}
```

```tsx
// Component
<div className="bg-gradient-theme">{/* Theme tự động switch */}</div>
```

## Kết Luận

- ❌ `light:` modifier không tồn tại trong Tailwind
- ✅ Sử dụng CSS Variables + Custom Classes
- ✅ Component-based approach cho logic phức tạp
- ✅ Avoid arbitrary values cho maintainability

CSS Variables approach là best practice cho theme management trong production apps.
