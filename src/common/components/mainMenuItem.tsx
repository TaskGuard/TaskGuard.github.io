import { PropsWithChildren } from "react";
import { Link, useLocation } from "react-router-dom";
import stylex from "@stylexjs/stylex";

import { Color } from "../constants/colorConstants";

export type MainMenuItemProps = PropsWithChildren<{
  path: string;
}>;

export function MainMenuItem({ path, children }: MainMenuItemProps): JSX.Element {
  const { pathname } = useLocation();

  return (
    <Link to={path} {...stylex.props(style.menuItem(pathname === path))}>
      {children}
    </Link>
  );
}

const style = stylex.create({
  menuItem: (active: boolean) => ({
    textDecoration: "none",
    color: active ? Color.CaribbeanGreen : Color.White,
    padding: "0px 5px",
    ":hover": { opacity: 0.8 },
  }),
});
