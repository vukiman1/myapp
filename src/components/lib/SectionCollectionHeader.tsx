import { ArrowRightOutlined } from "@ant-design/icons";

type SectionCollectionHeaderProps = {
  title: string;
  href: string;
  subTitle?: string;
  subTitleIcon?: React.ReactNode;
  tag?: string[];
};

export default function SectionCollectionHeader({
  title,
  href,
  subTitle,
  subTitleIcon,
  tag,
}: SectionCollectionHeaderProps) {
  return (
    <div className="flex xl:items-center justify-between  flex-col xl:flex-row py-3 px-7">
      <div className="flex items-center gap-4">
        <h2 className="cursor-pointer text-xl xl:text-2xl font-semibold text-[var(--title-color)] hover:text-[var(--color-primary)] transition-colors duration-200">
          {title}
        </h2>
        {subTitle && <div className="text-gray-500">|</div>}  
        <div className="flex items-center gap-2">
          {subTitleIcon}
          <h3 className="text-sm lg:text-base font-semibold text-[var(--title-color)] hover:text-[var(--color-primary)]">
            {subTitle}
          </h3>
        </div>
      </div>
      <div>
        {tag?.map((item) => (
          <a
            href={href}
            className="hover:text-[var(--color-primary)]  hover:underline transition-colors duration-200"
            key={item}
          >
            <span className="text-sm px-4 uppercase">{item}</span>
          </a>
        ))}
         {tag && <a
          href={href}
          className="text-blue-600 px-4 hover:text-[var(--color-primary)] transition-colors duration-200"
        >
          Xem tất cả
        </a>}
      </div>
    </div>
  );
}
