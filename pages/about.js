import React from "react";
import Link from "next/link";
import Layout from "@/components/layout";
import {
  Heading,
  Box,
  Divider,
  Container,
  Flex,
  Spacer,
  Text,
  Center,
  Image,
  Button,
} from "@chakra-ui/react";
import { Eye } from "@/components/icons";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { aboutText, experiences, educations } from "@/utils/about";
import { useRouter } from "next/router";

export default function About() {
  const { t } = useTranslation("common");
  const router = useRouter();
  return (
    <>
      <Layout>
        <Flex>
          <Box w="25%" p={4}>
            <Image
              borderRadius="300"
              src="/images/myImage.jpg"
              alt="Mustafa ÖZTÜRK"
            />
          </Box>
          <Box w="75%" p={4}>
            <Heading as="h2" size="lg" mb={3}>
              Mustafa ÖZTÜRK
            </Heading>
            {aboutText[router.locale]}

            <Button
              rightIcon={<Eye width={18} height={18} />}
              color="gray.300"
              borderColor="green.200"
              variant="outline"
              mt={5}
              size="sm"
            >
              {t("resume")}
            </Button>
          </Box>
        </Flex>

        <Divider my={6} mt={12} />

        <Flex>
          <Box w="50%" p={4}>
            <Center>
              <Heading as="h3" size="lg">
                Deneyimlerim
              </Heading>
            </Center>
            <Center>
              <Divider my={5} w="50%" />
            </Center>

            {experiences.map((experience) => (
              <Box key={experience.id}>
                <Flex alignItems="center">
                  <Heading as="h5" size="md">
                    {experience.title}
                  </Heading>
                  <Text fontSize="sm" color="green.200" as="i" ml={2}>
                    ● {experience.company}
                  </Text>
                </Flex>
                <Text as="p">
                  {experience.location} ● {experience.years}
                </Text>
                <Divider my={4} />
              </Box>
            ))}
          </Box>
          <Spacer />
          <Box w="50%" p={4}>
            <Center>
              <Heading as="h3" size="lg">
                Eğitimlerim
              </Heading>
            </Center>
            <Center>
              <Divider my={5} w="50%" />
            </Center>

            {educations.map((education) => (
              <Box key={education.id}>
                <Flex alignItems="center">
                  <Heading as="h5" size="md">
                    {education.title}
                  </Heading>
                </Flex>
                <Text as="p">
                  {education.location} ● {education.years}
                </Text>
                <Divider my={4} />
              </Box>
            ))}
          </Box>
        </Flex>
      </Layout>
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
