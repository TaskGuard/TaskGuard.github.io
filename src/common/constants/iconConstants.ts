import { IconProp as FaIconProp, IconDefinition as FaIconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faAndroid, faApple, faChrome, faEdge, faGithub, faLinux, faSafari, faWindows } from "@fortawesome/free-brands-svg-icons";
import { faDove, faGears, faHeart, faRocket, faShield, faSignal, faUserSecret } from "@fortawesome/free-solid-svg-icons";

export const icon = {
  android: faAndroid,
  dove: faDove,
  privacy: faUserSecret,
  gears: faGears,
  github: faGithub,
  heart: faHeart,
  rocket: faRocket,
  shield: faShield,
  signal: faSignal,
  windows: faWindows,
  linux: faLinux,
  apple: faApple,
  edge: faEdge,
  safari: faSafari,
  chrome: faChrome,
};

export type IconProp = FaIconProp;
export type IconDefinition = FaIconDefinition;
