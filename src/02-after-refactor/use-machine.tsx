import { Button, Text, VStack } from "@chakra-ui/react";
import { useMachine } from "@xstate/react";
import { createMachine } from "xstate";
import DummyModal from "./DummyModal";
import { ModalState } from "./ModalStateEnum";

const machine =
  /** @xstate-layout N4IgpgJg5mDOIC5QFsD2ECGAbAshgxgBYCWAdmAHT5aqyQDEA8gAoCiAcgNoAMAuoqAAOtYgBdiqUgJAAPRAEYAbAE4KAJgDsAZgAsAVm5a1irYsXy9AGhABPRFq3cKegBwPTD7mpfK9AXz9rNExcAhJyKho6CHoAFUYAcQSAGVYefiQQYVgxCSlMuQQlVU1dAyMTMwtrOwQ1PXl1A24WtR1lF29uf0CQYOw8IjJKUQAnDFIc8UkyKHoZWFEMUUoMADMV0YAKZoBKen7QoYixiam82fTpbNzJaUKtTop5bgsXRRd5HRMdHRrET7OFotZRaDTfHSfLQBILoAZhYYUVCCMCkOKJFJpPjXETTfKgB5PF5vD5fH5-WyINTcFwUNwOby-XQufSKGF9OFHcKUZGo+gAYWSjAAyliMkJcXl7goNLT3hp5B15Jp6sp-nUWhQNM15EYHBoNIYNAFeqR0HBpIdBtycec7gVEABaRTqx16CjKT1e73e6G9K0IiLUWiQW23fGyRA6NTq5SNPTNbjKX6KQ3aHqwkLWxGnSbh2ZhvHShANWm67yKlw+LTJlzqtTyRr03S-QyN9zsgPHHkoiM3IsOupx5yGxx6VPtD4aetJijuFs6Nu6v0BIA */
  createMachine({
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

      closing: {
        after: {
          2000: "closed",
        },
      },

      open: {
        on: {
          TOGGLE: "closing",
          CLOSE: "closing",
        },
      },
    },
  });

const WithMachine = () => {
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
      <Text>After refactoring with useMachine</Text>
      <Button onClick={open} colorScheme="teal">
        Open Modal
      </Button>
      <DummyModal modalState={state.value as ModalState} onClose={close} />
    </VStack>
  );
};

export default WithMachine;
