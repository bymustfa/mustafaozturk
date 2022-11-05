import Layout from "@/components/layout";
import { Center, Heading } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import AnimatedText from "react-animated-text-content";

export default function Home() {
  const { t } = useTranslation("common");
  return (
    <>
      <Layout>
        <Center height="80vh">
          <Heading>
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
              MUSTAFA ÖZTÜRK
            </AnimatedText>
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
