import { Fragment } from "react";
import { css } from "@emotion/react";
import { Group, Text } from "@mantine/core";
import { Link } from "react-router-dom";

import { Head } from "../../common/components/head";
import { Benefits } from "./benefits";
import { Color } from "../../common/constants/colorConstants";
import { icon } from "../../common/constants/iconConstants";
import { Button } from "../../common/components/button";
import { headerHeight } from "../../common/constants/layoutConstants";

export function Homepage(): JSX.Element {
  return (
    <Fragment>
      <Head description="Personal task management app." />

      <div
        css={css({
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          height: "100%",
          paddingTop: 20,
          position: "relative",
          background: Color.RichBlack,
        })}
      >
        <div
          css={css({
            width: "100%",
            height: `calc(100% - ${headerHeight}px)`,
            background: `url('./background.jpg')`,
            backgroundSize: "cover",
            backgroundPositionY: -headerHeight,
            position: "absolute",
            top: headerHeight,
            opacity: 0.18,
          })}
        />
        <div css={css({ margin: "auto", zIndex: 1 })}>
          <h1 css={css({ fontSize: 54, marginBottom: 10, marginTop: 45 })}>
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

          <Text c="dimmed" ta="center" mt="md" css={css({ marginTop: 45, paddingLeft: 5, paddingRight: 5 })}>
            Enjoy the app with modern UI while you take back control of your data and privacy.
          </Text>

          <Benefits />
        </div>
      </div>
    </Fragment>
  );
}
