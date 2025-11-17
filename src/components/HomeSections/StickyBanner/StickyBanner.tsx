"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function StickyBanner() {
  const [topPosition, setTopPosition] = useState(105);

  useEffect(() => {
    const handleScroll = () => {
      const subHeader = document.querySelector("[data-subheader-visible]");
      const isSubHeaderVisible =
        subHeader?.getAttribute("data-subheader-visible") === "true";

      setTopPosition(isSubHeaderVisible ? 185 : 105);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const StickyBannerList = [
    {
      title: "banner1",
      href: "/",
      image: "/images/banner/sticky/sticky-banner1.jpg",
    },
    {
      title: "banner2",
      href: "/",
      image: "/images/banner/sticky/sticky-banner2.jpg",
    },
  ];
  return (
    <section>
      <div
        className="fixed left-0 right-0 m-auto pointer-events-none transition-all duration-300"
        style={{ top: `${topPosition}px` }}
      >
        {/* Banner cho màn hình 2xl trở lên - size 150x150 */}
        <div className="container mx-auto max-w-[1280px] relative hidden 2xl:block">
          <div className="absolute left-[-160px] pointer-events-auto">
            <a href={StickyBannerList[0].href}>
              <Image
                src={StickyBannerList[0].image}
                alt={StickyBannerList[0].title}
                width={150}
                height={150}
                className="rounded-md"
              />
            </a>
          </div>
          <div className="absolute right-[-160px] pointer-events-auto">
            <a href={StickyBannerList[1].href}>
              <Image
                src={StickyBannerList[1].image}
                alt={StickyBannerList[1].title}
                width={150}
                height={150}
                className="rounded-md"
              />
            </a>
          </div>
        </div>

        {/* Banner cho màn hình xl - size 100x100 */}
        <div className="container mx-auto max-w-[1280px] relative hidden xl:block 2xl:hidden">
          <div className="absolute left-[-110px] pointer-events-auto">
            <a href={StickyBannerList[0].href}>
              <Image
                src={StickyBannerList[0].image}
                alt={StickyBannerList[0].title}
                width={100}
                height={100}
                className="rounded-md"
              />
            </a>
          </div>
          <div className="absolute right-[-110px] pointer-events-auto">
            <a href={StickyBannerList[1].href}>
              <Image
                src={StickyBannerList[1].image}
                alt={StickyBannerList[1].title}
                width={100}
                height={100}
                className="rounded-md"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
