import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

interface CountdownContainerProps {
  children: ReactNode;
}

export function CountdownContainer({  children }: CountdownContainerProps) {
  return (
    <Flex
    flex="1"
    align="center"
    justify="space-evenly"
    bg="white"
    boxShadow="0 0 60px rgba(0, 0, 0, 0.05)"
    borderRadius="5px"
    fontSize="8.5rem"
    textAlign="center"
  >
    {children}
  </Flex>
  )
}