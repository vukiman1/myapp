export function Topheader() {
  const listBanner = {
    title: "banner1",
    href: "/",
    image: "/images/banner/header/banner1.jpg",
  };
  return (
    <div className="bg-[#29353a] hidden lg:block">
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <a href={listBanner.href}>
            <img
              src={listBanner.image}
              alt={listBanner.title}
              className="h-[47px]"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
