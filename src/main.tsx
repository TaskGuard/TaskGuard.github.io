import { MantineProvider } from "@mantine/core";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import App from "./App";
import { GlobalStyles } from "./globalStyles";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <MantineProvider theme={{ colorScheme: "dark" }}>
        <BrowserRouter>
          <App />
          <GlobalStyles />
        </BrowserRouter>
      </MantineProvider>
    </HelmetProvider>
  </React.StrictMode>,
);
