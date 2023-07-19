import { Fragment } from "react";
import { Helmet } from "react-helmet-async";

import { Page } from "../../common/components/page";

export function FeaturesPage(): JSX.Element {
  return (
    <Fragment>
      <Helmet>
        <title>Features | TaskGuard</title>
        <meta name="description" content="List of TaskGuard features" />
      </Helmet>
      <Page>
        <h1>Features</h1>

        <ul>
          <li>projects</li>
          <li>lists</li>
          <li>subtasks</li>
          <li>labels</li>
          <li>due date notifications</li>
          <li>repeated tasks</li>
          <li>task priority</li>
          <li>calendar</li>
          <li>multi device support</li>
          <li>backup</li>
          <li>activity log</li>
          <li>insights</li>
        </ul>
      </Page>
    </Fragment>
  );
}
