import { RefObject, useState } from "react";
import {
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
} from "@chakra-ui/react";
import { HiEye, HiEyeOff } from "react-icons/hi";

interface PasswordInputProps extends InputProps {
  value: string;
}

export function PasswordInput({ value, ...rest }: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  function revealPassowrd() {
    setShowPassword(!showPassword);
  }

  return (
    <>
      <FormLabel htmlFor="password">Password</FormLabel>
      <InputGroup>
        <InputRightElement>
          <IconButton
            variant="link"
            aria-label={showPassword ? "Mask password" : "Reveal password"}
            icon={showPassword ? <HiEyeOff /> : <HiEye />}
            onClick={revealPassowrd}
          />
        </InputRightElement>
        <Input
          id="password"
          name="password"
          type={showPassword ? "text" : "password"}
          autoComplete="current-password"
          required
          value={value}
          {...rest}
        />
      </InputGroup>
    </>
  );
}
