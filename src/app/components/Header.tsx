"use client";

import { Flex, ToggleButton } from "@/once-ui/components";
import { usePathname } from "next/navigation";
import { display, person, routes } from "../resources";

import styles from "./Header.module.scss";

const Header = () => {
  const pathname = usePathname() ?? "";

  return (
    <Flex
      style={{ height: "fit-content" }}
      className={styles.position}
      as="header"
      zIndex={9}
      fillWidth
      padding="8"
      justifyContent="center"
    >
      <Flex hide="s" paddingLeft="12" fillWidth alignItems="center" textVariant="body-default-s">
        {display.location && <>{person.location}</>}
      </Flex>
      <Flex
        background="surface"
        border="neutral-medium"
        borderStyle="solid-1"
        radius="m-4"
        shadow="l"
        padding="4"
        justifyContent="center"
      >
        <Flex gap="4" textVariant="body-default-s">
          {routes["/"] && (
            <ToggleButton prefixIcon="home" href="/" selected={pathname === "/"}>
              <Flex paddingX="2" hide="s">
                Home
              </Flex>
            </ToggleButton>
          )}
          {routes["/about"] && (
            <ToggleButton prefixIcon="person" href="/about" selected={pathname === "/about"}>
              <Flex paddingX="2" hide="s">
                About
              </Flex>
            </ToggleButton>
          )}
          {routes["/work"] && (
            <ToggleButton prefixIcon="grid" href="/work" selected={pathname.startsWith("/work")}>
              <Flex paddingX="2" hide="s">
                Work
              </Flex>
            </ToggleButton>
          )}
          {routes["/blog"] && (
            <ToggleButton prefixIcon="book" href="/blog" selected={pathname.startsWith("/blog")}>
              <Flex paddingX="2" hide="s">
                Blog
              </Flex>
            </ToggleButton>
          )}
          {routes["/gallery"] && (
            <ToggleButton
              prefixIcon="gallery"
              href="/gallery"
              selected={pathname.startsWith("/gallery")}
            >
              <Flex paddingX="2" hide="s">
                Gallery
              </Flex>
            </ToggleButton>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
