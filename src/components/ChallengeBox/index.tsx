import { Flex, Grid, Image, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { ChallengesContext } from "../../context/ChallengesContext";
import { CountdownContext } from "../../context/CountdownContext";
import { ChallengeBoxButton } from "./ChallengeBoxButton";

export function ChallengeBox() {
  const { hasChallenge, activeChallenge, resetChallenge } =
    useContext(ChallengesContext);
    const { resetCountdown } = useContext(CountdownContext);

  function handleChangeSucceeded() {
    resetChallenge();
    resetCountdown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }

  return (
    <Flex
      h="100%"
      bg="white"
      borderRadius="5px"
      boxShadow="0 0 60px rgba(0, 0, 0, 0.05)"
      py="1.5rem"
      px="2rem"
      direction="column"
      align="center"
      justify="center"
      textAlign="center"
    >
      {hasChallenge ? (
        <Flex h="100%" direction="column">
          <Text
            color="blue"
            fontWeight="600"
            fontSize="1.25rem"
            pb="1.5rem"
            px="2rem"
            borderBottom="1px solid"
            borderColor="gray_line"
          >
            Ganhe {activeChallenge.amount} de xp
          </Text>
          <Flex flex="1" direction="column" align="center" justify="center">
            <Image src={`icons/${activeChallenge.type}.svg`} />
            <Text
              fontWeight="600"
              fontSize="2rem"
              color="title"
              mt="1.5rem"
              mb="1rem"
            >
              Novo desafio
            </Text>
            <Text lineHeight="1.5">{activeChallenge.description}</Text>
          </Flex>

          <Grid templateColumns="1fr 1fr" gap="1rem">
            <ChallengeBoxButton
              title="Falhei"
              bg="red"
              onClick={handleChallengeFailed}
            />
            <ChallengeBoxButton
              title="Completei"
              bg="green"
              onClick={handleChangeSucceeded}
            />
          </Grid>
        </Flex>
      ) : (
        <Flex direction="column" align="center">
          <Text fontSize="1.5rem" lineHeight="1.4" fontWeight="500">
            Finalize um ciclo para receber um desafio
          </Text>
          <Flex
            direction="column"
            align="center"
            lineHeight="1.4"
            maxWidth="70%"
            mt="3rem"
          >
            <Image src="/icons/level-up.svg" mb="1" />
            <Text>Avance de level completando desafios.</Text>
          </Flex>
        </Flex>
      )}
    </Flex>
  );
}
