import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

export default function A({ href, text, ...props }) {
  if (props?.isExternal) {
    return (
      <Link href={href} {...props}>
        {text}
      </Link>
    );
  } else {
    return (
      <NextLink href={href} passHref>
        <Link {...props}>{text}</Link>
      </NextLink>
    );
  }
}
