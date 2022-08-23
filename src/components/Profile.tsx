import { Avatar, Button, Flex, Image, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ProfileProps {
  avatar: string;
  name: string;
  level: number;
  signOut: ReactNode;
  onClick: () => void;
}

export function Profile({ avatar, name, level, signOut, onClick }: ProfileProps) {
  return (
    <Flex align="center">
      <Avatar src={avatar} />
      <Flex ml="1.5rem" direction="column">
        <Text fontWeight="600" fontSize="1.5rem" color="title" display="flex" alignItems="center">
          {name}
          <Button ml="2" bg="none" p="0" onClick={onClick} _hover={{
            bg: "none"
          }}>
            {signOut}
          </Button>
        </Text>
        <Text fontSize="rem" mt="0.5rem" display="flex">
          <Image src="icons/level.svg" alt="Level" mr="0.5rem" />
          Level {level}
        </Text>
      </Flex>
    </Flex>
  );
}
