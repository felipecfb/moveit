import { Flex, Grid, Text } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { ChallengeBox } from "../components/ChallengeBox";
import CompleteChallenges from "../components/CompleteChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChallengesProvider } from "../context/ChallengesContext";
import { CountdownProvider } from "../context/CountdownContext";

import { db } from "../services/firebase";
import { doc, getDoc } from "firebase/firestore";

type User = {
  user: {
    displayName: string;
    email: string;
    photoURL: string;
    level: number;
    currentExperience: number;
    challengesCompleted: number;
  };
};

export default function Home({ user }: User) {
  return (
    <ChallengesProvider
      level={user.level}
      currentExperience={user.currentExperience}
      challengesCompleted={user.challengesCompleted}
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
              <Profile
                avatar={user.photoURL}
                name={user.displayName}
                level={user.level}
              />
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
  const { user_session, user_id } = ctx.req.cookies;

  if (!user_session) {
    ctx.res.writeHead(302, {
      Location: "/auth/login",
    });
    ctx.res.end();
  }

  const userRef = doc(db, "users", user_id!);
  const userDoc = await getDoc(userRef);
  const user = userDoc.data();

  return {
    props: {
      user,
    },
  };
};
