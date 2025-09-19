import "@ant-design/v5-patch-for-react-19";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import I18nProvider from "@/components/providers/I18nProvider";
import QueryProvider from "@/components/providers/QueryProvider";
import { ThemeProvider } from "next-themes";
import AntdThemeProvider from "@/components/providers/AntdThemeProvider";
import { AntdRegistry } from "@ant-design/nextjs-registry";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "My App",
  description: "My App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.className} ${geistMono.className} ${inter.className} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="theme"
        >
          <AntdThemeProvider>
            <AntdRegistry>
              <QueryProvider>
                <I18nProvider>{children}</I18nProvider>
              </QueryProvider>
            </AntdRegistry>
          </AntdThemeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
