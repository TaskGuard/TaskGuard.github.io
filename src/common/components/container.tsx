import { PropsWithChildren } from "react";
import stylex from "@stylexjs/stylex";

export function Container({ children }: PropsWithChildren): JSX.Element {
  return <div {...stylex.props(style.container)}>{children}</div>;
}

const style = stylex.create({
  container: {
    maxWidth: 1200,
    margin: "auto",
    paddingLeft: "1rem",
    paddingRight: "1rem",
  },
});
