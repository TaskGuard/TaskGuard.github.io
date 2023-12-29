import { css, Theme, useTheme } from "@emotion/react";
import { Button as MantineButton, ButtonProps as MantineButtonProps } from "@mantine/core";
import { forwardRef, MouseEvent } from "react";

import { Color } from "../constants/colorConstants";
import { IconProp } from "../constants/iconConstants";
import { Icon } from "./icon";

export type ButtonProps = MantineButtonProps & {
  iconLeft?: IconProp;
  variant: ButtonVariant;
  className?: string;
  iconColor?: Color;
  title?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

export type ButtonVariant = "primary" | "secondary" | "warning" | "danger" | "form";

export const Button = forwardRef(function Button({ iconLeft, iconColor, ...props }: ButtonProps, ref): JSX.Element {
  const theme = useTheme();

  return (
    <MantineButton
      {...props}
      variant={props.variant === "secondary" ? "outline" : "filled"}
      styles={{
        root: getButtonStyle(props.variant, theme),
        leftIcon: {
          color: iconColor,
        },
      }}
      css={css({
        color: `${getButtonColor(props.variant, theme)} !important`,
        "&:hover": {
          color: `${getButtonHoverColor(props.variant, theme)} !important`,
        },
      })}
      ref={ref as any}
      leftIcon={iconLeft && <Icon icon={iconLeft} />}
      className={props.className}
    >
      {props.children}
    </MantineButton>
  );
});

function getButtonStyle(variant: ButtonVariant, theme: Theme) {
  const background = getButtonBackground(variant, theme);

  return {
    background: background,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: getButtonBorder(variant, theme),
    "&:hover": {
      background: variant === "secondary" ? theme.secondaryColor : background,
      borderColor: getButtonBorder(variant, theme),
      opacity: 0.8,
    },
    "&:disabled": {
      background: background,
      borderColor: getButtonBorder(variant, theme),
      opacity: 0.6,
    },
  };
}

function getButtonBorder(variant: ButtonVariant, theme: Theme): Color | undefined {
  if (variant === "secondary") {
    return theme.secondaryColor;
  } else {
    return getButtonBackground(variant, theme);
  }
}

function getButtonBackground(variant: ButtonVariant, theme: Theme): Color | undefined {
  switch (variant) {
    case "primary":
      return theme.primaryColor;
    case "secondary":
      return Color.Transparent;
    case "warning":
      return theme.warningColor;
    case "danger":
      return theme.errorColor;
    case "form":
      return theme.input.background;
    default:
      return undefined;
  }
}

function getButtonColor(variant: ButtonVariant, theme: Theme): Color | undefined {
  if (variant === "form") {
    return theme.input.color;
  } else if (variant === "secondary") {
    return theme.secondaryColor;
  } else {
    return undefined;
  }
}

function getButtonHoverColor(variant: ButtonVariant, theme: Theme): Color | undefined {
  if (variant === "form") {
    return theme.input.color;
  } else if (variant === "secondary") {
    return theme.color;
  } else {
    return undefined;
  }
}
