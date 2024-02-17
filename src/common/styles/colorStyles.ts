import stylex from "@stylexjs/stylex";

import { Color } from "../constants/colorConstants";

export const colorStyle = stylex.create({
  color: (color: Color) => ({
    color,
  }),
});
