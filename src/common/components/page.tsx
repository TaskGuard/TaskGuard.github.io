import { css } from "@emotion/react";
import { PropsWithChildren } from "react";

import { headerHeight } from "../constants/layoutConstants";

export function Page({ children }: PropsWithChildren<unknown>): JSX.Element {
  return <div css={css({ paddingTop: headerHeight + 10, height: "100%" })}>{children}</div>;
}
