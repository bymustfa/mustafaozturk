import {
  Container,
  Navbar,
  Link,
  Text,
  Avatar,
  Dropdown,
  Switch,
  useTheme,
} from "@nextui-org/react";
import { MoonIcon, SunIcon } from "../icons";
import Language from "./Language";

import { useRouter } from "next/router";
import { useTheme as useNextTheme } from "next-themes";

const Menu = () => {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();
  const router = useRouter();

  const menuDatas = [
    { id: 1, name: "Home", link: "/" },
    { id: 4, name: "Project", link: "/project" },
    { id: 3, name: "Contact", link: "/contact" },
  ];

  return (
    <Navbar isBordered variant="sticky">
      <Navbar.Toggle showIn="xs" />
      <Navbar.Brand
        css={{
          "@xs": {
            w: "12%",
          },
        }}
      >
        <Text b color="inherit">
          Mustafa ÖZTÜRK
        </Text>
      </Navbar.Brand>
      <Navbar.Content
        enableCursorHighlight
        activeColor="secondary"
        hideIn="xs"
        variant="underline"
      >
        {menuDatas.map((menu, index) => (
          <Navbar.Link
            key={index}
            isActive={router.pathname === menu.link}
            href={menu.link}
          >
            {menu.name}
          </Navbar.Link>
        ))}
        {/*<Navbar.Link isActive href="#">*/}
        {/*  Customers*/}
        {/*</Navbar.Link>*/}
        {/*<Navbar.Link href="#">Pricing</Navbar.Link>*/}
        {/*<Navbar.Link href="#">Company</Navbar.Link>*/}
      </Navbar.Content>

      <Navbar.Content
        css={{
          "@xs": {
            w: "12%",
            jc: "flex-end",
          },
        }}
      >
        <Language />
        <Switch
          checked={isDark}
          color="secondary"
          onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
          iconOn={<SunIcon filled />}
          iconOff={<MoonIcon filled />}
        />
        {/*<Dropdown placement="bottom-right">*/}
        {/*  <Navbar.Item>*/}
        {/*    <Dropdown.Trigger>*/}
        {/*      <Avatar*/}
        {/*        bordered*/}
        {/*        as="button"*/}
        {/*        color="secondary"*/}
        {/*        size="md"*/}
        {/*        src="https://i.pravatar.cc/150?u=a042581f4e29026704d"*/}
        {/*      />*/}
        {/*    </Dropdown.Trigger>*/}
        {/*  </Navbar.Item>*/}
        {/*  <Dropdown.Menu*/}
        {/*    aria-label="User menu actions"*/}
        {/*    color="secondary"*/}
        {/*    onAction={(actionKey) => console.log({ actionKey })}*/}
        {/*  >*/}
        {/*    <Dropdown.Item key="profile" css={{ height: "$18" }}>*/}
        {/*      <Text b color="inherit" css={{ d: "flex" }}>*/}
        {/*        Signed in as*/}
        {/*      </Text>*/}
        {/*      <Text b color="inherit" css={{ d: "flex" }}>*/}
        {/*        zoey@example.com*/}
        {/*      </Text>*/}
        {/*    </Dropdown.Item>*/}
        {/*    <Dropdown.Item key="settings" withDivider>*/}
        {/*      My Settings*/}
        {/*    </Dropdown.Item>*/}
        {/*    <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>*/}
        {/*    <Dropdown.Item key="analytics" withDivider>*/}
        {/*      Analytics*/}
        {/*    </Dropdown.Item>*/}
        {/*    <Dropdown.Item key="system">System</Dropdown.Item>*/}
        {/*    <Dropdown.Item key="configurations">Configurations</Dropdown.Item>*/}
        {/*    <Dropdown.Item key="help_and_feedback" withDivider>*/}
        {/*      Help & Feedback*/}
        {/*    </Dropdown.Item>*/}
        {/*    <Dropdown.Item key="logout" withDivider color="error">*/}
        {/*      Log Out*/}
        {/*    </Dropdown.Item>*/}
        {/*  </Dropdown.Menu>*/}
        {/*</Dropdown>*/}
      </Navbar.Content>
      <Navbar.Collapse>
        {/*{collapseItems.map((item, index) => (*/}
        {/*  <Navbar.CollapseItem*/}
        {/*    key={item}*/}
        {/*    activeColor="secondary"*/}
        {/*    css={{*/}
        {/*      color: index === collapseItems.length - 1 ? "$error" : "",*/}
        {/*    }}*/}
        {/*    isActive={index === 2}*/}
        {/*  >*/}
        {/*    <Link*/}
        {/*      color="inherit"*/}
        {/*      css={{*/}
        {/*        minWidth: "100%",*/}
        {/*      }}*/}
        {/*      href="#"*/}
        {/*    >*/}
        {/*      {item}*/}
        {/*    </Link>*/}
        {/*  </Navbar.CollapseItem>*/}
        {/*))}*/}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Menu;
