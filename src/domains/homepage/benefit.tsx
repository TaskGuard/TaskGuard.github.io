import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Text } from "@mantine/core";
import { PropsWithChildren } from "react";

export type BenefitProps = PropsWithChildren<{
  title: string;
  icon: IconProp;
}>;

export function Benefit({ title, icon, children }: BenefitProps): JSX.Element {
  return (
    <Card shadow="md" radius="md" padding="xl">
      <FontAwesomeIcon icon={icon} size="xl" color="#00cb83" />
      <Text fz="lg" fw={500} mt="md">
        {title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {children}
      </Text>
    </Card>
  );
}
