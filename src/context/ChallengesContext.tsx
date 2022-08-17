import { createContext, ReactNode, useEffect, useState } from "react";
import Cookies from "js-cookie";

import challenges from "../../challenges.json";
import { LevelUpModal } from "../components/LevelUpModal";
import { useDisclosure } from "@chakra-ui/react";

interface ChallengesProviderProps {
  children: ReactNode;
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

type Challenge = {
  type: string;
  description: string;
  amount: number;
};

interface ChallengesContextProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  hasChallenge: boolean;
  activeChallenge: Challenge;
  experienceToNextLevel: number;
  setIsLevelUpModalOpen: (hasLevelUp: boolean) => void;
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
  completeChallenge: () => void;
}

export const ChallengesContext = createContext({} as ChallengesContextProps);

export function ChallengesProvider({
  children,
  ...rest
}: ChallengesProviderProps) {
  const { onOpen } = useDisclosure();

  const [level, setLevel] = useState(rest.level ?? 1);
  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);
  const [currentExperience, setCurrentExperience] = useState(
    rest.currentExperience ?? 0
  );
  const [challengesCompleted, setChallengesCompleted] = useState(
    rest.challengesCompleted ?? 0
  );

  const [hasChallenge, setHasChallenge] = useState(false);
  const [activeChallenge, setActiveChallenge] = useState({} as Challenge);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  useEffect(() => {
    Cookies.set("level", String(level));
    Cookies.set("currentExperience", String(currentExperience));
    Cookies.set("challengesCompleted", String(challengesCompleted));
  }, [level, currentExperience, challengesCompleted]);

  function levelUp() {
    setLevel(level + 1);
    setIsLevelUpModalOpen(true);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];
    setActiveChallenge(challenge);
    setHasChallenge(true);

    new Audio("/notification.mp3").play();

    if (Notification.permission === "granted") {
      new Notification("Novo Desafio 🎉", {
        body: `Valendo ${challenge.amount}xp!`,
      });
    }
  }

  function resetChallenge() {
    setActiveChallenge({} as Challenge);
    setHasChallenge(false);
  }

  function completeChallenge() {
    if (!hasChallenge) {
      return;
    }

    const { amount } = activeChallenge;
    let finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
      onOpen();
    }
    setCurrentExperience(finalExperience);

    setChallengesCompleted(challengesCompleted + 1);

    setActiveChallenge({} as Challenge);
    resetChallenge();
  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExperience,
        challengesCompleted,
        levelUp,
        startNewChallenge,
        activeChallenge,
        hasChallenge,
        resetChallenge,
        experienceToNextLevel,
        completeChallenge,
        setIsLevelUpModalOpen,
      }}
    >
      {children}
      <LevelUpModal isOpen={isLevelUpModalOpen} />
    </ChallengesContext.Provider>
  );
}
