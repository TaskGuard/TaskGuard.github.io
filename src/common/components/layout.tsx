import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "./header";

export function Layout(): JSX.Element {
  return (
    <Fragment>
      <Header />
      <Outlet />
    </Fragment>
  );
}
