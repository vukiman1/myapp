import ProductCategory from "@/components/base/products/ProductCategory";
import SectionCollectionHeader from "@/components/lib/SectionCollectionHeader";
import Image from "next/image";

export function SectionCategory() {
  const item = {
    title: "Danh mục sản phẩm",
    href: "/category",
  };
  const categories = [
    {
      name: "Laptop",
      href: "/category/laptop",
      image: "/images/products/category/laptop.png",
    },
    {
      name: "PC",
      href: "/category/pc",
      image: "/images/products/category/pc.png",
    },
    {
      name: "Màn hình",
      href: "/category/man-hinh",
      image: "/images/products/category/display.png",
    },
    {
      name: "Mainboard",
      href: "/category/mainboard",
      image: "/images/products/category/mainboard.png",
    },
    {
      name: "CPU",
      href: "/category/cpu",
      image: "/images/products/category/cpu.png",
    },
    {
      name: "VGA",
      href: "/category/vga",
      image: "/images/products/category/vga.png",
    },
    {
      name: "RAM",
      href: "/category/ram",
      image: "/images/products/category/ram.png",
    },
    {
      name: "Ổ cứng",
      href: "/category/ ổ cứng",
      image: "/images/products/category/hard-disk.png",
    },
    {
      name: "Case",
      href: "/category/case",
      image: "/images/products/category/case.png",
    },
    {
      name: "Tản nhiệt",
      href: "/category/tản nhiệt",
      image: "/images/products/category/fan.png",
    },
    {
      name: "Nguồn",
      href: "/category/ nguồn",
      image: "/images/products/category/power.png",
    },
    {
      name: "Bàn phím",
      href: "/category/bàn phím",
      image: "/images/products/category/keyboard.png",
    },
    {
      name: "Chuột",
      href: "/category/chuột",
      image: "/images/products/category/mouse.png",
    },
    {
      name: "Ghế",
      href: "/category/ghế",
      image: "/images/products/category/chair.png",
    },
    {
      name: "Tai nghe",
      href: "/category/tai nghe",
      image: "/images/products/category/headphone.png",
    },
    {
      name: "Loa",
      href: "/category/loa",
      image: "/images/products/category/sound.png",
    },
    {
      name: "Console",
      href: "/category/console",
      image: "/images/products/category/console.png",
    },
    {
      name: "Phụ kiện",
      href: "/category/phụ kiện",
      image: "/images/products/category/accessories.png",
    },
    {
      name: "Thiết bị VP",
      href: "/category/thiết bị VP",
      image: "/images/products/category/print.png",
    },
    {
      name: "Sạc DP",
      href: "/category/sạc dp",
      image: "/images/products/category/charger.png",
    },
  ];
  return (
    <div className="bg-white border-b border-gray-200 rounded-md mt-3 ">
      <SectionCollectionHeader title={item.title} href={item.href} />
      <div className="grid grid-cols-10 gap-8 px-5 py-5 border-t-1 border-gray-200">
        {categories.map((category) => (
          <ProductCategory
            key={category.name}
            name={category.name}
            href={category.href}
            image={category.image}
          />
        ))}
      </div>
    </div>
  );
}
