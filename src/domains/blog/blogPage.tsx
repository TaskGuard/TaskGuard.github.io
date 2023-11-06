import { Fragment } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Page } from "../../common/components/page";

export function BlogPage(): JSX.Element {
  return (
    <Fragment>
      <Helmet>
        <title>Blog | TaskGuard</title>
        <meta name="description" content="TaskGuard blog" />
      </Helmet>
      <Page>
        <h1>Blog</h1>
        <Link to="/blog/how-to-distribute-your-apps">
          <article>How to Distribute Your Apps</article>
        </Link>
      </Page>
    </Fragment>
  );
}
