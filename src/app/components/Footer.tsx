import { Flex, IconButton, Text } from "@/once-ui/components";
import { person, social } from "../resources";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Flex as="footer" position="relative" fillWidth padding="8" justifyContent="center">
      <Flex
        fillWidth
        maxWidth="m"
        paddingY="8"
        paddingX="16"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text variant="body-default-s" onBackground="neutral-strong">
          <Text onBackground="neutral-weak">© {currentYear} /</Text>
          <Text paddingX="4">{person.name}</Text>
        </Text>
        <Flex gap="16">
          {social.map(
            (item, index) =>
              item.link && (
                <IconButton
                  key={`${index}-${item.name}`}
                  href={item.link}
                  icon={item.icon}
                  tooltip={item.name}
                  size="s"
                  variant="ghost"
                />
              ),
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;
