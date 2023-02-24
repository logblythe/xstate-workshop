import React from "react";
import { Button, VStack, Text } from "@chakra-ui/react";
import DummyModal from "./DummyModal";

enum ModalState {
  closed = "closed",
  closing = "closing",
  open = "open",
}

//Instead of closing immediately, need to animate for 500 secs and then close

const WithState = () => {
  const [modalState, setModalState] = React.useState(ModalState.closed);

  React.useEffect(() => {
    if (modalState === ModalState.closing) {
      const closeModalTimeout = setTimeout(() => {
        setModalState(ModalState.closed);
      }, 2000);
      return () => {
        clearTimeout(closeModalTimeout);
      };
    }
  }, [modalState]);

  const open = () => {
    setModalState(ModalState.open);
  };

  const close = () => {
    setModalState(ModalState.closing);
  };

  const toggle = () => {
    if (modalState === ModalState.closed) {
      setModalState(ModalState.open);
    } else if (modalState === ModalState.open) {
      setModalState(ModalState.closing);
    }
  };

  return (
    <VStack w="100vw">
      <Text>After refactoring with useState</Text>
      <Button onClick={open} colorScheme="teal">
        Open Modal
      </Button>
      <DummyModal modalState={modalState} onClose={close} />
    </VStack>
  );
};

export default WithState;
