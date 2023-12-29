import { css } from "@emotion/react";
import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import { Color } from "../../../common/constants/colorConstants";

export type BlogEntryProps = PropsWithChildren<{
  name: string;
  link: string;
  image: string;
}>;

export function BlogEntry({ name, link, image, children }: BlogEntryProps): JSX.Element {
  return (
    <Link to={link} css={css({ textDecoration: "none", color: Color.White })}>
      <article>
        <img src={image} alt={name} css={css({ width: "100%", height: 300, objectFit: "cover", borderRadius: 3 })} />
        <h2 css={css({ color: Color.White, fontSize: 22 })}>{name}</h2>
        <p css={css({ color: Color.PhilippineGray })}>{children}</p>
      </article>
    </Link>
  );
}
