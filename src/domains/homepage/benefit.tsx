import { PropsWithChildren } from "react";
import { css } from "@emotion/react";
import { Card, Text } from "@mantine/core";

import { Color } from "../../common/constants/colorConstants";
import { Icon } from "../../common/components/icon";
import { IconProp } from "../../common/constants/iconConstants";

export type BenefitProps = PropsWithChildren<{
  title: string;
  icon: IconProp;
}>;

export function Benefit({ title, icon, children }: BenefitProps): JSX.Element {
  return (
    <Card shadow="md" radius="md" padding="xl" css={css({ background: Color.RichBlack })}>
      <Icon icon={icon} size="xl" color={Color.CaribbeanGreen} />
      <Text fz="lg" fw={500} mt="md">
        {title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {children}
      </Text>
    </Card>
  );
}
