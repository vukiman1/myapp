import BlogCard from "@/components/base/blogs/BlogCard";
import SectionCollectionHeader from "@/components/lib/SectionCollectionHeader";
import Image from "next/image";
import Link from "next/link";

export default function SectionBlog() {
  const blogItems = [
    {
      href: "/blog-1",
      image: "/images/blogs/thumbnails/thumbnails2.jpg",
    },
    {
      href: "/blog-2",
      image: "/images/blogs/thumbnails/thumbnails2.jpg",
    },
    {
      href: "/blog-3",
      image: "/images/blogs/thumbnails/thumbnails2.jpg",
    },
    {
      href: "/blog-3",
      image: "/images/blogs/thumbnails/thumbnails2.jpg",
    },
  ];

  const salePageItems = [
    {
      href: "/sale-page-1",
      image: "/images/blogs/thumbnails/thumbnails1.jpg",
    },
    {
      href: "/sale-page-2",
      image: "/images/blogs/thumbnails/thumbnails1.jpg",
    },
    {
      href: "/sale-page-3",
      image: "/images/blogs/thumbnails/thumbnails1.jpg",
    },
    {
      href: "/sale-page-4",
      image: "/images/blogs/thumbnails/thumbnails1.jpg",
    },
  ];

  return (
    <div className="bg-white border-b border-gray-200 rounded-md mt-3 mb-3">
      <div className="border-b-2 border-gray-200">
        <SectionCollectionHeader title={"Chuyên trang khuyến mãi"} href={"/"} />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 px-7 mb-3">
          {salePageItems.map((item) => (
            <BlogCard key={item.href} href={item.href} image={item.image} />
          ))}
        </div>
      </div>
      <div>
        <SectionCollectionHeader title={"Tin tức công nghệ"} href={"/"} />
        <div className="grid grid-cols-4 gap-5 px-7 mb-3">
          {blogItems.map((item) => (
            <BlogCard key={item.href} href={item.href} image={item.image} />
          ))}
        </div>
      </div>
    </div>
  );
}
