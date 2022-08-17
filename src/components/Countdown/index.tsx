import { Flex, Image, Text } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { ChallengesContext } from "../../context/ChallengesContext";
import { Button } from "../Button";
import { CountdownContainer } from "./CountdownContainer";
import { CountdownNumber } from "./CountdownNumber";

let countdownTimeOut: NodeJS.Timeout;

export function Countdown() {
  const { startNewChallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeOut);
    setIsActive(false);
    setTime(0.1 * 60);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeOut = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);

  return (
    <Flex direction="column">
      <Flex align="center" fontFamily="Rajdhani" fontWeight="600" color="title">
        <CountdownContainer>
          <CountdownNumber title={minuteLeft} borderRight="1px solid #F0F1F3" />
          <CountdownNumber
            title={minuteRight}
            borderRight="1px solid #F0F1F3"
          />
        </CountdownContainer>
        <Text fontSize="6.25rem" mx="0.5rem">
          :
        </Text>
        <CountdownContainer>
          <CountdownNumber title={secondLeft} borderRight="1px solid #F0F1F3" />
          <CountdownNumber
            title={secondRight}
            borderRight="1px solid #F0F1F3"
          />
        </CountdownContainer>
      </Flex>

      {hasFinished ? (
        <Button
          disabled
          bg="white"
          color="text"
          borderBottom="4px solid green"
          _hover={{
            bg: "white",
          }}
        >
          Ciclo encerrado
          <Image ml="4" src="/icons/check.svg" />
        </Button>
      ) : (
        <>
          {isActive ? (
            <Button
              type="button"
              bg="white"
              color="title"
              _hover={{
                bg: "red",
                color: "white",
              }}
              onClick={resetCountdown}
            >
              Abandonar ciclo
            </Button>
          ) : (
            <Button
              type="button"
              bg="blue"
              color="white"
              _hover={{
                bg: "blue_dark",
              }}
              onClick={startCountdown}
            >
              Iniciar um ciclo
            </Button>
          )}
        </>
      )}
    </Flex>
  );
}
