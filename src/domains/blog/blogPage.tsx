import { Fragment } from "react";
import { Helmet } from "react-helmet-async";
import { Container } from "../../common/components/container";

import { Page } from "../../common/components/page";
import { BlogRoute } from "./blogRoutes";
import { BlogEntry } from "./parts/blogEntry";

export function BlogPage(): JSX.Element {
  return (
    <Fragment>
      <Helmet>
        <title>Blog | TaskGuard</title>
        <meta name="description" content="TaskGuard blog" />
      </Helmet>
      <Page>
        <Container>
          <h1>Blog</h1>

          <BlogEntry name="The Hidden Risks Of External Dependencies" link={BlogRoute.HiddenRisksOfExternalDependencies}>
            Discover how external dependencies can present challenges in compatibility, security, and maintenance.
          </BlogEntry>

          <BlogEntry name="How to Distribute Your Apps" link={BlogRoute.HowToDistributeYourApps}>
            If you decide to develop your own application, sooner or later, you will face the challenge of choosing the right technologies
            and methods to reach your users. There are several approaches, each with its own set of advantages and disadvantages
          </BlogEntry>
        </Container>
      </Page>
    </Fragment>
  );
}
