import { css } from "@emotion/react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Header as MantineHeader, Container, Group, ActionIcon } from "@mantine/core";
import { Link } from "react-router-dom";

import { Color } from "../constants/colorConstants";
import { headerHeight } from "../constants/layoutConstants";
import { Logo } from "./logo";

export function Header(): JSX.Element {
  return (
    <MantineHeader height={headerHeight} sx={{ borderBottom: 0, position: "fixed" }}>
      <Container
        fluid
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Group h={headerHeight}>
          <Link to="/" css={css({ textDecoration: "none" })}>
            <Logo width={35} height={25} />
          </Link>
        </Group>

        <Group spacing={10} h={headerHeight}>
          <Link to="/download" css={css({ textDecoration: "none", color: Color.White })}>
            Download
          </Link>
          <Link to="/features" css={css({ textDecoration: "none", color: Color.White })}>
            Features
          </Link>
        </Group>

        <Group
          spacing={0}
          position="right"
          h={headerHeight}
          css={{
            "@media (max-width: 767px)": {
              display: "none",
            },
          }}
        >
          <ActionIcon size="lg" component="a" href="https://github.com/orgs/TaskGuard/repositories" rel="noreferrer" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </ActionIcon>
        </Group>
      </Container>
    </MantineHeader>
  );
}
