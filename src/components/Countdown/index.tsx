import { Flex, Image, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { CountdownContext } from "../../context/CountdownContext";
import { Button } from "../Button";
import { CountdownContainer } from "./CountdownContainer";
import { CountdownNumber } from "./CountdownNumber";

export function Countdown() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown,
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

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
