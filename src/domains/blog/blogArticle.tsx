import { css } from "@emotion/react";
import { Fragment, PropsWithChildren, ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import { Page } from "../../common/components/page";

export type BlogArticleProps = PropsWithChildren<{
  title: string;
  image: string;
  header: ReactNode[];
  footer: ReactNode;
}>;

export function BlogArticle({ title, image, header, children, footer }: BlogArticleProps): JSX.Element {
  return (
    <Fragment>
      <Helmet>
        <title>{title} | TaskGuard</title>
        <meta name="description" content={title} />
      </Helmet>
      <Page>
        <article>
          <header>
            <img src={image} alt={title} css={css({ width: "100%" })} />
            <h1 css={css({ fontSize: 42 })}>{title}</h1>
            {header}
          </header>

          {children}

          <footer>{footer}</footer>
        </article>
      </Page>
    </Fragment>
  );
}
