import { css, Global } from "@emotion/react";

import { Color } from "./common/constants/colorConstants";

export function GlobalStyles() {
  return (
    <Global
      styles={css({
        "#root": {
          height: "100%",
          width: "100%",
        },
        "*, ::after, ::before": {
          boxSizing: "border-box",
        },
        html: {
          height: "100%",
          width: "100%",
        },
        body: {
          padding: 0,
          margin: 0,
          width: "100%",
          height: "100%",
          fontFamily: '"Roboto", Helvetica, Sans-Serif',
          backgroundColor: Color.EerieBlack,
          color: Color.White,
          textRendering: "optimizeLegibility",
          fontSize: "1rem",
          fontWeight: 400,
        },
      })}
    />
  );
}
