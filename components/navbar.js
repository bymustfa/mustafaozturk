import React, { useState } from "react";
import { useRouter } from "next/router";
import cn from "classnames";

import { menus } from "../utils";

import A from "../components/a";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <nav className="flex items-center justify-between p-2 my-3 mb-6 w-10/12 ">
      <A
        href="/"
        className="duration-200 hover:opacity-75"
        text={
          <h1 className="text-lg ">
            <b className="text-green">{"<"}</b>
            <span className="font-inconsolata">Mustafa ÖZTÜRK</span>
            <b className="text-green">{"/>"} </b>
          </h1>
        }
      />

      <ul className="flex items-center justify-center  flex-row">
        {open && (
          <div className="md:flex md:items-center md:justify-center md:flex-wrap md:relative md:bg-opacity-0 md:relative absolute right-0 top-0 bg-black w-full z-40">
            <button
              className="md:hidden flex items-center absolute z-50 right-0 top-0 p-4"
              onClick={() => setOpen(!open)}
            >
              X
            </button>
            {menus[router.locale].map((menu) => (
              <A
                key={menu.id}
                href={menu.href}
                text={<li className="md:p-0 px-4">{menu.title}</li>}
                className={cn([
                  "duration-200 hover:opacity-75 ml-12 ",
                  router.pathname === menu.href
                    ? "text-green font-bold"
                    : "text-white",
                ])}
              />
            ))}
            <A
              href={"/" + (router.locale === "tr" ? "en" : "tr") + router.route}
              text={
                <li className="md:p-0 px-4">
                  {router.locale === "tr" ? "EN" : "TR"}
                </li>
              }
              className=" duration-200 bg-black rounded-lg p-2 hover:opacity-75 ml-5 text-white"
            />
          </div>
        )}

        <li>
          <button
            onClick={() => setOpen(!open)}
            className="duration-200 bg-black rounded-lg p-2 ml-5 hover:opacity-75 text-white focus:outline-none outline-none"
          >
            <img src="/img/menu.svg" alt="Menü" />
          </button>
        </li>
      </ul>
    </nav>
  );
}

// <nav className="flex items-center justify-between p-2 my-3 mb-6 w-10/12 ">
//       <A
//         href="/"
//         className="duration-200 hover:opacity-75"
//         text={
//           <h1 className="text-lg ">
//             <b className="text-green">{"<"}</b>
//             <span className="font-inconsolata">Mustafa ÖZTÜRK</span>
//             <b className="text-green">{"/>"} </b>
//           </h1>
//         }
//       />
//
//       <ul className="flex items-center justify-center flex-wrap space-x-12">
//         {menus[router.locale].map((menu) => (
//           <A
//             key={menu.id}
//             href={menu.href}
//             text={<li>{menu.title}</li>}
//             className={cn([
//               "duration-200 hover:opacity-75",
//               router.pathname === menu.href
//                 ? "text-green font-bold"
//                 : "text-white",
//             ])}
//           />
//         ))}
//
//         <A
//           href={"/" + (router.locale === "tr" ? "en" : "tr") + router.route}
//           text={<li>{router.locale === "tr" ? "EN" : "TR"}</li>}
//           className="duration-200 bg-black rounded-lg p-2 hover:opacity-75 text-white"
//         />
//       </ul>
//     </nav>
