import ColeectionSlider from "@/components/lib/SectionCollection/ColeectionSlider";
import SectionCollectionHeader from "@/components/lib/SectionCollectionHeader";
import { TruckFilled } from "@ant-design/icons";

export default function SectionCollection() {
  const collectionList = [
    {
      title: "PC Bán chạy",
      subTitle: "Miễn phí giao hàng",
      subTitleIcon: <TruckFilled style={{ color: "var(--color-primary)" }} />,
      href: "/pc-ban-chay",
      tag: ["Tag 1", "Tag 2", "Tag 3", "Tag 4", "Tag 5", "Tag 6"],
    },
    {
      title: "Laptop gaming bán chạy",
      subTitle: "Miễn phí giao hàng",
      subTitleIcon: <TruckFilled style={{ color: "var(--color-primary)" }} />,
      href: "/laptop-gaming-ban-chay",
      tag: ["Tag 1", "Tag 2", "Tag 3", "Tag 4", "Tag 5", "Tag 6"],
    },
    {
      title: "Laptop văn phòng bán chạy",
      subTitle: "Miễn phí giao hàng",
      subTitleIcon: <TruckFilled style={{ color: "var(--color-primary)" }} />,
      href: "/laptop-van-phong-ban-chay",
      tag: ["Tag 1", "Tag 2", "Tag 3", "Tag 4", "Tag 5", "Tag 6"],
    },
    {
      title: "Chuột bán chạy",
      subTitle: "Miễn phí giao hàng",
      subTitleIcon: <TruckFilled style={{ color: "var(--color-primary)" }} />,
      href: "/chuot-ban-chay",
      tag: ["Tag 1", "Tag 2", "Tag 3", "Tag 4", "Tag 5", "Tag 6"],
    },
    {
      title: "Bàn phím bán chạy",
      subTitle: "Giao hàng toàn quốc",
      subTitleIcon: <TruckFilled style={{ color: "var(--color-primary)" }} />,
      href: "/ban-phim-ban-chay",
      tag: ["Tag 1", "Tag 2", "Tag 3", "Tag 4", "Tag 5", "Tag 6"],
    },
    {
      title: "Màn hình chính hãng",
      subTitle: "Bảo hành 1 đổi 1",
      subTitleIcon: <TruckFilled style={{ color: "var(--color-primary)" }} />,
      href: "/man-hinh-chinh-hang",
      tag: ["Tag 1", "Tag 2", "Tag 3", "Tag 4", "Tag 5", "Tag 6"],
    },
  ];
  return (
    <section>
      <div className="flex flex-col gap-3 mt-3">
        {collectionList.map((item) => (
          <div
            key={item.title}
            className="bg-white border-b border-gray-200 px-6 py-3 rounded-md"
          >
            <SectionCollectionHeader
              title={item.title}
              subTitle={item.subTitle}
              subTitleIcon={item.subTitleIcon}
              href={item.href}
              tag={item.tag}
            />
            <ColeectionSlider href={item.href} />
          </div>
        ))}
      </div>
    </section>
  );
}
