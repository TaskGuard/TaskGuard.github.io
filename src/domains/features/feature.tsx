import { css } from "@emotion/react";

import { Col } from "../../common/components/col";
import { Container } from "../../common/components/container";
import { Heading } from "../../common/components/heading";
import { Row } from "../../common/components/row";

export type FeatureProps = { title: string; leftColumn: JSX.Element; rightColumn: JSX.Element; background?: string };

export function Feature({ title, leftColumn, rightColumn, background }: FeatureProps): JSX.Element {
  return (
    <div css={css({ padding: 10, background, height: "100%", scrollSnapAlign: "start", display: "flex", alignItems: "center" })}>
      <Container>
        <Heading level={2} css={css({ textAlign: "center" })}>
          {title}
        </Heading>
        <Row>
          <Col xs={12} sm={6}>
            {leftColumn}
          </Col>
          <Col xs={12} sm={6}>
            {rightColumn}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
