import { useTranslation } from "next-i18next";

export const getMenus = () => {
  const { t } = useTranslation("common");

  return [
    { id: 1, title: t("home"), href: "/" },
    { id: 2, title: t("about"), href: "/about" },
    { id: 3, title: t("portfolio"), href: "/portfolio" },
    { id: 4, title: t("contact"), href: "/contact" },
  ];
};
