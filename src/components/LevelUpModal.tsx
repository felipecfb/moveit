import {
  Button,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useContext } from "react";
import { ChallengesContext } from "../context/ChallengesContext";

interface LevelUpModalProps {
  isOpen: boolean;
}

export function LevelUpModal({ isOpen }: LevelUpModalProps) {
  const { onClose } = useDisclosure();

  const { level, setIsLevelUpModalOpen } = useContext(ChallengesContext);
  return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          bg="white"
          w="100%"
          maxW="400px"
          py="2rem"
          px="3rem"
          borderRadius="5px"
          boxShadow="0 0 60px rgba(0, 0, 0, 0.05)"
          textAlign="center"
        >
          <Button type="button" onClick={() => setIsLevelUpModalOpen(false)} bg="transparent" border="0" position="absolute" right="5px" top="5px">
              <Image src="/icons/close.svg" alt="Close icon" />
          </Button>
          <ModalHeader
            fontSize="8.75rem"
            fontWeight="600"
            color="blue"
            bg="url('icons/levelup.svg') no-repeat center"
            bgSize="contain"
          >
            {level}
          </ModalHeader>
          <ModalBody>
            <Text fontSize="2.25rem" color="title">
              Parabéns
            </Text>
            <Text fontSize="1.25rem" color="text" mt="0.25rem">
              Você alcançou um novo level.
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
  );
}
