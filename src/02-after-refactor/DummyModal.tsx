import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  Center,
  Spinner,
  ModalBody,
  ModalFooter,
  Button,
} from "@chakra-ui/react";
import { ModalState } from "./ModalStateEnum";

interface IProps {
  modalState: ModalState;
  onClose: VoidFunction;
}

const DummyModal = ({ modalState, onClose }: IProps) => {
  return (
    <Modal isOpen={modalState !== ModalState.closed} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>XState</ModalHeader>
        <ModalCloseButton />
        {modalState === ModalState.closing ? (
          <Center>
            <Spinner />
          </Center>
        ) : null}
        <ModalBody>
          Statecharts are a formalism for modeling stateful, reactive systems.
          This is useful for declaratively describing the behavior of your
          application, from the individual components to the overall application
          logic.
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant="ghost" onClick={onClose}>
            Secondary Action
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DummyModal;
