import { css } from "@emotion/react";

import { Color } from "../constants/colorConstants";
import { LogoSvg } from "./logoSvg";

export type LogoProps = {
  width: number;
  height: number;
};

export function Logo({ width, height }: LogoProps): JSX.Element {
  return (
    <div css={css({ fontSize: height - (height / 100) * 20 })}>
      <LogoSvg width={width} height={height} />
      <span
        css={css({
          color: Color.White,
          "@media (max-width: 767px)": {
            display: "none",
          },
        })}
      >
        Task
      </span>
      <span
        css={css({
          color: Color.CaribbeanGreen,
          "@media (max-width: 767px)": {
            display: "none",
          },
        })}
      >
        Guard
      </span>
    </div>
  );
}
