import { Flex, Text } from "@chakra-ui/react";
import { ExperienceBar } from "../components/ExperienceBar";

export default function Home() {
  return (
    <Flex
      maxWidth="992px"
      w="100%"
      minHeight="100vh"
      align="flex-start"
      mx="auto"
      py="2.5rem"
      px="2rem"
    >
      <ExperienceBar />
    </Flex>
  );
}
