import { Avatar, Flex, Image, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { ChallengesContext } from "../context/ChallengesContext";

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <Flex align="center">
      <Avatar src="https://github.com/felipecfb.png" />
      <Flex ml="1.5rem" direction="column">
        <Text fontWeight="600" fontSize="1.5rem" color="title">
          Felipe Bastos
        </Text>
        <Text fontSize="rem" mt="0.5rem" display="flex">
          <Image src="icons/level.svg" alt="Level" mr="0.5rem" />
          Level {level}
        </Text>
      </Flex>
    </Flex>
  );
}
