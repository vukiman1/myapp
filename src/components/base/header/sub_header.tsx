import Icon from "@ant-design/icons";

export default function SubHeader() {
  const listItem = [
    {
      title: "Mua PC tặng màn 240Hz",
      href: "/",
      icon: "/images/icons/web/sub-header/tag.svg",
    },
    {
      title: "Hot Deal | Laptop",
      href: "/",
      icon: "/images/icons/web/sub-header/sale.svg",
    },
    {
      title: "Tin tức",
      href: "/",
      icon: "/images/icons/web/sub-header/news.svg",
    },
    {
      title: "Dịch vụ kỹ thuật tại nhà",
      href: "/",
      icon: "/images/icons/web/sub-header/card.svg",
    },
    {
      title: "Thu cũ đổi mới",
      href: "/",
      icon: "/images/icons/web/sub-header/money.svg",
    },
    {
      title: "Tra cứu bảo hành",
      href: "/",
      icon: "/images/icons/web/sub-header/check.svg",
    },
  ];

  return (
    <div className="border-b-1 border-b-[#E0E0E0]">
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <ul className="flex justify-evenly">
            {listItem.map((item, index) => (
              <li
                className="px-7 py-2 relative after:content-[''] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-px after:h-5 after:bg-[#E0E0E0] last:after:hidden"
                key={index}
              >
                <a
                  className="flex text-sm items-center gap-2 font-medium transition-colors duration-200 hover:text-[var(--color-primary)] group"
                  href={item.href}
                >
                  <div
                    className="w-5 h-5 group-hover:bg-[var(--color-primary)]"
                    style={{
                      maskImage: `url('${item.icon}')`,
                      maskSize: "contain",
                      maskRepeat: "no-repeat",
                      maskPosition: "center",
                      backgroundColor: "currentColor",
                    }}
                  />
                  <span>{item.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
