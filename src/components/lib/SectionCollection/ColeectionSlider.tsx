import ProductCard from "@/components/base/products/ProductCard";

export default function ColeectionSlider({ href }: { href: string }) {
  const productList = [
    {
      id: 1,
      title: "PC GVN Intel i5-12400F/VGA ARC B580",
      price: 100000,
      tag: [1, 3, 5],
      href: "/product-1",
      image: "/images/products/product-2.jpg",
      gift: [
        {
          title: "Quà tặng HOT",
          isHot: true,
        },
      ],
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
      title: "PC GVN Intel Ultra 5 225F/VGA ARC B580 (DDR5)",
      price: 200000,
      tag: [2, 4, 6],
      href: "/product-1",
      image: "/images/products/product-2.jpg",
      gift: [],
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
      title: "PC GVN Intel Ultra 5 225F/VGA RTX 5060 (DDR5)",
      price: 300000,
      tag: [3, 5, 7],
      href: "/product-1",
      image: "/images/products/product-2.jpg",
      gift: [],
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
      title: "PC GVN Intel Core Ultra 7 265KF/ VGA RTX 5060",
      price: 400000,
      tag: [4, 6, 8],
      href: "/product-1",
      image: "/images/products/product-2.jpg",
      gift: [
        {
          title: "Quà tặng HOT",
          isHot: true,
        },
      ],
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
      title: "Laptop gaming Acer Nitro V 15 ANV15 41 R2UP",
      price: 500000,
      tag: [5, 7, 9],
      href: "/product-1",
      image: "/images/products/product-2.jpg",
      gift: [
        {
          title: "Quà tặng HOT",
          isHot: true,
        },
      ],
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
    <div className="flex gap-2 p-4">
      {productList.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  );
}
