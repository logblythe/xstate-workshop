import { Button, VStack, Text } from "@chakra-ui/react";
import React from "react";
import DummyModal from "./DummyModal";

const InitialWithState = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <VStack w="100vw">
      <Text>Initial with useState</Text>
      <Button onClick={open} colorScheme="teal">
        Open Modal
      </Button>
      <DummyModal isOpen={isOpen} onClose={close} />
    </VStack>
  );
};

export default InitialWithState;
