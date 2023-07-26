import { Container, Group, Badge, Text, SimpleGrid } from "@mantine/core";
import { faDove, faEye, faGears, faHeart, faShield, faSignal } from "@fortawesome/free-solid-svg-icons";
import { css } from "@emotion/react";

import { Benefit } from "./benefit";

export function Benefits(): JSX.Element {
  return (
    <Container size="lg" py="xl">
      <Group position="center">
        <Badge variant="filled" size="xl" styles={{ root: { background: "#00cb83" } }}>
          Coming soon
        </Badge>
      </Group>

      <Text c="dimmed" ta="center" mt="md" css={css({ marginTop: 35 })}>
        Enjoy the app with modern UI while you take back control of your data and privacy.
      </Text>

      <SimpleGrid cols={3} spacing="xl" mt={50} breakpoints={[{ maxWidth: "md", cols: 1 }]}>
        <Benefit title="Privacy" icon={faEye}>
          Your data stays on your devices. With end-to-end encryption, you can sync and backup your data with providers you trust.
        </Benefit>

        <Benefit title="Freedom" icon={faDove}>
          TaskGuard is free with no limits. The app runs on your devices and you take care of your data, so there are no server costs.
        </Benefit>

        <Benefit title="Security" icon={faShield}>
          Decentralized system and end-to-end encryption provide a high level of protection over cloud-based products.
        </Benefit>

        <Benefit title="High availability" icon={faSignal}>
          App works offline. Connection is only required for multi-device sync and external backup.
        </Benefit>

        <Benefit title="Feature-rich" icon={faGears}>
          Includes features such as calendar view, repeated tasks, due dates, notifications, lists, labels and more.
        </Benefit>

        <Benefit title="User-friendly" icon={faHeart}>
          Clean and simple design with modern look. No ads or annoying pop-ups.
        </Benefit>
      </SimpleGrid>
    </Container>
  );
}
