import stylex from "@stylexjs/stylex";

import { Color } from "../constants/colorConstants";
import { LogoSvg } from "./logoSvg";

export type LogoProps = {
  width: number;
  height: number;
};

export function Logo({ width, height }: LogoProps): JSX.Element {
  return (
    <div {...stylex.props(style.logo(height))}>
      <LogoSvg width={width} height={height} />
      <span {...stylex.props(style.name, style.nameColor(Color.White))}>Task</span>
      <span {...stylex.props(style.name, style.nameColor(Color.CaribbeanGreen))}>Guard</span>
    </div>
  );
}

const style = stylex.create({
  logo: (height: number) => ({
    fontSize: height - (height / 100) * 20,
  }),
  name: {
    "@media (max-width: 767px)": {
      display: "none",
    },
  },
  nameColor: (color: Color) => ({
    color,
  }),
});
