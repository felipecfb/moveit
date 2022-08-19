import { useContext } from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Image,
  Input,
  Link,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";

import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

import { AuthContext } from "../../context/AuthContext";

import { PasswordInput } from "../../components/Form/PasswordInput";
import { LoginWithSocial } from "../../components/Form/LoginWithSocial";

export default function Login() {
  const { loginWithGithub } = useContext(AuthContext);

  return (
    <Container
      maxW="lg"
      py={{ base: "12", md: "24" }}
      px={{ base: "0", sm: "8" }}
    >
      <Stack spacing="8">
        <Stack spacing="6">
          <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
            <Image src="/logo-full.svg" maxW="300px" mx="auto" />
            <Text fontSize="2rem" fontWeight="500">
              Log in to your account
            </Text>
            <HStack spacing="1" justify="center">
              <Text color="muted">Don't have an account?</Text>
              <Link href="/user/register">
                <Button variant="link" color="blue">
                  Sign up
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
            <Stack spacing="5">
              <FormControl>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input id="email" type="email" />
                <PasswordInput />
              </FormControl>
            </Stack>
            <HStack justify="space-between">
              <Button variant="link" color="blue_dark" size="sm">
                Forgot password?
              </Button>
            </HStack>
            <Stack spacing="6">
              <Button
                color="white"
                bg="blue"
                _hover={{
                  bg: "blue_dark",
                }}
              >
                Sign in
              </Button>
              <HStack>
                <Divider />
                <Text fontSize="sm" whiteSpace="nowrap" color="muted">
                  or continue with
                </Text>
                <Divider />
              </HStack>
              <LoginWithSocial
                icon={<Icon as={AiFillGithub} w={7} h={7} />}
                title="Github"
                onClick={loginWithGithub}
              />
              <LoginWithSocial
                icon={<Icon as={FcGoogle} w={7} h={7} />}
                title="Google"
                onClick={loginWithGithub}
              />
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}
