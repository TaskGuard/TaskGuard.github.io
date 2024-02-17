import { Fragment } from "react";
import { Link } from "react-router-dom";
import stylex from "@stylexjs/stylex";

import { Head } from "../../common/components/head";
import { Benefits } from "./benefits";
import { Color } from "../../common/constants/colorConstants";
import { icon } from "../../common/constants/iconConstants";
import { Button } from "../../common/components/button";
import { homepageStyle } from "./homePageStyles";
import { Container } from "../../common/components/container";

export function Homepage(): JSX.Element {
  return (
    <Fragment>
      <Head description="Personal task management app." />

      <div {...stylex.props(homepageStyle.homepage(Color.RichBlack))}>
        <div {...stylex.props(homepageStyle.backgroundImage)} />
        <div {...stylex.props(homepageStyle.content)}>
          <Container>
            <h1 {...stylex.props(homepageStyle.heading)}>
              Task<span {...stylex.props(homepageStyle.headingHighlight(Color.CaribbeanGreen))}>Guard</span>
            </h1>
            <p {...stylex.props(homepageStyle.subtitle)}>
              Personal <strong>task management</strong> app.
            </p>

            <p {...stylex.props(homepageStyle.note)}>Enjoy the app with modern UI while you take back control of your data and privacy.</p>

            <div {...stylex.props(homepageStyle.primaryButton)}>
              <Link to={"https://app.taskguard.org/"} target="_blank">
                <Button variant="primary" size="lg" iconLeft={icon.rocket}>
                  Get Started
                </Button>
              </Link>
            </div>

            <Benefits />
          </Container>
        </div>
      </div>
    </Fragment>
  );
}
