"use client";
import { useEffect, useRef, useState } from "react";
import { ProductCardType } from "@/config/type/products";
import { GiftFilled } from "@ant-design/icons";
import Image from "next/image";

export default function ProductGift({ item }: { item: ProductCardType }) {
  const [isGiftOpen, setIsGiftOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsGiftOpen(false);
      }
    };

    if (isGiftOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isGiftOpen]);
  return (
    <div className="flex items-center justify-between mb-2 min-h-[28px]">
      {item.gift.length > 0 && item.gift.find(({ isHot }) => isHot) && (
        <div className="flex items-center gap-1 bg-[var(--color-primary)] text-white rounded-2xl px-2">
          <Image
            src="/images/products/sale/sale.svg"
            alt="sale"
            width={10}
            height={10}
          />
          <span className="text-xs xl:text-sm">Quà tặng HOT</span>
        </div>
      )}
      {item.gift.length > 0 && (
        <div className="relative ml-auto" ref={dropdownRef}>
          <button
            className="cursor-pointer"
            onClick={() => setIsGiftOpen(!isGiftOpen)}
          >
            <GiftFilled
              style={{ color: "var(--color-primary)", fontSize: 20 }}
            />
          </button>
          {isGiftOpen && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 rounded-md border border-gray-200 bg-white shadow-lg z-50">
              {/* Arrow */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2">
                <div className="absolute w-0 h-0 border-l-[7px] border-r-[7px] border-b-[7px] border-l-transparent border-r-transparent border-b-gray-200" />
                <div className="absolute top-[1px] w-0 h-0 border-l-[6px] border-r-[6px] border-b-[6px] border-l-transparent border-r-transparent border-b-[#FFD9D9]" />
              </div>
              {/* Content */}
              <h3 className="bg-[#FFD9D9] text-[var(--color-primary)] text-sm font-medium px-4 py-1">
                Quà tặng khuyến mãi
              </h3>
              <ul className="text-sm text-gray-500 px-2 py-1">
                {item.gift.map(({ title }, index) => (
                  <li key={index} className="flex py-1 gap-2 items-center">
                    <span className="text-white text-xs bg-[var(--color-primary)] rounded-full w-4 h-4 flex items-center justify-center">
                      {index + 1}
                    </span>
                    {title}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
