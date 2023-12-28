import { css } from "@emotion/react";
import { PropsWithChildren } from "react";
import { Link, useLocation } from "react-router-dom";

import { Color } from "../constants/colorConstants";

export type MainMenuItemProps = PropsWithChildren<{
  path: string;
}>;

export function MainMenuItem({ path, children }: MainMenuItemProps): JSX.Element {
  const { pathname } = useLocation();

  return (
    <Link to={path} css={css({ textDecoration: "none", color: pathname === path ? Color.CaribbeanGreen : Color.White })}>
      {children}
    </Link>
  );
}
