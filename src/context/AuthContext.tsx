import { createContext, FormEvent, ReactNode } from "react";

import { getAuth, GithubAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";

import { app } from "../services/firebase";

import Cookies from "js-cookie";
import { useRouter } from "next/router";

interface AuthProviderProps {
  children: ReactNode;
}

type User = {
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
}

interface AuthContextProps {
  loginWithGithub: (e: FormEvent) => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {
  const navigate = useRouter();

  const auth = getAuth(app);

  async function loginWithGithub(e: FormEvent) {
    e.preventDefault();
    const provider = new GithubAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GithubAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;

      if (token) {
        if (Cookies.get("user_session")) {
          navigate.push("/");
          return;
        } else {
          Cookies.set("user_session", token, { expires: 1 });
          navigate.push("/");
        }
      }

    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GithubAuthProvider.credentialFromError(error);
      console.log(errorCode, errorMessage);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        loginWithGithub,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
