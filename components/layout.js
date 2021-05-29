import React from "react";
import Navbar from "./navbar";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <div className="bg-lightBlack min-w-full flex flex-col items-center justify-self-start text-white h-screen py-2">
      <Head>
        <title>Mustafa ÖZTÜRK</title>
      </Head>
      <Navbar />
      <main className="p-2 bg-black h-5/6 w-10/12 rounded-lg shadow-2xl border border-gray-900">
        {children}
      </main>
    </div>
  );
};

export default Layout;
