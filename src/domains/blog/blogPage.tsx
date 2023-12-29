import { Fragment } from "react";
import { Col } from "../../common/components/col";

import { Container } from "../../common/components/container";
import { Head } from "../../common/components/head";
import { Heading } from "../../common/components/heading";
import { Page } from "../../common/components/page";
import { Row } from "../../common/components/row";
import { BlogRoute } from "./blogRoutes";
import { BlogEntry } from "./parts/blogEntry";

export function BlogPage(): JSX.Element {
  return (
    <Fragment>
      <Head title="Blog" description="TaskGuard blog" />
      <Page>
        <Container>
          <Heading level={1}>Blog</Heading>

          <Row>
            <Col xs={12} sm={6}>
              <BlogEntry
                name="The Hidden Risks Of External Dependencies"
                image="/blog/hidden-risks-of-external-dependencies.jpg"
                link={BlogRoute.HiddenRisksOfExternalDependencies}
              >
                Discover how external dependencies can present challenges in compatibility, security, and maintenance.
              </BlogEntry>
            </Col>
            <Col xs={12} sm={6}>
              <BlogEntry
                name="How to Distribute Your Apps"
                image="/blog/how-to-distribute-your-apps.jpg"
                link={BlogRoute.HowToDistributeYourApps}
              >
                If you decide to develop your own application, sooner or later, you will face the challenge of choosing the right
                technologies and methods to reach your users.
              </BlogEntry>
            </Col>
          </Row>
        </Container>
      </Page>
    </Fragment>
  );
}
