import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useRouter } from "next/router";
import {
  createContext,
  FormEvent,
  ReactNode,
  RefObject,
  useRef,
  useState,
} from "react";
import { app } from "../services/firebase";

interface RegisterProviderProps {
  children: ReactNode;
}

interface RegisterContextProps {
  name: string;
  email: string;
  password: string;
  setName: (value: string) => void;
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
  isLoading: boolean;
  handleSubmit: (e: FormEvent) => void;
}

export const RegisterContext = createContext({} as RegisterContextProps);

export function RegisterProvider({ children }: RegisterProviderProps) {
  const auth = getAuth(app);
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e: FormEvent) {
    setIsLoading(true);
    e.preventDefault();

    await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    setIsLoading(false);
    router.push("/");
  }

  return (
    <RegisterContext.Provider
      value={{
        name,
        email,
        password,
        setName,
        setEmail,
        setPassword,
        isLoading,
        handleSubmit,
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
}
