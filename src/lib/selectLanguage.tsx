import { Select } from "antd";
import { useTranslation } from "react-i18next";
import Image from "next/image";

function SelectLanguage() {
  const { i18n } = useTranslation();
  const handleLanguageChange = (value: string) => {
    i18n.changeLanguage(value);
  };

  return (
    <Select
      value={i18n.language}
      onChange={handleLanguageChange}
      size="small"
      className="min-w-[120px]"
      options={[
        {
          label: (
            <span className="flex items-center gap-2">
              <Image
                src="/images/icons/flags/en.png"
                alt="English"
                width={20}
                height={20}
              />
              English
            </span>
          ),
          value: "en",
        },
        {
          label: (
            <span className="flex items-center gap-2">
              <Image
                src="/images/icons/flags/vi.png"
                alt="Vietnamese"
                width={20}
                height={20}
              />
              Tiếng Việt
            </span>
          ),
          value: "vi",
        },
      ]}
    />
  );
}

export default SelectLanguage;
