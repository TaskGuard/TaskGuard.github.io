import { PropsWithChildren } from "react";
import { ThemeProvider } from "@emotion/react";
import { MantineProvider } from "@mantine/core";
import { HelmetProvider } from "react-helmet-async";

import { darkTheme } from "./theme";

export function Providers({ children }: PropsWithChildren): JSX.Element {
  return (
    <HelmetProvider>
      <MantineProvider defaultColorScheme="dark">
        <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>
      </MantineProvider>
    </HelmetProvider>
  );
}
