import { Fragment } from "react";
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

import { Container } from "../../common/components/container";
import { Page } from "../../common/components/page";
import { Icon } from "../../common/components/icon";
import { icon } from "../../common/constants/iconConstants";
import { Head } from "../../common/components/head";
import { Heading } from "../../common/components/heading";
import { Button } from "../../common/components/button";

export function DownloadPage(): JSX.Element {
  return (
    <Fragment>
      <Head title="Downloads" description="Download TaskGuard apps" />
      <Page>
        <Container>
          <div css={css({ textAlign: "center" })}>
            <Heading level={1}>Download</Heading>

            <Link to={"https://app.taskguard.org/"} target="_blank">
              <Button variant="primary" size="lg" iconLeft={icon.rocket}>
                Open in browser
              </Button>
            </Link>

            <div css={css({ marginTop: 15 })}>
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
