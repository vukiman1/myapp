import Link from "antd/es/typography/Link";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-[var(--color-primary)]">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-2 justify-center">
            <div className="flex items-center gap-1 max-lg:flex-row-reverse">
              <Link href="/" className="m-2 ">
                <picture>
                  <source
                    media="(max-width: 1023px)"
                    srcSet="/images/logo/logo-mobile.svg"
                    width={40}
                  />
                  <Image
                    src="/images/logo/white-logo.svg"
                    alt="GearVN"
                    width={140}
                    height={24}
                  />
                </picture>
              </Link>
              <div>
                <a
                  className="flex items-center lg:gap-2 xl:bg-[#BE1529] p-2 rounded-sm"
                  href="#"
                >
                  <span>
                    <Image
                      src="/images/icons/web/menu.svg"
                      alt="Menu"
                      width={18}
                      height={14}
                      className="max-lg:w-10 max-lg:h-8"
                    />
                  </span>
                  <span className="hidden xl:flex text-[var(--text-primary)] text-sm font-semibold">
                    Danh mục
                  </span>
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4 max-lg:w-full">
              <div className="flex-1 relative max-lg:w-full">
                <input
                  type="text"
                  placeholder="Bạn cần tìm gì?"
                  className="max-lg:w-full w-sm h-10 rounded-sm border-none outline-none bg-white px-2 font-medium"
                />
                <button className="absolute right-0 top-0 bottom-0 max-lg:w-10 w-10 cursor-pointer">
                  <Image
                    src="/images/icons/web/search.svg"
                    alt="Search"
                    width={20}
                    height={20}
                  />
                </button>
              </div>
              <div className="hidden lg:block">
                <a className="flex items-center gap-2" href="#">
                  <span className="w-7 h-7  flex items-center justify-center">
                    <Image
                      src="/images/icons/web/hotline.svg"
                      alt="Hotline"
                      width={20}
                      height={20}
                    />
                  </span>
                  <span className="hidden xl:flex flex-col text-[var(--text-primary)] leading-4 text-sm font-semibold">
                    <span>Hotline</span>
                    <span>1900.5301</span>
                  </span>
                </a>
              </div>
              <div className="hidden lg:block">
                <a className="flex items-center gap-2" href="#">
                  <span className="w-7 h-7  flex items-center justify-center">
                    <Image
                      src="/images/icons/web/location.svg"
                      alt="Hotline"
                      width={20}
                      height={20}
                    />
                  </span>
                  <span className="hidden xl:flex flex-col text-[var(--text-primary)] leading-4 text-sm font-semibold">
                    <span>Hệ thống</span>
                    <span>Showroom</span>
                  </span>
                </a>
              </div>
              <div className="hidden lg:block">
                <a className="flex items-center gap-2" href="#">
                  <span className="w-7 h-7  flex items-center justify-center">
                    <Image
                      src="/images/icons/web/order.svg"
                      alt="Hotline"
                      width={20}
                      height={20}
                    />
                  </span>
                  <span className="hidden xl:flex flex-col text-[var(--text-primary)] leading-4 text-sm font-semibold">
                    <span>Tra cứu</span>
                    <span>đơn hàng</span>
                  </span>
                </a>
              </div>
              <div>
                <a
                  className="flex items-center  max-xl:bg-[#BE1529] gap-2 p-2 rounded-sm"
                  href="#"
                >
                  <span className="relative w-7 h-7 flex items-center justify-center">
                    <Image
                      src="/images/icons/web/cart.svg"
                      alt="Hotline"
                      width={20}
                      height={20}
                    />
                    <span className="absolute -top-1 -right-0 bg-[#FDD835] text-black rounded-full w-4 h-4 flex items-center justify-center border-2 border-white text-xs">
                      <span>1</span>
                    </span>
                  </span>
                  <span className="hidden xl:flex flex-col text-[var(--text-primary)] leading-4 text-sm font-semibold">
                    <span>Giỏ</span>
                    <span>hàng</span>
                  </span>
                </a>
              </div>
              <div className="hidden lg:block">
                <a
                  className="flex items-center  xl:bg-[#BE1529] p-2 rounded-sm"
                  href="#"
                >
                  <span className="w-7 h-7 flex items-center justify-center">
                    <Image
                      src="/images/icons/web/user.svg"
                      alt="Menu"
                      width={18}
                      height={14}
                    />
                  </span>
                  <span className="hidden xl:flex flex-col text-[var(--text-primary)] leading-4 text-sm font-semibold">
                    <span>Đăng</span>
                    <span>nhập</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
