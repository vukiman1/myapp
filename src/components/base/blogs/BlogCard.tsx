import Link from "next/link";
import Image from "next/image";

export interface BlogCardProps {
  href: string;
  image: string;
}

export default function BlogCard({ href, image }: BlogCardProps) {
  return (
    <div key={href}>
      <Link href={href}>
        <div className="relative block pb-[50.9%]">
          <Image
            src={image}
            alt={href}
            className="absolute left-0 top-0 w-full h-full object-cover rounded-md"
            fill
            sizes="(max-width: 768px) 100vw, 550px"
          />
        </div>
      </Link>
    </div>
  );
}
