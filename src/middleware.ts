import { NextRequest, NextResponse } from "next/server";

// Define public routes that don't require authentication
const publicRoutes = ["/signin", "/register", "/"];

export default function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Check if current route is public
  const isPublicRoute = publicRoutes.includes(pathname);

  // If accessing a public route, allow access
  if (isPublicRoute) {
    return NextResponse.next();
  }

  // For now, we'll check if user has a token in cookies
  // In a real app, you might want to verify the token validity
  const token = req.cookies.get("auth-token")?.value;

  // If no token and trying to access protected route, redirect to signin
  if (!token) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  // If authenticated, allow access
  return NextResponse.next();
}

// Configure which paths this middleware should run on
export const config = {
  // Match all paths except static files and API routes
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder files
     */
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
