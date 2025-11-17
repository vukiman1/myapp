import Header from "@/components/base/header/header";
import SubHeader from "@/components/base/header/sub_header";
import { Topheader } from "@/components/base/header/top_header";
import { Sections } from "@/components/HomeSections/Sections";
import StickyBanner from "@/components/HomeSections/StickyBanner/StickyBanner";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Topheader />
      <Header />
      <SubHeader />
      <StickyBanner />
      <main className="bg-[var(--body-color-bg)]">
        <Sections />
      </main>
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full space-y-8 p-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">My App</h1>
            <p className="text-lg text-gray-600 mb-8">
              Test ứng dụng đăng nhập
            </p>

            <Link
              href="/signin"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              🔐 Đăng nhập
            </Link>

            <div className="mt-6 text-sm text-gray-500">
              <p>Click vào nút trên để test chức năng đăng nhập</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
