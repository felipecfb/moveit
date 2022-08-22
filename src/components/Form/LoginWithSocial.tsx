import { Button, ButtonProps, Text } from "@chakra-ui/react";
import { FormEvent, ReactNode } from "react";

type User = {
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
}

interface LoginWithSocialProps extends ButtonProps {
  icon: ReactNode;
  title: string;
  onClick: (e: FormEvent) => Promise<User | undefined>;
}

export function LoginWithSocial({ title, icon, onClick, ...rest }: LoginWithSocialProps) {
  return (
    <Button onClick={onClick} {...rest} bg="background" border="1px solid #000">
      {icon}
      <Text color="title" ml="1rem">Continue with {title}</Text>
    </Button>
  )
}