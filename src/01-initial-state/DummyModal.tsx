import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from "@chakra-ui/react";

interface IProps {
  isOpen: boolean;
  onClose: VoidFunction;
}

const DummyModal = ({ isOpen, onClose }: IProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>XState</ModalHeader>
        <ModalCloseButton />
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
