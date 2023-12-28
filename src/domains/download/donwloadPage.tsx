import { Fragment } from "react";
import { Badge } from "@mantine/core";
import { Helmet } from "react-helmet-async";

import { Container } from "../../common/components/container";
import { Page } from "../../common/components/page";
import { Icon } from "../../common/components/icon";
import { icon } from "../../common/constants/iconConstants";

export function DownloadPage(): JSX.Element {
  return (
    <Fragment>
      <Helmet>
        <title>Downloads | TaskGuard</title>
        <meta name="description" content="Download TaskGuard apps" />
      </Helmet>
      <Page>
        <Container>
          <h1>Download</h1>
          <Icon icon={icon.android} /> Android{" "}
          <Badge variant="filled" size="md" styles={{ root: { background: "#00cb83" } }}>
            Coming soon
          </Badge>
          <br />
          <Icon icon={icon.windows} /> Windows{" "}
          <Badge variant="filled" size="md" styles={{ root: { background: "#00cb83" } }}>
            Coming soon
          </Badge>
        </Container>
      </Page>
    </Fragment>
  );
}
