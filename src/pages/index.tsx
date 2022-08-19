import { Flex, Grid } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { ChallengeBox } from "../components/ChallengeBox";
import CompleteChallenges from "../components/CompleteChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChallengesProvider } from "../context/ChallengesContext";
import { CountdownProvider } from "../context/CountdownContext";

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
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
        <Head>
          <title>Início | move.it</title>
        </Head>

        <ExperienceBar />

        <Grid
          flex="1"
          w="100%"
          templateColumns="1fr 1fr"
          gap="6.25rem"
          alignContent="center"
        >
          <CountdownProvider>
            <Flex direction="column">
              <Profile />
              <CompleteChallenges />
              <Countdown />
            </Flex>

            <Flex>
              <ChallengeBox />
            </Flex>
          </CountdownProvider>
        </Grid>
      </Flex>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  

  return {
    props: {
      
    },
  };
};
