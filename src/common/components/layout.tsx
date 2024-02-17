import { ReactNode } from "react";
import stylex from "@stylexjs/stylex";

export type LayoutProps = {
  header: ReactNode;
  content: ReactNode;
};

export function Layout({ header, content }: LayoutProps): JSX.Element {
  return (
    <div {...stylex.props(style.layout)}>
      <div {...stylex.props(style.headerWrapper)}>{header}</div>
      <div {...stylex.props(style.contentWrapper)}>{content}</div>
    </div>
  );
}

const style = stylex.create({
  layout: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    height: "100%",
    width: "100vw",
  },
  headerWrapper: { width: "100%" },
  contentWrapper: { flexGrow: 1, overflow: "auto", height: "100%", width: "100%" },
});
