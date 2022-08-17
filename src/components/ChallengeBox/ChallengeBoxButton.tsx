import { Button, ButtonProps } from "@chakra-ui/react";

interface ChallengeBoxButtonProps extends ButtonProps {
  title: string;
  onClick: () => void;
}

export function ChallengeBoxButton({ title, onClick, ...rest }: ChallengeBoxButtonProps) {
  return (
    <Button
      type="button"
      display="flex"
      alignItems="center"
      justifyContent="center"
      border="0"
      borderRadius="5px"
      color="white"
      fontSize="1rem"
      fontWeight="600"
      h="3rem"
      transition=".2s"
      onClick={onClick}
      _hover={{
        filter: "brightness(0.9)",
      }}
      {...rest}
    >
      {title}
    </Button>
  );
}
