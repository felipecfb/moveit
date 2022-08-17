import { Button, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { CountdownContainer } from "./CountdownContainer";
import { CountdownNumber } from "./CountdownNumber";

let countdownTimeOut: NodeJS.Timeout;

export function Countdown() {
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
          w="100%"
          h="5rem"
          mt="2rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
          border="0"
          borderRadius="5px"
          bg="white"
          color="text"
          fontSize="1.25rem"
          fontWeight="600"
          transition=".2s"
          _hover={{
            bg: "white",
          }}
        >
          Ciclo encerrado
        </Button>
      ) : (
        <>
          {isActive ? (
            <Button
              type="button"
              w="100%"
              h="5rem"
              mt="2rem"
              display="flex"
              alignItems="center"
              justifyContent="center"
              border="0"
              borderRadius="5px"
              bg="white"
              color="title"
              fontSize="1.25rem"
              fontWeight="600"
              transition=".2s"
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
              w="100%"
              h="5rem"
              mt="2rem"
              display="flex"
              alignItems="center"
              justifyContent="center"
              border="0"
              borderRadius="5px"
              bg="blue"
              color="white"
              fontSize="1.25rem"
              fontWeight="600"
              transition=".2s"
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
