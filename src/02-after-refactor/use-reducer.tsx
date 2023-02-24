import React from "react";
import { Button, VStack, Text } from "@chakra-ui/react";
import DummyModal from "./DummyModal";
import { ModalState } from "./ModalStateEnum";

enum Action {
  OPEN,
  CLOSING,
  ANIMATION_FINISHED,
  CLOSE,
  TOGGLE,
}

const reducer = (
  state: { modalState: ModalState },
  action: { type: Action }
) => {
  switch (action.type) {
    case Action.OPEN:
      return {
        modalState: ModalState.open,
      };
    case Action.CLOSE:
      return {
        modalState: ModalState.closing,
      };
    case Action.ANIMATION_FINISHED: {
      return {
        modalState: ModalState.closed,
      };
    }
    case Action.TOGGLE: {
      switch (state.modalState) {
        case ModalState.open: {
          return {
            modalState: ModalState.closing,
          };
        }
        case ModalState.closed: {
          return {
            modalState: ModalState.open,
          };
        }
      }
    }
    default:
      return state;
  }
};

const WithReducer = () => {
  const [state, dispatch] = React.useReducer(reducer, {
    modalState: ModalState.closed,
  });

  React.useEffect(() => {
    if (state.modalState === ModalState.closing) {
      const closeModalTimeout = setTimeout(() => {
        dispatch({ type: Action.ANIMATION_FINISHED });
      }, 2000);
      return () => {
        clearTimeout(closeModalTimeout);
      };
    }
  }, [state.modalState]);

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
      <Text>After refactoring with useReducer</Text>
      <Button onClick={open} colorScheme="teal">
        Open Modal
      </Button>
      <DummyModal modalState={state.modalState} onClose={close} />
    </VStack>
  );
};

export default WithReducer;
