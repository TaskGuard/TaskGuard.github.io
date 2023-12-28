import { css } from "@emotion/react";
import { Fragment } from "react";

import { Container } from "../../common/components/container";
import { Head } from "../../common/components/head";
import { Page } from "../../common/components/page";
import { Color } from "../../common/constants/colorConstants";
import { Feature } from "./feature";

export function FeaturesPage(): JSX.Element {
  return (
    <Fragment>
      <Head title="Features" description="List of TaskGuard features" />
      <Page>
        <h1 css={css({ textAlign: "center" })}>Features</h1>

        <Feature
          title="Projects"
          leftColumn={
            <p>
              <strong>Projects</strong> allow you to organize <strong>tasks</strong> into <strong>lists</strong> and easily move between
              them. Projects, lists and tasks can be freely named or reordered.
            </p>
          }
          rightColumn={<img src="./features/projects.jpg" alt="projects" css={css({ maxWidth: "100%" })} />}
        />

        <Feature
          title="Labels"
          leftColumn={<img src="./features/labels.jpg" alt="labels" css={css({ maxWidth: "100%" })} />}
          rightColumn={
            <p>
              Each <strong>task</strong> can have multiple <strong>labels</strong> and multiple <strong>tasks</strong> can have the same{" "}
              <strong>label</strong>. Task labels are informative and allow you to filter out tasks with the same label.
            </p>
          }
          background={Color.ChineseBlack}
        />

        <Feature
          title="Calendar"
          leftColumn={
            <div>
              <img src="./features/calendar-menu.jpg" alt="calendar menu" css={css({ maxWidth: "100%" })} />
            </div>
          }
          rightColumn={
            <div>
              <p>
                The <strong>calendar</strong> is divided into several categories - today, tomorrow, week, month and all planned tasks
                section. The <strong>calendar</strong> shows all tasks that have a <strong>due date</strong> set.
              </p>
              <img src="./features/calendar.jpg" alt="calendar" css={css({ maxWidth: "100%" })} />
            </div>
          }
        />

        <Container>
          <h2 css={css({ textAlign: "center" })}>Other features</h2>
          <ul>
            <li>subtasks</li>
            <li>search</li>
            <li>filters</li>
            <li>due date notifications</li>
            <li>repeated tasks</li>
            <li>task priority</li>
            <li>multi device support</li>
            <li>backup</li>
            <li>activity log</li>
            <li>insights</li>
          </ul>
        </Container>
      </Page>
    </Fragment>
  );
}
