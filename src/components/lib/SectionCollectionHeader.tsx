import { ArrowRightOutlined } from "@ant-design/icons";

type SectionCollectionHeaderProps = {
  title: string;
  subTitle: string;
  subTitleIcon: React.ReactNode;
  href: string;
  tag: string[];
};

export default function SectionCollectionHeader({
  title,
  subTitle,
  subTitleIcon,
  href,
  tag,
}: SectionCollectionHeaderProps) {
  return (
    <div className="flex xl:items-center justify-between  flex-col xl:flex-row py-3 px-7">
      <div className="flex items-center gap-4">
        <h2 className="text-xl xl:text-2xl font-semibold text-[var(--title-color)] ">
          {title}
        </h2>
        <div className="text-gray-500">|</div>
        <div className="flex items-center gap-2">
          {subTitleIcon}
          <h3 className="text-sm lg:text-base font-semibold text-[var(--title-color)]">
            {subTitle}
          </h3>
        </div>
      </div>
      <div>
        {tag.map((item) => (
          <a
            href={href}
            className="hover:text-[var(--color-primary)]  hover:underline transition-colors duration-200"
            key={item}
          >
            <span className="text-sm px-4 uppercase">{item}</span>
          </a>
        ))}
        <a
          href={href}
          className="text-blue-600 px-4 hover:text-[var(--color-primary)] transition-colors duration-200"
        >
          Xem tất cả
        </a>
      </div>
    </div>
  );
}
