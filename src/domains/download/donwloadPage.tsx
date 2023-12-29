import { Fragment } from "react";
import { Badge } from "@mantine/core";

import { Container } from "../../common/components/container";
import { Page } from "../../common/components/page";
import { Icon } from "../../common/components/icon";
import { icon } from "../../common/constants/iconConstants";
import { Head } from "../../common/components/head";
import { Heading } from "../../common/components/heading";

export function DownloadPage(): JSX.Element {
  return (
    <Fragment>
      <Head title="Downloads" description="Download TaskGuard apps" />
      <Page>
        <Container>
          <Heading level={1}>Download</Heading>
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
