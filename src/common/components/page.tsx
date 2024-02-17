import { PropsWithChildren } from "react";
import stylex from "@stylexjs/stylex";

export function Page({ children }: PropsWithChildren<unknown>): JSX.Element {
  return <div {...stylex.props(style.page)}>{children}</div>;
}

const style = stylex.create({
  page: {
    paddingTop: 10,
    height: "100%",
  },
});
