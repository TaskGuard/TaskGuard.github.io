import { SimpleGrid } from "@mantine/core";

import { Benefit } from "./benefit";
import { icon } from "../../common/constants/iconConstants";
import { Container } from "../../common/components/container";

export function Benefits(): JSX.Element {
  return (
    <Container size="lg" py="xl">
      <SimpleGrid cols={3} spacing="xl" mt={50} breakpoints={[{ maxWidth: "md", cols: 1 }]}>
        <Benefit title="Privacy" icon={icon.privacy}>
          Peer-to-peer communication and end-to-end encryption ensures that your data stays on your devices.
        </Benefit>

        <Benefit title="Freedom" icon={icon.dove}>
          TaskGuard is free with no limits. The app runs on your devices and you take care of your data, so there are no server costs.
        </Benefit>

        <Benefit title="High availability" icon={icon.signal}>
          App works offline. Connection is only required for multi-device synchronization.
        </Benefit>

        <Benefit title="Security" icon={icon.shield}>
          Decentralized system and end-to-end encryption provide a high level of protection over cloud-based products.
        </Benefit>

        <Benefit title="Feature-rich" icon={icon.gears}>
          Includes features such as calendar view, repeated tasks, due dates, notifications, lists, labels and more.
        </Benefit>

        <Benefit title="User-friendly" icon={icon.heart}>
          Clean and simple design with modern look. No ads or annoying pop-ups.
        </Benefit>
      </SimpleGrid>
    </Container>
  );
}
