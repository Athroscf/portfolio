"use client";

import { Flex } from "@/once-ui/components";

interface IToC {
  structure: {
    title: string;
    display: boolean;
    items: string[];
  }[];
  about: {
    tableOfContent: {
      display: boolean;
      subItems: boolean;
    };
  };
}

const TableOfContents: React.FC<IToC> = () => {
  return (
    <Flex
      style={{
        left: "0",
        top: "50%",
        transform: "translateY(-50%)",
        whiteSpace: "nowrap",
      }}
      position="fixed"
      paddingLeft="24"
      gap="32"
      direction="column"
      hide="s"
    ></Flex>
  );
};

export default TableOfContents;
