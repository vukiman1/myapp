import { ProductTag } from "@/config/enum/enum";
import Image from "next/image";

export default function ColeectionSlider({ href }: { href: string }) {
  const productList = [
    {
      id: 1,
      title: "Product 1",
      price: 100000,
      tag: [1, 3, 5],
      href: "/product-1",
      image: "/images/products/product-1.png",
      rating: {
        total: 100,
        average: 4.5,
        stars: [
          {
            value: 1,
            count: 10,
          },
          {
            value: 2,
            count: 20,
          },
          {
            value: 3,
            count: 30,
          },
          {
            value: 4,
            count: 40,
          },
          {
            value: 5,
            count: 50,
          },
        ],
      },
    },
    {
      id: 2,
      title: "Product 2",
      price: 200000,
      tag: [2, 4, 6],
      href: "/product-2",
      image: "/images/products/product-2.png",
      rating: {
        total: 100,
        average: 4.5,
        stars: [
          {
            value: 1,
            count: 10,
          },
          {
            value: 2,
            count: 20,
          },
          {
            value: 3,
            count: 30,
          },
          {
            value: 4,
            count: 40,
          },
          {
            value: 5,
            count: 50,
          },
        ],
      },
    },
    {
      id: 3,
      title: "Product 3",
      price: 300000,
      tag: [3, 5, 7],
      href: "/product-3",
      image: "/images/products/product-3.png",
      rating: {
        total: 100,
        average: 4.5,
        stars: [
          {
            value: 1,
            count: 10,
          },
          {
            value: 2,
            count: 20,
          },
          {
            value: 3,
            count: 30,
          },
          {
            value: 4,
            count: 40,
          },
          {
            value: 5,
            count: 50,
          },
        ],
      },
    },
    {
      id: 4,
      title: "Product 4",
      price: 400000,
      tag: [4, 6, 8],
      href: "/product-4",
      image: "/images/products/product-4.png",
      rating: {
        total: 100,
        average: 4.5,
        stars: [
          {
            value: 1,
            count: 10,
          },
          {
            value: 2,
            count: 20,
          },
          {
            value: 3,
            count: 30,
          },
          {
            value: 4,
            count: 40,
          },
          {
            value: 5,
            count: 50,
          },
        ],
      },
    },
    {
      id: 5,
      title: "Product 5",
      price: 500000,
      tag: [5, 7, 9],
      href: "/product-5",
      image: "/images/products/product-5.png",
      rating: {
        total: 100,
        average: 4.5,
        stars: [
          {
            value: 1,
            count: 10,
          },
          {
            value: 2,
            count: 20,
          },
          {
            value: 3,
            count: 30,
          },
          {
            value: 4,
            count: 40,
          },
          {
            value: 5,
            count: 50,
          },
        ],
      },
    },
  ];
  return (
    <div className="flex gap-2">
      {productList.map((item) => (
        <div key={item.title}>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              {item.rating.stars.map((star) => (
                <span key={star.value} className="text-sm text-gray-500">
                  {star.value}
                </span>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">{item.title}</span>
          </div>
          <a href={item.href}>
            <div className="flex items-center gap-2">
              {item.tag.map((tag) => (
                <span key={tag} className="text-sm text-gray-500">
                  {ProductTag[tag as unknown as keyof typeof ProductTag]}
                </span>
              ))}
            </div>
            <Image src={item.image} alt={item.title} width={100} height={100} />
          </a>
        </div>
      ))}
    </div>
  );
}
