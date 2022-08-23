import { createContext, FormEvent, ReactNode, useState } from "react";

import { getAuth, GithubAuthProvider, signInWithPopup } from "firebase/auth";

import { app, db } from "../services/firebase";
import { setDoc, doc } from "firebase/firestore";

import Cookies from "js-cookie";
import { useRouter } from "next/router";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextProps {
  loginWithGithub: (e: FormEvent) => Promise<void>;
  signOut: () => void;
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

  function signOut() {
    Cookies.remove("user_id");
    Cookies.remove("user_session");
    navigate.push("/auth/login");
  }

  return (
    <AuthContext.Provider
      value={{
        loginWithGithub,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
