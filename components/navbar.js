import React from "react";
import { useRouter } from "next/router";
import cn from "classnames";

import { menus } from "../utils";

import A from "../components/a";

export default function Navbar(props) {
  const router = useRouter();
  console.log(router);

  return (
    <nav className="flex items-center justify-between p-2 my-3 mb-6 w-10/12 ">
      <A
        href="/"
        className="duration-200 hover:opacity-75"
        text={
          <h1 className="text-lg ">
            <b className="text-green">{"<"}</b>
            <span className="font-consolas">Mustafa ÖZTÜRK</span>
            <b className="text-green">{"/>"} </b>
          </h1>
        }
      />

      <ul className="flex items-center justify-center flex-wrap space-x-12">
        {menus[router.locale].map((menu) => (
          <A
            key={menu.id}
            href={menu.href}
            text={<li>{menu.title}</li>}
            className={cn([
              "duration-200 hover:opacity-75",
              router.pathname === menu.href
                ? "text-green font-bold"
                : "text-white",
            ])}
          />
        ))}

        <A
          href={"/" + (router.locale === "tr" ? "en" : "tr") + router.route}
          text={<li>{router.locale === "tr" ? "EN" : "TR"}</li>}
          className="duration-200 bg-black rounded-lg p-2 hover:opacity-75 text-white"
        />
      </ul>
    </nav>
  );
}
