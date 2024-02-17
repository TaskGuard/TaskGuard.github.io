import { Fragment } from "react";
import stylex from "@stylexjs/stylex";
import { Link } from "react-router-dom";

import { Container } from "../../common/components/container";
import { Page } from "../../common/components/page";
import { Icon } from "../../common/components/icon";
import { icon } from "../../common/constants/iconConstants";
import { Head } from "../../common/components/head";
import { Heading } from "../../common/components/heading";
import { Button } from "../../common/components/button";
import { alignmentStyle } from "../../common/styles/alignmentStyles";

export function DownloadPage(): JSX.Element {
  return (
    <Fragment>
      <Head title="Downloads" description="Download TaskGuard apps" />
      <Page>
        <Container>
          <div {...stylex.props(alignmentStyle.center)}>
            <Heading level={1}>Download</Heading>

            <Link to={"https://app.taskguard.org/"} target="_blank">
              <Button variant="primary" size="lg" iconLeft={icon.rocket}>
                Open in browser
              </Button>
            </Link>

            <div {...stylex.props(style.platforms)}>
              <Icon icon={icon.chrome} marginRight={10} size="lg" />
              <Icon icon={icon.edge} marginRight={10} size="lg" />
              <Icon icon={icon.safari} marginRight={10} size="lg" />
              <Icon icon={icon.windows} marginRight={10} size="lg" />
              <Icon icon={icon.apple} marginRight={10} size="lg" />
              <Icon icon={icon.linux} marginRight={10} size="lg" />
            </div>
          </div>
        </Container>
      </Page>
    </Fragment>
  );
}

const style = stylex.create({
  platforms: {
    marginTop: 15,
  },
});
