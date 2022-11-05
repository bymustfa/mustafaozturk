import { Container, Divider, Flex, Box } from "@chakra-ui/react";

import Menu from "@/components/menu";
import Social from "@/components/social";

function Layout({ children }) {
  return (
    <Box px={2}>
      <Container maxW="container.lg" my={4} p={0}>
        <Flex alignItems="center" justifyContent="space-between">
          <Menu />
          <Social />
        </Flex>

        <Divider my={2} />
      </Container>

      <Container
        className="main"
        border="1px"
        borderColor="gray.600"
        borderRadius="lg"
        maxW="container.lg"
        my={4}
        p={4}
      >
        {children}
      </Container>
    </Box>
  );
}

export default Layout;
