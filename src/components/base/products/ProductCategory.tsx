import Image from "next/image";
import Link from "next/link";

export interface ProductCategoryProps {
  name: string;
  href: string;
  image: string;
}

export default function ProductCategory({
  name,
  href,
  image,
}: ProductCategoryProps) {
  return (
    <div className="w-full">
      <Link href={href}>
        <div className="relative block pb-[100%]">
          <Image
            src={image}
            alt={name}
            className="absolute left-0 top-0 w-full h-full object-contain p-2.5"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="flex justify-center">
          <h3 className="text-md ">{name}</h3>
        </div>
      </Link>
    </div>
  );
}
