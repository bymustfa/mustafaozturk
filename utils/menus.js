import { useTranslation } from "next-i18next";
import { Home, User, Package, Book } from "@/components/icons";

export const getMenus = () => {
  const { t } = useTranslation("common");
  return [
    { id: 1, icon: <Home />, title: t("home"), href: "/" },
    { id: 2, icon: <User />, title: t("about"), href: "/about" },
    { id: 3, icon: <Package />, title: t("portfolio"), href: "/portfolio" },
    { id: 4, icon: <Book />, title: t("Blog"), href: "/blog" },
  ];
};
