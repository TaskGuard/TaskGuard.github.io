import { Fragment, PropsWithChildren, ReactNode } from "react";
import stylex from "@stylexjs/stylex";

import { Container } from "../../common/components/container";
import { Head } from "../../common/components/head";
import { Page } from "../../common/components/page";
import { Color } from "../../common/constants/colorConstants";
import { colorStyle } from "../../common/styles/colorStyles";

export type BlogArticleProps = PropsWithChildren<{
  title: string;
  image: string;
  header: ReactNode[];
  footer: ReactNode;
}>;

export function BlogArticle({ title, image, header, children, footer }: BlogArticleProps): JSX.Element {
  return (
    <Fragment>
      <Head title={title} description={title} />

      <Page>
        <Container>
          <article {...stylex.props(style.blogArticle, colorStyle.color(Color.SpanishGray))}>
            <header>
              <img src={image} alt={title} {...stylex.props(style.image)} />
              <h1 {...stylex.props(style.title, colorStyle.color(Color.White))}>{title}</h1>
              {header}
            </header>

            {children}

            <footer>{footer}</footer>
          </article>
        </Container>
      </Page>
    </Fragment>
  );
}

const style = stylex.create({
  blogArticle: {
    fontSize: 18,
    /*
    h2: { color: color.white },
    h3: { color: color.white },
    */
  },
  image: {
    width: "100%",
  },
  title: {
    fontSize: 48,
    fontWeight: "bolder",
  },
});
