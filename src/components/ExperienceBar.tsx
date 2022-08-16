import { Flex, Progress, ProgressLabel, Text } from "@chakra-ui/react";

export function ExperienceBar() {
  return (
    <Flex w="100%" align="center">
        <Text fontSize="1rem">0 xp</Text>
        <Progress flex="1" value={70} colorScheme="whatsapp">
          <ProgressLabel fontSize=".5rem">420 xp</ProgressLabel>
        </Progress>
        <Text>600 xp</Text>
    </Flex>
  );
}
