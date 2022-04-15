import {
  Avatar,
  Box,
  Center,
  ChakraProvider,
  Container,
  extendTheme,
  Flex,
  Grid,
  Heading,
  HStack,
  Icon,
  IconButton,
  Image,
  Link,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { FC } from "react";
import { Helmet } from "react-helmet";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { MdArrowForward, MdCreate } from "react-icons/md";

const theme = extendTheme({
  shadows: { outline: "0 0 0 3px rgba(183, 148, 244, 0.6)" },
});

const secondaryTextColor = "blackAlpha.600";

export const Page: FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <Helmet>
        <title>すてぃん</title>
        <meta name="description" content="すてぃんの自己紹介ページ" />
      </Helmet>
      <Box>
        <Box as="main" lineHeight="1.8" letterSpacing="wider">
          <Flex
            bgGradient="linear(to-br, purple.400, pink.400)"
            justifyContent="center"
            paddingTop="16"
          >
            <Avatar
              name="すてぃん"
              src="/chiroru.jpg"
              showBorder
              borderWidth="4px"
              transform="translateY(50%)"
              width={["40", "48", "56"]}
              height={["40", "48", "56"]}
            />
          </Flex>
          <Container paddingTop={["32", "36", "40"]} paddingBottom="12">
            <Heading as="h1" fontSize="2xl">
              すてぃん
            </Heading>
            <Text marginTop="2" fontSize="sm" color={secondaryTextColor}>
              フロントエンドエンジニア
            </Text>
            <HStack marginTop="8">
              <IconButton
                aria-label="GitHub"
                title="GitHub"
                as={Link}
                isExternal
                href="https://github.com/y-hiraoka"
                icon={<Icon as={FaGithub} fontSize="3xl" color="#171515" />}
                size="lg"
                variant="ghost"
              />
              <IconButton
                aria-label="Twitter"
                title="Twitter"
                as={Link}
                isExternal
                href="https://twitter.com/stin_factory"
                icon={<Icon as={FaTwitter} fontSize="3xl" />}
                size="lg"
                variant="ghost"
                colorScheme="twitter"
              />
              <IconButton
                aria-label="Zenn"
                title="Zenn"
                as={Link}
                isExternal
                href="https://zenn.dev/stin"
                icon={<Image src="/zenn-logo/logo-only.svg" alt="" boxSize="7" />}
                size="lg"
                variant="ghost"
              />
              <IconButton
                aria-label="すてぃんのブログ"
                title="すてぃんのブログ"
                as={Link}
                href="https://blog.stin.ink"
                icon={<Icon as={MdCreate} fontSize="3xl" color="purple.300" />}
                size="lg"
                variant="ghost"
              />
            </HStack>
          </Container>
          <Box bgColor="gray.50">
            <Container paddingY="24">
              <Stack spacing="20">
                <Stack spacing="4">
                  <Heading fontSize="xl">Skills</Heading>
                  <Flex gap="4" wrap="wrap">
                    <Skill
                      title="TypeScript"
                      image="/typescript-design-assets/ts-logo-256.svg"
                      href="https://typescriptlang.org"
                    />
                    <Skill
                      title="React"
                      image="/react-logo.svg"
                      href="https://reactjs.org"
                    />
                    <Skill
                      title="Next.js"
                      image="/NextJS/icon/dark/nextjs-icon-dark.svg"
                      href="https://nextjs.org"
                    />
                  </Flex>
                </Stack>
                <Stack spacing="4">
                  <Heading fontSize="xl">Products</Heading>
                  {/* <Grid templateColumns="repeat(auto-fill, minmax(264px, 1fr))" gap="4"> */}
                  <Product
                    name="ポケモンDP Sound Library ループプレイヤー"
                    description="『ポケットモンスターダイヤモンド・パール』の BGM をゲームプレイ中のようにループして再生できる Web サイトです。"
                    href="https://dp-soundlibrary.stin.ink"
                  />
                  {/* </Grid> */}
                </Stack>
                <Stack spacing="4">
                  <Heading fontSize="xl">Libraries</Heading>
                  <Grid templateColumns="repeat(auto-fill, minmax(264px, 1fr))" gap="4">
                    <Product
                      name="react-spotify-web-playback-sdk"
                      description="A React wrapper for Spotify Web Playback SDK."
                      href="https://github.com/y-hiraoka/react-spotify-web-playback-sdk"
                    />
                    <Product
                      name="draft-js-prism-decorator"
                      description="Draft.js decorator for syntax highlighting with Prism.js."
                      href="https://github.com/y-hiraoka/draft-js-prism-decorator"
                    />
                  </Grid>
                </Stack>
                <Stack spacing="4">
                  <Heading fontSize="xl">Qualifications</Heading>
                  <UnorderedList paddingLeft="4">
                    <ListItem>基本情報技術者</ListItem>
                    <ListItem>応用情報技術者</ListItem>
                    <ListItem>データベーススペシャリスト</ListItem>
                  </UnorderedList>
                </Stack>
              </Stack>
            </Container>
          </Box>
        </Box>
        <Center
          paddingY="4"
          bgColor="gray.50"
          borderTop="1px solid"
          borderColor="blackAlpha.50"
        >
          <Box as="small">&copy; {new Date().getFullYear()} stin_factory</Box>
        </Center>
      </Box>
    </ChakraProvider>
  );
};

const Skill: FC<{
  image: string;
  href: string;
  title: string;
}> = ({ href, image, title }) => {
  return (
    <Link
      isExternal
      href={href}
      w="16"
      h="16"
      borderRadius="md"
      aria-label={title}
      title={title}
    >
      <Image width="full" height="full" src={image} alt={title} />
    </Link>
  );
};

const Product: FC<{
  name: string;
  href: string;
  description: string;
}> = ({ href, name, description }) => {
  return (
    <Link
      isExternal
      href={href}
      display="flex"
      gap="3"
      borderRadius="md"
      border="1px solid"
      borderColor="blackAlpha.100"
      _hover={{ boxShadow: "md" }}
    >
      <Stack flex="1" padding="4">
        <Box fontWeight="bold">{name}</Box>
        <Box fontSize="sm" color={secondaryTextColor} flex="1">
          {description}
        </Box>
        <HStack color="purple.400" spacing="1" justifyContent="flex-end">
          <Box as="span" fontSize="sm">
            サイトへ
          </Box>
          <Icon as={MdArrowForward} />
        </HStack>
      </Stack>
    </Link>
  );
};
