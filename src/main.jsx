import React from "react";
import ReactDOM from "react-dom/client";
import User from "./pages/User";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <User />
    </ChakraProvider>
  </React.StrictMode>
);
