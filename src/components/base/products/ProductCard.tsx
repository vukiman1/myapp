import { ProductCardType } from "@/config/type/products";
import { formatCurrency } from "@/helper/formatCurrency";
import { productTagIcon, productTagName } from "@/helper/productTag";
import { GiftFilled, StarFilled } from "@ant-design/icons";
import Image from "next/image";
import ProductGift from "./ProductGift";

export default function ProductCard({ item }: { item: ProductCardType }) {
  return (
    <div
      key={item.title}
      className="w-full xl:w-1/5 border border-gray-200 rounded-md"
    >
      <div className="p-2">
        <ProductGift item={item} />
        <div className="p-2">
          <Image
            src={item.image}
            alt={item.title}
            width={300}
            height={300}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
      <div className="p-2">
        <h3 className="text-sm xl:text-base font-semibold text-[var(--title-color)] line-clamp-2">
          {item.title}
        </h3>
        <div className="flex p-2 flex-wrap bg-[#ECECEC] rounded-sm font-medium">
          {item.tag.map((tag) => {
            return (
              <div
                key={tag}
                className="flex items-center gap-1 flex-[1_1_calc(50%-0.25rem)] min-w-fit max-w-full "
              >
                <Image
                  src={productTagIcon(tag) as string}
                  alt={productTagName(tag) as string}
                  width={10}
                  height={10}
                />
                <span className="text-xs xl:text-sm text-gray-500 whitespace-nowrap">
                  {productTagName(tag)}
                </span>
              </div>
            );
          })}
        </div>
        <div>
          <div>
            <del className="text-xs xl:text-sm text-gray-500 line-through">
              {formatCurrency(item.price)}
            </del>
          </div>
          <div className="flex items-center">
            <span className="font-semibold  text-sm xl:text-base text-[var(--color-primary)]">
              {formatCurrency(item.price)}
            </span>
            <span className="text-[var(--color-primary)] rounded-xs text-[10px] xl:text-xs border border-[var(--color-primary)]  px-[2px] bg-[#FFEDED] ml-1">
              -25%
            </span>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-sm font-semibold text-orange-400">
            {item.rating.average}
          </span>
          <span className="">
            <StarFilled style={{ color: "orange", fontSize: 12 }} />
          </span>
          <span className="text-xs xl:text-sm text-gray-500">
            ({item.rating.total} đánh giá)
          </span>
        </div>
      </div>
    </div>
  );
}
