import { createContext, ReactNode, useState } from "react";

import challenges from "../../challenges.json";

interface ChallengesProviderProps {
  children: ReactNode;
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
  levelUp: () => void;
  startNewChallenge: () => void;
}

export const ChallengesContext = createContext({} as ChallengesContextProps);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  const [hasChallenge, setHasChallenge] = useState(false);

  const [activeChallenge, setActiveChallenge] = useState({} as Challenge);

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];
    setActiveChallenge(challenge);
    setHasChallenge(true);
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
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}
