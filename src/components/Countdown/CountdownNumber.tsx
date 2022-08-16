import { Text } from "@chakra-ui/react";

interface CountdownNumberProps {
  title: string;
  borderRight?: string;
  borderLeft?: string;
}

export function CountdownNumber({ title, borderRight, borderLeft }: CountdownNumberProps) {
  return (
      <Text flex="1" borderRight={borderRight} borderLeft={borderLeft}>{title}</Text>
  );
}
