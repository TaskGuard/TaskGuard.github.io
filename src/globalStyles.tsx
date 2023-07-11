import { css, Global } from "@emotion/react";

export function GlobalStyles() {
  return (
    <Global
      styles={css({
        "*, ::after, ::before": {
          boxSizing: "border-box",
        },
        body: {
          padding: 0,
          margin: 0,
          width: "100%",
          height: "100%",
          fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
          backgroundColor: "#0b1727",
          color: "#ffffff",
          textRendering: "optimizeLegibility",
          fontWeight: 400,
        },
      })}
    />
  );
}
