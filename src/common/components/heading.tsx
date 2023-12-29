import { PropsWithChildren } from "react";

export type HeadingProps = PropsWithChildren<{
  level: 1 | 2 | 3;
  className?: string;
}>;

export function Heading({ level, className, children }: HeadingProps): JSX.Element {
  const HeadingTag: keyof JSX.IntrinsicElements = `h${level}`;

  return <HeadingTag className={className}>{children}</HeadingTag>;
}
