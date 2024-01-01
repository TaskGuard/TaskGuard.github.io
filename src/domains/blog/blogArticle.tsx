import { Fragment, PropsWithChildren, ReactNode } from "react";
import { css } from "@emotion/react";

import { Container } from "../../common/components/container";
import { Head } from "../../common/components/head";
import { Page } from "../../common/components/page";
import { Color } from "../../common/constants/colorConstants";

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
          <article css={css({ fontSize: 18, color: Color.SpanishGray, h2: { color: Color.White }, h3: { color: Color.White } })}>
            <header>
              <img src={image} alt={title} css={css({ width: "100%" })} />
              <h1 css={css({ fontSize: 48, fontWeight: "bolder", color: Color.White })}>{title}</h1>
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
