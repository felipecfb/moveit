import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  HStack,
  Image,
  Input,
  Link,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { useContext, useEffect } from "react";

import { PasswordInput } from "../../components/Form/PasswordInput";
import { RegisterContext } from "../../context/RegisterContext";

export default function Login() {
  const {
    name,
    email,
    password,
    setName,
    setEmail,
    setPassword,
    handleSubmit,
    isLoading,
  } = useContext(RegisterContext);

  return (
    <Container
      maxW="lg"
      py={{ base: "12", md: "24" }}
      px={{ base: "0", sm: "8" }}
    >
      <Stack spacing="8">
        <Stack spacing="6">
          <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
            <Image src="/logo-full.svg" maxW="300px" mx="auto" alt="Logo" />
            <Text fontSize="2rem" fontWeight="500">
              Create a new account
            </Text>
            <HStack spacing="1" justify="center">
              <Text color="muted">Do you have an account?</Text>
              <Link href="/auth/login">
                <Button variant="link" color="blue">
                  Sign in
                </Button>
              </Link>
            </HStack>
          </Stack>
        </Stack>
        <Box
          py={{ base: "0", sm: "8" }}
          px={{ base: "4", sm: "10" }}
          bg={useBreakpointValue({ base: "transparent", sm: "bg-surface" })}
          boxShadow={{ base: "none", sm: useColorModeValue("md", "md-dark") }}
          borderRadius={{ base: "none", sm: "xl" }}
        >
          <Stack spacing="6">
            <FormControl>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input
                id="name"
                type="text"
                onChange={(event) => setName(event.target.value)}
              />
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                id="email"
                type="email"
                onChange={(event) => setEmail(event.target.value)}
              />
              <PasswordInput
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </FormControl>
            <Stack spacing="6">
              <Button
                color="white"
                bg="blue"
                _hover={{
                  bg: "blue_dark",
                }}
                onClick={handleSubmit}
                isLoading={isLoading}
              >
                Sign up
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}
