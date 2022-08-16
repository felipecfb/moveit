import { Flex, Grid } from "@chakra-ui/react";
import CompleteChallenges from "../components/CompleteChallenges";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";

export default function Home() {
  return (
    <Flex
      direction={"column"}
      maxWidth="992px"
      w="100%"
      minHeight="100vh"
      align="flex-start"
      mx="auto"
      py="2.5rem"
      px="2rem"
    >
      <ExperienceBar />

      <Grid
        flex="1"
        w="100%"
        templateColumns="1fr 1fr"
        gap="6.25rem"
        alignContent="center"
      >
        <Flex direction="column">
          <Profile />
          <CompleteChallenges />
        </Flex>

        <Flex></Flex>
      </Grid>
    </Flex>
  );
}
