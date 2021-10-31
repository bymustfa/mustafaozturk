import React, { useState } from "react";
import { Button, Box, Slide } from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { getMenus } from "@/utils/menus";
import { useRouter } from "next/router";
import A from "./a";

export default function Menu() {
  const { asPath } = useRouter();
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  const menus = getMenus();

  return (
    <>
      <Button variant="outline" onClick={handleToggleMenu} w={6} mr={4}>
        {toggleMenu ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={6} h={6} />}
      </Button>

      <Slide in={toggleMenu} direction="left" style={{ zIndex: 9999 }}>
        <Box
          width="100%"
          height="100%"
          zIndex={9988}
          position="absolute"
          left={0}
          top={0}
          bg="black"
          opacity={0.3}
          onClick={() => setToggleMenu(false)}
        />
        <Box
          height="100%"
          bg="gray.900"
          minW={150}
          width={200}
          zIndex={9998}
          position="absolute"
          left={0}
          top={0}
          boxShadow="dark-lg"
        >
          {menus.map((item) => (
            <Box key={item.id}>
              <A
                text={item.title}
                href={item.href}
                p={4}
                display="block"
                className={asPath === item.href && "active"}
                color={asPath === item.href && "green.200"}
              />
            </Box>
          ))}
        </Box>
      </Slide>
    </>
  );
}
