import { Flex, Text } from "@chakra-ui/react";
import { CountdownContainer } from "./CountdownContainer";
import { CountdownNumber } from "./CountdownNumber";

export function Countdown() {
  return (
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
  );
}
