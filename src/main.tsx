import { MantineProvider } from "@mantine/core";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { GlobalStyles } from "./globalStyles";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider theme={{ colorScheme: "dark" }}>
      <BrowserRouter>
        <App />
        <GlobalStyles />
      </BrowserRouter>
    </MantineProvider>
  </React.StrictMode>,
);
