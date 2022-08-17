import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from "@chakra-ui/react";

interface ButtonProps extends ChakraButtonProps {
  children: string;
  onClick?: () => void;
}

export function Button({ children, onClick, ...rest }: ButtonProps) {
  return (
    <ChakraButton
      w="100%"
      h="5rem"
      mt="2rem"
      display="flex"
      alignItems="center"
      justifyContent="center"
      border="0"
      borderRadius="5px"
      fontSize="1.25rem"
      fontWeight="600"
      transition=".2s"
      onClick={onClick}
      {...rest}
    >
      {children}
    </ChakraButton>
  );
}
