import stylex from "@stylexjs/stylex";
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

export type IconProps = FontAwesomeIconProps & {
  marginRight?: 5 | 10;
};

export function Icon({ marginRight, ...props }: IconProps): JSX.Element {
  return <FontAwesomeIcon {...props} {...stylex.props(style.icon(marginRight))} />;
}

const style = stylex.create({
  icon: (marginRight: number | undefined) => ({
    marginRight,
  }),
});
