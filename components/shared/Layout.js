import { useTheme as useNextTheme } from "next-themes";
import { Switch, useTheme, Container } from "@nextui-org/react";
import Menu from "./Menu";

const Layout = ({ children }) => {
  return (
    <div>
      <Menu />
      <Container>{children}</Container>
    </div>
  );
};

export default Layout;
