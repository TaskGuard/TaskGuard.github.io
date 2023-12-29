import { MantineProvider } from "@mantine/core";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import App from "./App";
import { GlobalStyles } from "./globalStyles";
import { ThemeProvider } from "@emotion/react";
import { darkTheme } from "./theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <MantineProvider theme={{ colorScheme: "dark" }}>
        <ThemeProvider theme={darkTheme}>
          <BrowserRouter>
            <App />
            <GlobalStyles />
          </BrowserRouter>
        </ThemeProvider>
      </MantineProvider>
    </HelmetProvider>
  </React.StrictMode>,
);
