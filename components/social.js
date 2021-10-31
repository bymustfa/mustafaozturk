import React from "react";
import { useRouter } from "next/router";
import { Flex, Text } from "@chakra-ui/react";
import { social } from "@/utils/about";
import Link from "next/link";
import A from "@/components/a";

export default function Social() {
  const router = useRouter();
  return (
    <>
      <Flex>
        <Link href="/" locale={router.locale === "en" ? "tr" : "en"}>
          <button mr={2}>
            <Flex>
              <Text color="green.500" mr={1}>
                {"<"}
              </Text>

              <Text> {router.locale === "en" ? "tr" : "en"} </Text>
              <Text color="green.500" ml={1}>
                {"/>"}
              </Text>
            </Flex>
          </button>
        </Link>

        {social.map((item) => (
          <A
            key={item.id}
            text={item.icon}
            href={item.href}
            isExternal
            ml={3}
          />
        ))}
      </Flex>
    </>
  );
}
