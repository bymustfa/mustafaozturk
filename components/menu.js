import React from "react";
import { Flex, Tooltip, Box } from "@chakra-ui/react";
import { getMenus } from "@/utils/menus";
import { useRouter } from "next/router";
import A from "./a";

export default function Menu() {
  const { asPath } = useRouter();
  const menus = getMenus();

  return (
    <Flex alignItems="center">
      {menus.map((item) => (
        <Tooltip
          key={item.id}
          hasArrow
          label={item.title}
          placement="bottom"
          bg="gray.900"
          color="white"
          fontSize="md"
        >
          <Box>
            <A
              text={item.icon}
              href={item.href}
              p={4}
              pl={0}
              display="block"
              className={asPath === item.href && "active"}
              color={asPath === item.href && "green.200"}
            />
          </Box>
        </Tooltip>
      ))}
    </Flex>
  );
}
