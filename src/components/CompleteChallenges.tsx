import { Flex, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { ChallengesContext } from "../context/ChallengesContext";

export default function CompleteChallenges() {
  const { challengesCompleted } = useContext(ChallengesContext);

  return (
    <Flex
      align="center"
      justify="space-between"
      my="3.5rem"
      pb="1rem"
      borderBottom="1px solid #D7D8DA"
      fontWeight="500"
    >
      <Text fontSize="1.25rem">Desafios completos</Text>
      <Text fontSize="1.5rem">{challengesCompleted}</Text>
    </Flex>
  );
}
