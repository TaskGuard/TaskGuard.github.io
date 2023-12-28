import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

export type IconProps = FontAwesomeIconProps;

export function Icon(props: IconProps): JSX.Element {
  return <FontAwesomeIcon {...props} />;
}
