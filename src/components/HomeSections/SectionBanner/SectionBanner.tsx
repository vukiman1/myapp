import Image from "next/image";

export default function SectionBanner() {
  const sectionBannerList = [
    {
      title: "Section Banner 1",
      href: "/",
      image: "/images/banner/sections/section-banner/section-banner-1.png",
    },
    {
      title: "Section Banner 2",
      href: "/",
      image: "/images/banner/sections/section-banner/section-banner-2.png",
    },
  ];
  return (
    <section>
      <div className="flex gap-2">
        {sectionBannerList.map((item) => (
          <div key={item.title} className="flex-1">
            <a href={item.href} className="block">
              <Image
                src={item.image}
                alt={item.title}
                width={700}
                height={100}
                className="rounded-md w-full h-auto"
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
