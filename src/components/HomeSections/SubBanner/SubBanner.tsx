import Image from "next/image";

export default function SubBanner() {
  const subBannerList = [
    {
      title: "Sub Banner 1",
      href: "/",
      image: "/images/banner/sections/sub-banner/subbanner1.png",
    },
    {
      title: "Sub Banner 2",
      href: "/",
      image: "/images/banner/sections/sub-banner/subbanner2.png",
    },
    {
      title: "Sub Banner 3",
      href: "/",
      image: "/images/banner/sections/sub-banner/subbanner3.png",
    },
    {
      title: "Sub Banner 4",
      href: "/",
      image: "/images/banner/sections/sub-banner/subbanner4.png",
    },
  ];
  return (
    <section>
      <div className="flex gap-2 mt-2 mb-2">
        {subBannerList.map((item) => (
          <div key={item.title} className="flex-1">
            <a href={item.href} className="block">
              <Image
                src={item.image}
                alt={item.title}
                width={300}
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
