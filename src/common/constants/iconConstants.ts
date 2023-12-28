import { IconProp as FaIconProp, IconDefinition as FaIconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faAndroid, faGithub, faWindows } from "@fortawesome/free-brands-svg-icons";
import { faDove, faEye, faGears, faHeart, faShield, faSignal } from "@fortawesome/free-solid-svg-icons";

export const icon = {
  github: faGithub,
  android: faAndroid,
  windows: faWindows,
  dove: faDove,
  eye: faEye,
  gears: faGears,
  heart: faHeart,
  shield: faShield,
  signal: faSignal,
};

export type IconProp = FaIconProp;
export type IconDefinition = FaIconDefinition;
