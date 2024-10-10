import { Avatar, Button, Flex, Heading, RevealFx, Text } from "@/once-ui/components";
import { about, baseURL, home, person } from "./resources";

export function generateMetadata() {
	const title = home.title;
	const description = home.description;
	const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: 'website',
			url: `https://${baseURL}`,
			images: [
				{
					url: ogImage,
					alt: title,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: [ogImage],
		},
	};
}

export default function Home() {
  return (
    <Flex maxWidth="m" fillWidth gap="xl" direction="column" alignItems="center">
      <Flex fillWidth direction="column" paddingY="l" gap="m">
        <Flex direction="column" fillWidth maxWidth="s" gap="m">
          <RevealFx translateY="4">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2}>
            <Text wrap="balance" onBackground="neutral-weak" variant="body-default-l">
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx translateY="12" delay={0.4}>
							<Button
								data-border="rounded"
								href="/about"
								variant="tertiary"
								suffixIcon="chevronRight"
								size="m">
								<Flex
									gap="8"
									alignItems="center">
									{about.avatar.display && (
										<Avatar
											style={{marginLeft: '-0.75rem', marginRight: '0.25rem'}}
											src={person.avatar}
											size="m"/>
										)}
										About me
								</Flex>
							</Button>
						</RevealFx>
        </Flex>
      </Flex>
    </Flex>
  );
};
