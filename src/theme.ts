import { Color } from "./common/constants/colorConstants";

export enum ThemeType {
  Dark = "Dark",
  Light = "Light",
}

export type ThemeDefinition = {
  background: Color;
  color: Color;
  primaryColor: Color;
  secondaryColor: Color;
  warningColor: Color;
  errorColor: Color;
};

export const darkTheme: ThemeDefinition = {
  background: Color.EerieBlack,
  color: Color.BrightGray,
  primaryColor: Color.ShamrockGreen,
  secondaryColor: Color.SpiroDiscoBall,
  warningColor: Color.VenetianRed,
  errorColor: Color.Flirt,
};
