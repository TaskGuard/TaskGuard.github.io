import { css } from "@emotion/react";
import { Color } from "../constants/colorConstants";

export type LogoSvgProps = {
  width: number;
  height: number;
  className?: string;
};

export function LogoSvg({ width, height, className }: LogoSvgProps): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 620 412"
      css={css({ verticalAlign: "text-top", display: "inline-block" })}
      className={className}
    >
      <path
        id="Selection #1"
        fill={Color.CaribbeanGreen}
        d="M 18.00,24.00
C 18.00,24.00 71.00,42.28 71.00,42.28
106.12,52.86 141.75,60.95 178.00,66.58
178.00,66.58 267.00,77.83 267.00,77.83
340.85,85.22 426.35,91.80 486.00,140.61
498.99,151.24 508.26,160.77 518.58,174.00
541.49,203.40 555.37,234.33 568.05,269.00
578.14,296.57 587.05,332.09 592.80,361.00
592.80,361.00 597.08,384.00 597.08,384.00
597.73,387.88 599.09,392.16 598.00,396.00
598.00,396.00 583.69,369.00 583.69,369.00
550.81,308.20 519.22,241.59 461.00,200.72
441.59,187.09 423.36,178.08 401.00,170.34
368.63,159.15 331.83,155.52 298.00,149.92
242.14,140.67 186.51,130.98 132.00,115.42
98.78,105.94 54.99,89.55 33.92,61.00
25.20,49.17 21.69,37.87 18.00,24.00 Z
M 27.00,96.00
C 27.00,96.00 50.00,107.74 50.00,107.74
50.00,107.74 75.00,118.19 75.00,118.19
107.31,130.67 148.89,141.29 183.00,148.00
183.00,148.00 313.00,167.61 313.00,167.61
352.41,175.00 392.15,187.83 428.00,205.75
462.81,223.16 490.97,245.08 513.71,277.00
517.59,282.45 524.16,292.17 527.00,298.00
522.22,295.84 515.58,290.41 511.00,287.14
511.00,287.14 486.00,270.86 486.00,270.86
460.68,256.01 429.41,243.35 401.00,235.88
360.43,225.22 319.66,220.76 278.00,217.91
278.00,217.91 248.00,216.00 248.00,216.00
248.00,216.00 223.00,214.09 223.00,214.09
183.07,211.34 147.13,204.31 111.00,186.25
77.05,169.27 32.69,136.34 27.00,96.00 Z
M 93.00,195.00
C 93.00,195.00 127.00,207.66 127.00,207.66
148.98,214.68 177.17,221.20 200.00,224.73
200.00,224.73 255.00,231.83 255.00,231.83
255.00,231.83 278.00,233.09 278.00,233.09
278.00,233.09 338.00,237.17 338.00,237.17
380.65,241.30 425.20,251.27 464.00,269.70
487.75,280.99 512.16,297.01 529.42,317.00
534.27,322.61 540.98,329.29 544.00,336.00
538.30,333.90 531.55,329.17 526.00,326.00
526.00,326.00 501.00,313.31 501.00,313.31
476.25,301.94 445.92,293.60 419.00,289.42
419.00,289.42 376.00,284.91 376.00,284.91
376.00,284.91 364.00,284.00 364.00,284.00
364.00,284.00 343.00,284.00 343.00,284.00
343.00,284.00 334.00,283.34 334.00,283.34
334.00,283.34 323.00,284.00 323.00,284.00
269.22,284.08 226.47,287.53 175.00,267.00
141.59,253.67 105.39,230.48 93.00,195.00 Z
M 153.00,293.00
C 153.00,293.00 168.00,296.58 168.00,296.58
168.00,296.58 197.00,301.72 197.00,301.72
197.00,301.72 226.00,304.09 226.00,304.09
226.00,304.09 238.00,305.00 238.00,305.00
238.00,305.00 285.00,305.00 285.00,305.00
285.00,305.00 297.00,304.09 297.00,304.09
297.00,304.09 330.00,301.83 330.00,301.83
330.00,301.83 355.00,300.00 355.00,300.00
384.81,299.95 410.39,299.49 440.00,305.40
470.02,311.39 499.16,321.18 524.00,339.63
530.72,344.62 539.07,350.27 544.00,357.00
544.00,357.00 528.00,350.81 528.00,350.81
528.00,350.81 508.00,344.02 508.00,344.02
489.49,338.30 458.30,333.03 439.00,333.00
439.00,333.00 415.00,333.00 415.00,333.00
415.00,333.00 403.00,333.91 403.00,333.91
403.00,333.91 360.00,338.28 360.00,338.28
360.00,338.28 292.00,347.09 292.00,347.09
292.00,347.09 282.00,348.00 282.00,348.00
282.00,348.00 267.00,347.09 267.00,347.09
238.77,345.15 212.98,339.02 188.00,325.30
174.51,317.90 159.92,307.10 153.00,293.00 Z"
      />
    </svg>
  );
}
