import stylex from "@stylexjs/stylex";

import { Col } from "../../common/components/col";
import { Container } from "../../common/components/container";
import { Heading } from "../../common/components/heading";
import { Row } from "../../common/components/row";
import { Color } from "../../common/constants/colorConstants";
import { alignmentStyle } from "../../common/styles/alignmentStyles";

export type FeatureProps = { title: string; leftColumn: JSX.Element; rightColumn: JSX.Element; background?: Color };

export function Feature({ title, leftColumn, rightColumn, background }: FeatureProps): JSX.Element {
  return (
    <div {...stylex.props(style.feature(background))}>
      <Container>
        <Heading level={2} {...stylex.props(alignmentStyle.center)}>
          {title}
        </Heading>
        <Row>
          <Col span={{ xs: 12, sm: 6 }}>{leftColumn}</Col>
          <Col span={{ xs: 12, sm: 6 }}>{rightColumn}</Col>
        </Row>
      </Container>
    </div>
  );
}

const style = stylex.create({
  feature: (background: Color | undefined) => ({
    padding: 10,
    background,
    height: "100%",
    scrollSnapAlign: "start",
    display: "flex",
    alignItems: "center",
  }),
});
