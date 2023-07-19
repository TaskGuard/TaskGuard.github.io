import { css } from "@emotion/react";
import { Fragment } from "react";
import { Helmet } from "react-helmet-async";

import { Benefits } from "./benefits";

export function Homepage(): JSX.Element {
  return (
    <Fragment>
      <Helmet>
        <title>TaskGuard</title>
        <meta name="description" content="Personal task management app." />
      </Helmet>
      <div css={css({ textAlign: "center", display: "flex", alignItems: "center", height: "100vh" })}>
        <div css={css({ margin: "auto" })}>
          <h1 css={css({ fontSize: 52, marginBottom: 10 })}>TaskGuard</h1>
          <p css={css({ fontSize: 18 })}>
            Personal <strong>task management</strong> app.
          </p>
          <Benefits />
        </div>
      </div>
    </Fragment>
  );
}
