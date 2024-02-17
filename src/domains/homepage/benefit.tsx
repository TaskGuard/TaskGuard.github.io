import { PropsWithChildren } from "react";
import { Text } from "@mantine/core";
import stylex from "@stylexjs/stylex";

import { Color } from "../../common/constants/colorConstants";
import { Icon } from "../../common/components/icon";
import { IconProp } from "../../common/constants/iconConstants";

export type BenefitProps = PropsWithChildren<{
  title: string;
  icon: IconProp;
}>;

export function Benefit({ title, icon, children }: BenefitProps): JSX.Element {
  return (
    <div {...stylex.props(style.benefit(Color.RichBlack))}>
      <Icon icon={icon} size="xl" color={Color.CaribbeanGreen} />
      <Text fz="lg" fw={500} mt="md">
        {title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {children}
      </Text>
    </div>
  );
}

const style = stylex.create({
  benefit: (color: Color) => ({
    background: color,
    opacity: 0.9,
    borderRadius: 5,
    padding: 20,
  }),
});
