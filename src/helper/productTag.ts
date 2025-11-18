import { ProductTag } from "@/config/constants/constants";

const iconList = {
  "1": "/images/products/tag/chipset.svg",
  "2": "/images/products/tag/card.svg",
  "3": "/images/products/tag/memory.svg",
  "4": "/images/products/tag/storage.svg",
  "5": "/images/products/tag/display.svg",
  "6": "/images/products/tag/refresh-rate.svg",
  "7": "/images/products/tag/graphics.svg",
  "8": "/images/products/tag/sound.svg",
  "9": "/images/products/tag/network.svg",
};

export const productTagName = (tag: string | number) => {
  return (
    (
      ProductTag[tag as keyof typeof ProductTag] as {
        name: string;
      }
    )?.name || tag
  );
};

export const productTagIcon = (tag: string | number) => {
  const tagKey = String(tag) as keyof typeof ProductTag;
  const tagData = ProductTag[tagKey] as { icon: string } | undefined;
  if (!tagData) return null;
  const iconId = tagData.icon as keyof typeof iconList;
  return iconList[iconId] || null;
};
