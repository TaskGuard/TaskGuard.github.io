import stylex from "@stylexjs/stylex";
import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

import { colorStyle } from "../../../common/styles/colorStyles";
import { Color } from "../../../common/constants/colorConstants";

export type BlogEntryProps = PropsWithChildren<{
  name: string;
  link: string;
  image: string;
}>;

export function BlogEntry({ name, link, image, children }: BlogEntryProps): JSX.Element {
  return (
    <Link to={link} {...stylex.props(style.blogEntry, colorStyle.color(Color.White))}>
      <article>
        <img src={image} alt={name} {...stylex.props(style.image)} />
        <h2 {...stylex.props(style.title, colorStyle.color(Color.White))}>{name}</h2>
        <p {...stylex.props(colorStyle.color(Color.White))}>{children}</p>
      </article>
    </Link>
  );
}

const style = stylex.create({
  blogEntry: {
    textDecoration: "none",
  },
  image: {
    width: "100%",
    height: 300,
    objectFit: "cover",
    borderRadius: 3,
  },
  title: {
    fontSize: 22,
  },
});
