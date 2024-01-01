import "@emotion/react";

import { ThemeDefinition } from "./theme";

declare module "@emotion/react" {
  export type Theme = ThemeDefinition;
}
