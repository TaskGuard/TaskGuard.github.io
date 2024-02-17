import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "@mantine/core/styles.css";

import App from "./App";
import { GlobalStyles } from "./globalStyles";
import { Providers } from "./providers";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Providers>
      <BrowserRouter>
        <App />
        <GlobalStyles />
      </BrowserRouter>
    </Providers>
  </React.StrictMode>,
);
