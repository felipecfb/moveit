import { Avatar, Flex, Image, Text } from "@chakra-ui/react";

interface ProfileProps {
  avatar: string;
  name: string;
  level: number;
}

export function Profile({ avatar, name, level }: ProfileProps) {
  return (
    <Flex align="center">
      <Avatar src={avatar} />
      <Flex ml="1.5rem" direction="column">
        <Text fontWeight="600" fontSize="1.5rem" color="title">
          {name}
        </Text>
        <Text fontSize="rem" mt="0.5rem" display="flex">
          <Image src="icons/level.svg" alt="Level" mr="0.5rem" />
          Level {level}
        </Text>
      </Flex>
    </Flex>
  );
}
