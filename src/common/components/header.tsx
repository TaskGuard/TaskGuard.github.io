import { css } from "@emotion/react";
import { ActionIcon } from "@mantine/core";
import { Link } from "react-router-dom";
import stylex from "@stylexjs/stylex";

import { Color } from "../constants/colorConstants";
import { icon } from "../constants/iconConstants";
import { headerHeight } from "../constants/layoutConstants";
import { Icon } from "./icon";
import { Logo } from "./logo";
import { MainMenu } from "./mainMenu";
import { Container } from "./container";

export function Header(): JSX.Element {
  return (
    <div {...stylex.props(style.header(headerHeight))}>
      <Container>
        <div {...stylex.props(style.wrapper)}>
          <div css={css({ height: headerHeight, lineHeight: `${headerHeight}px` })}>
            <Link to="/" {...stylex.props(style.logoLink)}>
              <Logo width={35} height={25} />
            </Link>
          </div>

          <MainMenu />

          <div {...stylex.props(style.actionWrapper)}>
            <ActionIcon
              size="lg"
              component="a"
              href="https://github.com/orgs/TaskGuard/repositories"
              rel="noreferrer"
              target="_blank"
              color={Color.Transparent}
            >
              <Icon icon={icon.github} color={Color.White} />
            </ActionIcon>
          </div>
        </div>
      </Container>
    </div>
  );
}

const style = stylex.create({
  header: (headerHeight: number) => ({
    background: Color.RichBlack,
    height: headerHeight,
    width: "100%",
  }),
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoLink: {
    textDecoration: "none",
  },
  actionWrapper: {
    "@media (max-width: 767px)": {
      display: "none",
    },
  },
});
