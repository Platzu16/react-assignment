import React from "react";
import ReactDOM from "react-dom/client";
import User from "./pages/UserPage";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <User />
  </ChakraProvider>
);
