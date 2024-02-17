import { Fragment } from "react";
import stylex from "@stylexjs/stylex";

import { Container } from "../../common/components/container";
import { Head } from "../../common/components/head";
import { Heading } from "../../common/components/heading";
import { Page } from "../../common/components/page";
import { Color } from "../../common/constants/colorConstants";
import { Feature } from "./feature";
import { alignmentStyle } from "../../common/styles/alignmentStyles";

export function FeaturesPage(): JSX.Element {
  return (
    <Fragment>
      <Head title="Features" description="List of TaskGuard features" />
      <Page>
        <div {...stylex.props(style.features)}>
          <Heading level={1} {...stylex.props(alignmentStyle.center)}>
            Features
          </Heading>

          <Feature
            title="Projects"
            leftColumn={
              <p>
                <strong>Projects</strong> allow you to organize <strong>tasks</strong> into <strong>lists</strong> and easily move between
                them. Projects, lists and tasks can be freely named or reordered.
              </p>
            }
            rightColumn={<img src="./features/projects.jpg" alt="projects" {...stylex.props(style.image)} />}
          />

          <Feature
            title="Labels"
            leftColumn={<img src="./features/labels.jpg" alt="labels" {...stylex.props(style.image)} />}
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
                <img src="./features/calendar-menu.jpg" alt="calendar menu" {...stylex.props(style.image)} />
              </div>
            }
            rightColumn={
              <div>
                <p>
                  The <strong>calendar</strong> is divided into several categories - today, tomorrow, week, month and all planned tasks
                  section. The <strong>calendar</strong> shows all tasks that have a <strong>due date</strong> set.
                </p>
                <img src="./features/calendar.jpg" alt="calendar" {...stylex.props(style.image)} />
              </div>
            }
          />

          <Container>
            <h2 {...stylex.props(style.otherFeaturesHeading)}>Other features</h2>
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
        </div>
      </Page>
    </Fragment>
  );
}

const style = stylex.create({
  features: { height: "100%", overflowY: "auto", scrollSnapType: "y mandatory" },
  image: {
    maxWidth: "100%",
  },
  otherFeaturesHeading: { textAlign: "center", scrollSnapAlign: "start" },
});
