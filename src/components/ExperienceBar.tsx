import { Flex, Progress, ProgressLabel, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { ChallengesContext } from "../context/ChallengesContext";

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);

  const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <Flex w="100%" align="center" mb="110px">
        <Text fontSize="1rem">0 xp</Text>
        <Progress flex="1" value={percentToNextLevel} colorScheme="whatsapp">
          <ProgressLabel fontSize=".5rem" color="text">{currentExperience} xp</ProgressLabel>
        </Progress>
        <Text>{experienceToNextLevel} xp</Text>
    </Flex>
  );
}
