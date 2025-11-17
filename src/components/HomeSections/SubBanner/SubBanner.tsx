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
      <div className="flex gap-2">
        {subBannerList.map((item) => (
          <div key={item.title}>
            <a href={item.href}>
              <Image
                src={item.image}
                alt={item.title}
                width={1000}
                height={1000}
                className="rounded-md"
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
