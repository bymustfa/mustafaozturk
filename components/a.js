import React from "react";
import Link from "next/link";

export default function A({ href, text, className }) {
  return (
    <Link href={href}>
      <a className={className}>{text}</a>
    </Link>
  );
}
