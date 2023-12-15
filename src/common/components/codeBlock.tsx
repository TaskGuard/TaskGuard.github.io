import { css } from "@emotion/react";
import { PropsWithChildren } from "react";
import { Color } from "../constants/colorConstants";

export function CodeBlock({ children }: PropsWithChildren<{}>): JSX.Element {
  return (
    <code>
      <pre css={css({ background: Color.DarkGunmetal, padding: 10, borderRadius: 3 })}>{children}</pre>
    </code>
  );
}
