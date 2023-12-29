import { css } from "@emotion/react";
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

export type IconProps = FontAwesomeIconProps & {
  marginRight?: 5 | 10;
};

export function Icon({ marginRight, ...props }: IconProps): JSX.Element {
  return <FontAwesomeIcon {...props} css={css({ marginRight })} />;
}
