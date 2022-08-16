import { Button, Flex, Text } from "@chakra-ui/react";
import { CountdownContainer } from "./CountdownContainer";
import { CountdownNumber } from "./CountdownNumber";

export function Countdown() {
  return (
    <Flex direction="column">
      <Flex align="center" fontFamily="Rajdhani" fontWeight="600" color="title">
        <CountdownContainer>
          <CountdownNumber title="2" borderRight="1px solid #F0F1F3" />
          <CountdownNumber title="5" borderRight="1px solid #F0F1F3" />
        </CountdownContainer>
        <Text fontSize="6.25rem" mx="0.5rem">
          :
        </Text>
        <CountdownContainer>
          <CountdownNumber title="0" borderRight="1px solid #F0F1F3" />
          <CountdownNumber title="0" borderRight="1px solid #F0F1F3" />
        </CountdownContainer>
      </Flex>
      <Button
        type="button"
        w="100%"
        h="5rem"
        mt="2rem"
        display="flex"
        alignItems="center"
        justifyContent="center"
        border="0"
        borderRadius="5px"
        bg="blue"
        color="white"
        fontSize="1.25rem"
        fontWeight="600"
        transition=".2s"
        _hover={{
          bg: "blue_dark",
        }}
      >
        Iniciar um ciclo
      </Button>
    </Flex>
  );
}
