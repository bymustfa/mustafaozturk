import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/layout";
import Card from "@/components/card";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { langs, portfolio } from "@/utils/portfolio";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export default function Home() {
  const router = useRouter();
  const { t } = useTranslation("common");

  const [portfolioDatas, setPortfolioDatas] = useState([]);

  const [parent] = useAutoAnimate();

  useEffect(() => {
    const data = portfolio.map((x) => {
      x.lang = x.lang.map((ln) => {
        return langs.find((x) => {
          if (x.id === ln) {
            return x;
          }
        });
      });
      x.title = x[router.locale].title;
      x.description = x[router.locale].description;
      return x;
    });
    setPortfolioDatas(data);
  }, []);

  return (
    <>
      <Layout>
        <div className="portfolio" ref={parent}>
          {portfolioDatas.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </Layout>
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
