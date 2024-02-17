import { PropsWithChildren } from "react";
import { MantineProvider } from "@mantine/core";
import { HelmetProvider } from "react-helmet-async";

export function Providers({ children }: PropsWithChildren): JSX.Element {
  return (
    <HelmetProvider>
      <MantineProvider defaultColorScheme="dark">{children}</MantineProvider>
    </HelmetProvider>
  );
}
