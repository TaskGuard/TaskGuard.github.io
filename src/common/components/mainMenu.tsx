import { Group } from "@mantine/core";

import { headerHeight } from "../constants/layoutConstants";
import { MainMenuItem } from "./mainMenuItem";

export function MainMenu(): JSX.Element {
  return (
    <Group gap={10} h={headerHeight}>
      <MainMenuItem path="/download">Download</MainMenuItem>
      <MainMenuItem path="/features">Features</MainMenuItem>
      <MainMenuItem path="/blog">Blog</MainMenuItem>
    </Group>
  );
}
