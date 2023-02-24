import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  VStack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import DummyModal from "./DummyModal";

enum Action {
  OPEN,
  CLOSE,
  TOGGLE,
}

const reducer = (state: { isOpen: boolean }, action: { type: Action }) => {
  switch (action.type) {
    case Action.OPEN:
      return {
        isOpen: true,
      };
    case Action.CLOSE:
      return {
        isOpen: false,
      };
    case Action.TOGGLE:
      return {
        isOpen: !state.isOpen,
      };
    default:
      return state;
  }
};

const InitialWithReducer = () => {
  const [state, dispatch] = React.useReducer(reducer, { isOpen: false });

  const open = () => {
    dispatch({ type: Action.OPEN });
  };

  const close = () => {
    dispatch({ type: Action.CLOSE });
  };

  const toggle = () => {
    dispatch({ type: Action.TOGGLE });
  };

  return (
    <VStack w="100vw">
      <Text>Initial with useReducer</Text>
      <Button onClick={open} colorScheme="teal">
        Open Modal
      </Button>
      <DummyModal isOpen={state.isOpen} onClose={close} />
    </VStack>
  );
};

export default InitialWithReducer;
