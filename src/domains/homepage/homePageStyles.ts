import stylex from "@stylexjs/stylex";
import { Color } from "../../common/constants/colorConstants";

export const homepageStyle = stylex.create({
  homepage: (color: Color) => ({
    textAlign: "center",
    width: "100%",
    height: "100%",
    float: "left",
    position: "relative",
    background: color,
    paddingTop: 40,
  }),
  backgroundImage: {
    width: "100%",
    height: "100%",
    background: `url('/background.jpg')`,
    backgroundSize: "cover",
    position: "absolute",
    top: 0,
    opacity: 0.18,
  },
  content: {
    margin: "auto",
    zIndex: 1,
  },
  heading: {
    fontSize: 54,
    marginBottom: 10,
    marginTop: 45,
  },
  headingHighlight: (color: Color) => ({
    color,
  }),
  subtitle: {
    fontSize: 18,
    margin: 0,
  },
  note: {
    marginTop: 15,
    marginBottom: 15,
    paddingLeft: 5,
    paddingRight: 5,
    textAlign: "center",
    opacity: 0.5,
  },
  primaryButton: {
    marginTop: 30,
    marginBottom: 80,
  },
});
