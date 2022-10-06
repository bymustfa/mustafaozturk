import Layout from "../components/shared/Layout";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  return <Layout>{t("hello")}</Layout>;
};

export default Home;
