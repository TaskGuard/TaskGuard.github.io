import { PropsWithChildren } from "react";
import stylex from "@stylexjs/stylex";

export function CodeBlock({ children }: PropsWithChildren): JSX.Element {
  return (
    <code>
      <pre {...stylex.props(style.codeBlock)}>{children}</pre>
    </code>
  );
}

const style = stylex.create({
  codeBlock: {
    background: "var(--color-darkGunmetal)",
    padding: 10,
    borderRadius: 3,
  },
});
