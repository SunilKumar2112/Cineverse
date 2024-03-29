import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

import "./index.css";
import Theme from "./components/Theme";


import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider } from "react-router-dom";
import Router from "./Router/Router";
import App from "./App";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={Theme}>
      <ColorModeScript initialColorMode={Theme.config.initialColorMode} />
      <QueryClientProvider client={queryClient}>
  <App/>
  <ReactQueryDevtools />
      </QueryClientProvider>
  
    </ChakraProvider>
  </React.StrictMode>
);
