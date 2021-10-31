import Layout from "@/components/layout";
import { Center, Heading } from "@chakra-ui/react";
import TextAnimation from "react-animate-text";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home() {
  const { t } = useTranslation("common");
  return (
    <>
      <Layout>
        <Center height="80vh">
          <Heading>
            <TextAnimation>MUSTAFA ÖZTÜRK</TextAnimation>
          </Heading>
        </Center>
      </Layout>
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
