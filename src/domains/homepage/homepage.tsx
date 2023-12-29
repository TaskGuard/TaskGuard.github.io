import { Fragment } from "react";
import { css } from "@emotion/react";
import { Group } from "@mantine/core";
import { Link } from "react-router-dom";

import { Head } from "../../common/components/head";
import { Benefits } from "./benefits";
import { Color } from "../../common/constants/colorConstants";
import { icon } from "../../common/constants/iconConstants";
import { Button } from "../../common/components/button";

export function Homepage(): JSX.Element {
  return (
    <Fragment>
      <Head description="Personal task management app." />

      <div css={css({ textAlign: "center", display: "flex", alignItems: "center", height: "100vh" })}>
        <div css={css({ margin: "auto" })}>
          <h1 css={css({ fontSize: 54, marginBottom: 10 })}>
            Task<span css={css({ color: Color.CaribbeanGreen })}>Guard</span>
          </h1>
          <p css={css({ fontSize: 18 })}>
            Personal <strong>task management</strong> app.
          </p>

          <Group position="center" css={css({ marginTop: 30 })}>
            <Link to={"https://app.taskguard.org/"} target="_blank">
              <Button variant="primary" size="lg" iconLeft={icon.rocket}>
                Get Started
              </Button>
            </Link>
          </Group>

          <Benefits />
        </div>
      </div>
    </Fragment>
  );
}
