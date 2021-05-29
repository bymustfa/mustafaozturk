import React, { useState, useEffect } from "react";
import TextTransition, { presets } from "react-text-transition";
import Layout from "../components/layout";
import { homeTexts } from "../utils";
import { useRouter } from "next/router";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Home = () => {
  const [index, setIndex] = useState(0);
  const { t } = useTranslation("common");
  const router = useRouter();

  const texts = homeTexts[router.locale];

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 3000);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <Layout>
      <div className="p-4 h-full w-full flex items-center justify-center ">
        <div className=" text-center">
          <h1 className="text-5xl font-bold">Mustafa ÖZTÜRK</h1>
          <img
            src="img/infinity-arrow.svg"
            alt="Mustafa ÖZTÜRK"
            width="70%"
            className="mx-auto "
            style={{ margin: "50px auto " }}
          />
          <div className="flex items-center justify-center">
            <TextTransition
              text={texts[index % texts.length]}
              springConfig={presets.wobbly}
              style={{ fontSize: 22, fontWeight: 600 }}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "footer"])),
  },
});
export default Home;
