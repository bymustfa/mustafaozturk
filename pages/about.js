import React from "react";
import Layout from "@/components/layout";
import {
  Heading,
  Box,
  Divider,
  Flex,
  Spacer,
  Text,
  Center,
  Image,
} from "@chakra-ui/react";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { aboutText, experiences, educations } from "@/utils/about";
import { useRouter } from "next/router";
import useWindowSize from "../hooks/useWindowSize";
import AnimatedText from "react-animated-text-content";

const BREAKPOINT = 945;

export default function About() {
  const { t } = useTranslation("common");
  const router = useRouter();
  const { width } = useWindowSize();

  return (
    <Layout>
      <Flex alignItems="center">
        <Box w="30%" p={4}>
          <Image
            borderRadius={6}
            src="/images/me.png"
            alt="Mustafa ÖZTÜRK"
            boxShadow="lg"
          />
        </Box>
        <Box w="70%" p={4}>
          <Heading as="h2" size="lg" mb={3}>
            Mustafa ÖZTÜRK
          </Heading>
          <AnimatedText
            type="chars"
            interval={0.04}
            duration={0.8}
            animation={{
              y: "100px",
              ease: "ease",
              scale: -0.52,
            }}
          >
            {aboutText[router.locale]}
          </AnimatedText>
        </Box>
      </Flex>

      <Divider my={6} mt={8} />

      <Flex flexWrap="wrap">
        <Box w={width <= BREAKPOINT ? "100%" : "50%"} p={4}>
          <Center>
            <Heading as="h3" size="lg">
              {t("my_experiences")}
            </Heading>
          </Center>

          <Center>
            <Divider my={5} w="50%" />
          </Center>

          {experiences.map((experience) => (
            <Box key={experience.id}>
              <Flex alignItems="center" flexWrap="wrap">
                <Heading as="h5" size="md" mr={2} padding={2} w="100%">
                  {experience.title}
                </Heading>
              </Flex>
              <Text as="p" padding={2}>
                {experience.location} | {experience.years}
              </Text>
              <Text fontSize="sm" color="green.200" as="i" padding={2}>
                ● {experience.company}
              </Text>
              <Divider my={4} />
            </Box>
          ))}
        </Box>

        <Spacer />

        <Box w={width <= BREAKPOINT ? "100%" : "50%"} p={4}>
          <Center>
            <Heading as="h3" size="lg">
              {t("my_trainings")}
            </Heading>
          </Center>
          <Center>
            <Divider my={5} w="50%" />
          </Center>

          {educations.map((education) => (
            <Box key={education.id}>
              <Heading as="h5" size="md" padding={2}>
                {education.title}
              </Heading>

              <Flex padding={2}>
                <Text as="p">{education.location}</Text>
                <Text mx={2}> | </Text>
                <Text color="green.200">{education.years}</Text>
              </Flex>

              <Divider my={4} />
            </Box>
          ))}
        </Box>
      </Flex>
    </Layout>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
