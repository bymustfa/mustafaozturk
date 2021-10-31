import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Spinner, Center } from "@chakra-ui/react";
import Layout from "@/components/layout";
import Card from "@/components/card";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { portfolio, langs } from "@/utils/portfolio";

export default function Home() {
  const router = useRouter();
  const { t } = useTranslation("common");
  const [loader, setLoader] = useState(false);
  const [portfolioDatas, setPortfolioDatas] = useState([]);

  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      const data = portfolio.map((x) => {
        const lang = x.lang.map((ln) => {
          return langs.find((x) => {
            if (x.id === ln) {
              return x;
            }
          });
        });
        x.lang = lang;
        x.title = x[router.locale].title;
        x.description = x[router.locale].description;
        return x;
      });
      setPortfolioDatas(data);
      setLoader(false);
    }, 400);
  }, []);

  return (
    <>
      <Layout>
        {loader ? (
          <Center h="80vh">
            <Spinner size="xl" color="green.400" />
          </Center>
        ) : (
          <div className="portfolio">
            {portfolioDatas.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        )}
      </Layout>
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
