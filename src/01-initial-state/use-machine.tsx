import { Button, VStack, Text } from "@chakra-ui/react";
import { useMachine } from "@xstate/react";
import { createMachine } from "xstate";
import DummyModal from "./DummyModal";

const machine = createMachine({
  id: "modalMachine",
  initial: "closed",
  states: {
    closed: {
      on: {
        OPEN: {
          target: "open",
        },
        TOGGLE: "open",
      },
    },
    open: {
      on: {
        TOGGLE: "closed",
        CLOSE: "closed",
      },
    },
  },
});

const InitialWithMachine = () => {
  const [state, send] = useMachine(machine);

  const open = () => {
    send({ type: "OPEN" });
  };

  const close = () => {
    send({ type: "CLOSE" });
  };

  const toggle = () => {
    send({ type: "TOGGLE" });
  };

  return (
    <VStack w="100vw">
      <Text>Initial with useMachine</Text>
      <Button onClick={open} colorScheme="teal">
        Open Modal
      </Button>
      <DummyModal isOpen={state.value !== "closed"} onClose={close} />
    </VStack>
  );
};

export default InitialWithMachine;
