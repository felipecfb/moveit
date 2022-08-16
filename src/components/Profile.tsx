import { Avatar, Flex, Image, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Avatar src="https://github.com/felipecfb.png" />
      <Flex ml="1.5rem" direction="column">
        <Text fontWeight="600" fontSize="1.5rem" color="title">
          Felipe Bastos
        </Text>
        <Text fontSize="rem" mt="0.5rem" display="flex">
          <Image src="icons/level.svg" alt="Level" mr="0.5rem" />
          Level 1
        </Text>
      </Flex>
    </Flex>
  );
}
