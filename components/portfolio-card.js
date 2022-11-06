import React from "react";
import Image from "next/image";
import { Box, Text, Stack, Link, useColorModeValue } from "@chakra-ui/react";
import cn from "classnames";
import { ExternalLink } from "@/components/icons";
import Tilt from "react-tilt";

import { useTranslation } from "next-i18next";

export default function PortfolioCard({ item }) {
  const { t } = useTranslation("common");
  return (
    <Tilt className="Tilt" options={{ max: 15 }}>
      <Box py={6} h="100%">
        <Box
          boxShadow="dark-lg"
          w={300}
          h="100%"
          bg={useColorModeValue("white", "gray.900")}
          rounded={"md"}
          p={6}
          overflow={"hidden"}
          className="card-hover"
        >
          <Box
            h={"190px"}
            bg={"gray.700"}
            mt={-6}
            mx={-6}
            mb={6}
            pos={"relative"}
          >
            {item.image && (
              <Image
                src={item.image}
                layout="fill"
                objectFit="contain"
                quality={100}
                placeholder="blur"
                blurDataURL={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAG1BMVEXMzMyWlpaqqqq3t7fFxcW+vr6xsbGjo6OcnJyLKnDGAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABAElEQVRoge3SMW+DMBiE4YsxJqMJtHOTITPeOsLQnaodGImEUMZEkZhRUqn92f0MaTubtfeMh/QGHANEREREREREREREtIJJ0xbH299kp8l8FaGtLdTQ19HjofxZlJ0m1+eBKZcikd9PWtXC5DoDotRO04B9YOvFIXmXLy2jEbiqE6Df7DTleA5socLqvEFVxtJyrpZFWz/pHM2CVte0lS8g2eDe6prOyqPglhzROL+Xye4tmT4WvRcQ2/m81p+/rdguOi8Hc5L/8Qk4vhZzy08DduGt9eVQyP2qoTM1zi0/uf4hvBWf5c77e69Gf798y08L7j0RERERERERERH9P99ZpSVRivB/rgAAAABJRU5ErkJggg==`}
              />
            )}
          </Box>

          <Stack>
            <Text
              color={"green.400"}
              textTransform={"uppercase"}
              fontWeight={800}
              fontSize={"sm"}
              letterSpacing={1.1}
              style={{ transform: "translateZ(30px)" }}
            >
              {item.title}
            </Text>
            <Text color={"gray.300"}>{item.description}</Text>
          </Stack>

          <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
            {item.href.trim().length > 0 && (
              <Link
                isExternal
                className="preview"
                color="green.400"
                href={item.href}
              >
                <span>{t("open_project")}</span>
                <ExternalLink width={15} height={15} />
              </Link>
            )}

            <ul
              className={cn([
                "langs",
                item.href.trim().length === 0 && "no-hide",
              ])}
            >
              {item.lang.map((x) => {
                if (x)
                  return (
                    <li key={x.id}>
                      <span style={{ backgroundColor: x.color }} /> {x.title}
                    </li>
                  );
              })}
            </ul>
          </Stack>
        </Box>
      </Box>
    </Tilt>
  );
}
