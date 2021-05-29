import React from "react";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Layout from "../components/layout";

import { skils } from "../utils";

const About = () => {
  const { t } = useTranslation("common");

  return (
    <Layout>
      <div className="p-3">
        <section className="w-11/12 mx-auto flex flex-wrap p-4 rounded-lg bg-lightBlack border border-gray-900 shadow-lg ">
          <div className="sm:w-3/12 w-12/12  text-center ">
            <img
              src="/img/me.jpg"
              alt="Mustafa ÖZTÜRK"
              className="rounded-full shadow-2xl mx-auto sm:w-full w-1/2 "
            />
          </div>
          <div className="sm:w-9/12 w-12/12 p-4 ">
            <h4 className="text-xl text-green mb-4">İstanbul / TÜRKİYE</h4>

            <p className="my-4">{t("about1")}</p>
            <p className="my-4">{t("about2")}</p>
          </div>
        </section>
      </div>

      <div className="p-3">
        <div className="text-center my-4">
          <h2 className="text-xl font-bold text-green">{t("skils")}</h2>
        </div>

        <section className="w-11/12 mx-auto flex flex-wrap p-4 rounded-lg bg-lightBlack border border-gray-900 shadow-lg mt-4">
          {skils.map((item) => (
            <div className="sm:w-3/12 md:w-4/12 w-6/12 p-2">
              <div
                className="translate-x-4 border border-gray-900 p-2 text-center rounded-lg bg-black duration-500 ease-in-out hover:scale-110 transform hover:-translate-y-1 hover:text-green hover:font-bold "
                key={item}
              >
                {item}
              </div>
            </div>
          ))}
        </section>
      </div>
    </Layout>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "footer"])),
  },
});
export default About;
