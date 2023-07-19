import { faAndroid, faWindows } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Badge } from "@mantine/core";
import { Fragment } from "react";
import { Helmet } from "react-helmet-async";

import { Page } from "../../common/components/page";

export function DownloadPage(): JSX.Element {
  return (
    <Fragment>
      <Helmet>
        <title>Downloads | TaskGuard</title>
        <meta name="description" content="Download TaskGuard apps" />
      </Helmet>
      <Page>
        <h1>Download</h1>
        <FontAwesomeIcon icon={faAndroid} /> Android{" "}
        <Badge variant="filled" size="md" styles={{ root: { background: "#00cb83" } }}>
          Coming soon
        </Badge>
        <br />
        <FontAwesomeIcon icon={faWindows} /> Windows{" "}
        <Badge variant="filled" size="md" styles={{ root: { background: "#00cb83" } }}>
          Coming soon
        </Badge>
      </Page>
    </Fragment>
  );
}
