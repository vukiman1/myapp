import Image from "next/image";

export default function HomeSectionSlider() {
  const navList = [
    {
      title: "Laptop",
      icon: "/images/icons/web/section/navbar/laptop.svg",
      href: "/",
    },
    {
      title: "Laptop Gaming",
      icon: "/images/icons/web/section/navbar/gamming.svg",
      href: "/",
    },
    {
      title: "PC GVN",
      icon: "/images/icons/web/section/navbar/pc.svg",
      href: "/",
    },
    {
      title: "Main, CPU, VGA",
      icon: "/images/icons/web/section/navbar/ram.svg",
      href: "/",
    },
    {
      title: "Case, Nguồn, Tản",
      icon: "/images/icons/web/section/navbar/pc.svg",
      href: "/",
    },
    {
      title: "Ổ cứng, RAM, Thẻ nhớ",
      icon: "/images/icons/web/section/navbar/ram.svg",
      href: "/",
    },
    {
      title: "Loa, Micro, Webcam",
      icon: "/images/icons/web/section/navbar/sound.svg",
      href: "/",
    },
    {
      title: "Màn hình",
      icon: "/images/icons/web/section/navbar/display.svg",
      href: "/",
    },
    {
      title: "Bàn phím",
      icon: "/images/icons/web/section/navbar/keyboard.svg",
      href: "/",
    },
    {
      title: "Chuột + Lót chuột",
      icon: "/images/icons/web/section/navbar/mounce.svg",
      href: "/",
    },
    {
      title: "Tai Nghe",
      icon: "/images/icons/web/section/navbar/headphone.svg",
      href: "/",
    },
    {
      title: "Ghế - Bàn",
      icon: "/images/icons/web/section/navbar/chair.svg",
      href: "/",
    },
    {
      title: "Phần mềm, mạng",
      icon: "/images/icons/web/section/navbar/print.svg",
      href: "/",
    },
    {
      title: "Handheld, Console",
      icon: "/images/icons/web/section/navbar/console.svg",
      href: "/",
    },
    {
      title: "Phụ kiện (Hub, sạc, cáp..)",
      icon: "/images/icons/web/section/navbar/console.svg",
      href: "/",
    },
    {
      title: "Dịch vụ và thông tin khác",
      icon: "/images/icons/web/section/navbar/box.svg",
      href: "/",
    },
  ];

  return (
    <section className="flex gap-2 pt-4">
      <div className="hidden xl:block w-56 bg-white flex-shrink-0 rounded-md overflow-hidden">
        <nav>
          <ul>
            {navList.map((item, index) => (
              <li
                key={index}
                className="group relative hover:bg-[var(--color-primary)] hover:text-white before:content-[''] before:absolute before:right-[-32px] before:top-0 before:w-0 before:h-0 before:border-t-[16px] before:border-t-transparent before:border-l-[16px] before:border-l-[var(--color-primary)] before:border-b-[15px] before:border-b-transparent before:border-r-[16px] before:border-r-transparent before:z-50 before:m-auto before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-0"
              >
                <a
                  href={item.href}
                  className="flex justify-between px-2 h-[31px] items-center text-sm"
                >
                  <div className="flex gap-2">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={20}
                      height={20}
                      className="group-hover:invert"
                    />
                    <span>{item.title}</span>
                  </div>
                  <span>
                    <Image
                      src="/images/icons/web/section/expand.svg"
                      alt="Expand"
                      width={6}
                      height={6}
                      className="group-hover:invert"
                    />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex-1">
        <div className="grid grid-cols-3 grid-rows-3 gap-2">
          <div className="col-span-2 row-span-2">
            <a href="#" className="block">
              <Image
                src="/images/banner/sections/slider/gearvn-back-to-school-25-slider.png"
                className="rounded-lg w-full h-full object-cover"
                alt="Banner"
                width={800}
                height={525}
              />
            </a>
          </div>

          <div className="col-start-3 row-start-1">
            <a href="#" className="block">
              <Image
                src="/images/banner/sections/slider/gearvn-ban-phim-slider-right-t8.png"
                className="rounded-lg w-full h-full object-cover"
                alt="Banner"
                width={400}
                height={260}
              />
            </a>
          </div>
          <div className="col-start-3 row-start-2">
            <a href="#" className="block">
              <Image
                src="/images/banner/sections/slider/gearvn-build-pc-slider-right-t8.png"
                className="rounded-lg w-full h-full object-cover"
                alt="Banner"
                width={400}
                height={260}
              />
            </a>
          </div>

          <div className="col-start-1 row-start-3">
            <a href="#" className="block">
              <Image
                src="/images/banner/sections/slider/gearvn-back-to-school-25-slider.png"
                className="rounded-lg w-full h-full object-cover"
                alt="Banner"
                width={400}
                height={260}
              />
            </a>
          </div>
          <div className="col-start-2 row-start-3">
            <a href="#" className="block">
              <Image
                src="/images/banner/sections/slider/gearvn-back-to-school-25-slider.png"
                className="rounded-lg w-full h-full object-cover"
                alt="Banner"
                width={400}
                height={260}
              />
            </a>
          </div>
          <div className="col-start-3 row-start-3">
            <a href="#" className="block">
              <Image
                src="/images/banner/sections/slider/gearvn-back-to-school-25-slider.png"
                className="rounded-lg w-full h-full object-cover"
                alt="Banner"
                width={400}
                height={260}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
