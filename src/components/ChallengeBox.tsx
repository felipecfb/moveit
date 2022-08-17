import { Flex, Image, Text } from "@chakra-ui/react";

export function ChallengeBox() {
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
      <Flex direction="column" align="center">
        <Text fontSize="1.5rem" lineHeight="1.4" fontWeight="500">
          Finalize um ciclo para receber um desafio
        </Text>
        <Flex direction="column" align="center" lineHeight="1.4" maxWidth="70%" mt="3rem">
          <Image src="/icons/level-up.svg" mb="1" />
          <Text>Avance de level completando desafios.</Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
