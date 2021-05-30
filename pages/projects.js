import React, { useState, useEffect } from "react";
import Link from "next/link";
import cn from "classnames";
import { useRouter } from "next/router";
import Layout from "../components/layout";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { projects } from "../utils";

export default function Projects() {
  const [datas, setDatas] = useState([]);
  const [langs, setLangs] = useState([]);

  const { t } = useTranslation("common");
  const router = useRouter();

  useEffect(() => {
    setDatas(projects.datas);
    setLangs(projects.langs);
  }, []);

  return (
    <Layout>
      <div className="text-center my-4">
        <h2 className="text-xl font-bold text-green">{t("projects")}</h2>
      </div>

      <ul className="flex flex-wrap">
        {datas.map((project) => (
          <li className="md:w-4/12 project-item  w-12/12  p-4" key={project.id}>
            <div className="border border-gray-700 p-3 rounded relative">
              <span className="text-green font-semibold text-sm border-b border-gray-600  pb-3">
                {project.title[router.locale]}
              </span>

              {project.href && (
                <Link href={project.href}>
                  <a
                    target="_blank"
                    className="project-button absolute top-1 right-1 py-1 px-3 rounded border border-gray-900 bg-lightBlack text-sm hover:opacity-80 duration-200 "
                  >
                    {t("see_project")}
                  </a>
                </Link>
              )}

              <p className="mt-3 text-sm text-gray-300 pt-2">
                {project.description[router.locale]}
              </p>
              <br />
              <ul className="flex items-center text-sm flex-wrap ">
                {project.langs.map((item) => {
                  let language = langs.find((x) => x.id === item);
                  return (
                    <li className="p-1 mb-2 mr-3" key={item}>
                      <div className="flex items-center">
                        <span
                          className={cn([
                            language.color,
                            "block rounded-full mr-1 w-3 h-3",
                          ])}
                        />
                        <span>{language.title}</span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "footer"])),
  },
});
