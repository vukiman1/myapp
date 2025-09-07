import { Select } from "antd";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { Language } from "@/config/constants/language";

function SelectLanguage() {
  const { i18n, t } = useTranslation();
  const handleLanguageChange = (value: string) => {
    i18n.changeLanguage(value);
  };
  return (
    <Select
      value={i18n.language}
      onChange={handleLanguageChange}
      size="small"
      className="min-w-[120px]"
      options={Object.values(Language).map(
        (language: string) => (
          console.log(`/images/icons/flags/${language}.png`),
          {
            label: (
              <span className="flex items-center gap-2">
                <Image
                  src={`/images/icons/flags/${language}.png`}
                  alt={language}
                  width={20}
                  height={20}
                />
                {t(`language.${language}`)}
              </span>
            ),
            value: language,
          }
        ),
      )}
    />
  );
}

export default SelectLanguage;
