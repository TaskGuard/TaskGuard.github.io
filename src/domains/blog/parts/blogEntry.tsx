import { css } from "@emotion/react";
import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import { Color } from "../../../common/constants/colorConstants";

export type BlogEntryProps = PropsWithChildren<{
  name: string;
  link: string;
}>;

export function BlogEntry({ name, link, children }: BlogEntryProps): JSX.Element {
  return (
    <Link to={link} css={css({ textDecoration: "none", color: Color.White })}>
      <article>
        <h2 css={css({ color: Color.CaribbeanGreen })}>{name}</h2>
        <p>{children}</p>
      </article>
    </Link>
  );
}
