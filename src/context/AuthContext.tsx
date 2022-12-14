import { createContext, FormEvent, ReactNode, useState } from "react";

import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { app, db } from "../services/firebase";
import { setDoc, doc } from "firebase/firestore";

import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { createStandaloneToast } from "@chakra-ui/react";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextProps {
  loginWithGithub: (e: FormEvent) => Promise<void>;
  loginWithGoogle: (e: FormEvent) => Promise<void>;
  signOut: () => void;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {
  const navigate = useRouter();

  const { toast } = createStandaloneToast();

  const auth = getAuth(app);

  async function loginWithGoogle(e: FormEvent) {
    e.preventDefault();
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;

      const user = result.user;

      const userData = {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        level: 1,
        currentExperience: 0,
        challengesCompleted: 0,
      };

      if (token) {
        if (Cookies.get("user_session")) {
          navigate.push("/");
          return;
        } else {
          Cookies.set("user_session", token, { expires: 1 });
          navigate.push("/");
        }
      }

      Cookies.set("user_id", user.uid);

      await setDoc(doc(db, "users", user.uid), userData);
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GithubAuthProvider.credentialFromError(error);
      console.log(errorCode, errorMessage);
    }
  }

  async function loginWithGithub(e: FormEvent) {
    e.preventDefault();
    const provider = new GithubAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GithubAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;

      const user = result.user;

      const userData = {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        level: 1,
        currentExperience: 0,
        challengesCompleted: 0,
      };

      if (token) {
        if (Cookies.get("user_session")) {
          navigate.push("/");
          return;
        } else {
          Cookies.set("user_session", token, { expires: 1 });
          navigate.push("/");
        }
      }

      Cookies.set("user_id", user.uid);

      await setDoc(doc(db, "users", user.uid), userData);
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GithubAuthProvider.credentialFromError(error);
      if (errorMessage === 'Firebase: Error (auth/account-exists-with-different-credential).') {
        toast({
          title: "Error",
          description: 'With account exists with different credential (Email or Google).',
          status: "error",
          position: 'top-right',
        })
      }

      console.log(errorMessage);
      
    }
  }

  function signOut() {
    Cookies.remove("user_id");
    Cookies.remove("user_session");
    navigate.push("/auth/login");
  }

  return (
    <AuthContext.Provider
      value={{
        loginWithGoogle,
        loginWithGithub,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
