import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import InitialWithMachine from "./01-initial-state/use-machine";
import InitialWithReducer from "./01-initial-state/use-reducer";
import InitialWithState from "./01-initial-state/use-state";
import WithMachine from "./02-after-refactor/use-machine";
import WithReducer from "./02-after-refactor/use-reducer";
import WithState from "./02-after-refactor/use-state";
import "./index.css";

const router = createBrowserRouter([
  { path: "/", element: <div>hello state machine</div> },
  {
    path: "/initial/with-state",
    element: <InitialWithState />,
  },
  {
    path: "/initial/with-reducer",
    element: <InitialWithReducer />,
  },
  {
    path: "/initial/with-machine",
    element: <InitialWithMachine />,
  },
  {
    path: "/refactored/with-state",
    element: <WithState />,
  },
  {
    path: "/refactored/with-reducer",
    element: <WithReducer />,
  },
  {
    path: "/refactored/with-machine",
    element: <WithMachine />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
