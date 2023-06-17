import {
  Badge,
  Heading,
  LinkBox,
  LinkOverlay,
  useColorMode,
} from '@chakra-ui/react';
import NextLink from 'next/link';

interface Props {
  url: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  notImplemented?: boolean;
}

function PageLink({
  url,
  icon,
  title,
  description,
  notImplemented = false,
}: Props) {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <LinkBox
      borderWidth="1px"
      borderRadius="8px"
      borderColor={isDark ? 'dark.text' : 'light.text'}
      p="12px"
      position="relative"
    >
      <Heading
        as="h2"
        size="sm"
        display="flex"
        gap="8px"
        alignItems="center"
        mb="10px"
      >
        {icon}
        <LinkOverlay as={NextLink} href={url}>
          {title}
        </LinkOverlay>
      </Heading>
      <p>{description}</p>
      {notImplemented && (
        <Badge position="absolute" top="4px" right="4px">
          Not implemented
        </Badge>
      )}
    </LinkBox>
  );
}

export default PageLink;
