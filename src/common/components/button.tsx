import { MouseEvent } from "react";
import { Button as MantineButton, ButtonProps as MantineButtonProps } from "@mantine/core";
import stylex from "@stylexjs/stylex";

import { Color } from "../constants/colorConstants";
import { IconProp } from "../constants/iconConstants";
import { Icon } from "./icon";

export type ButtonProps = MantineButtonProps & {
  iconLeft?: IconProp;
  variant: ButtonVariant;

  iconColor?: Color;
  title?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

export type ButtonVariant = "primary" | "secondary" | "warning" | "danger";

export function Button({ iconLeft, iconColor, ...props }: ButtonProps): JSX.Element {
  return (
    <MantineButton
      {...props}
      variant={props.variant === "secondary" ? "outline" : "filled"}
      leftSection={iconLeft && <Icon icon={iconLeft} color={iconColor} />}
      {...stylex.props(style.button)}
      styles={{
        root: {
          background: Color.ShamrockGreen,
        },
      }}
    >
      {props.children}
    </MantineButton>
  );
}

const style = stylex.create({
  button: {
    ":hover": {
      opacity: 0.9,
    },
  },
});
