import { css } from "@emotion/react";

import { Col } from "../../common/components/col";
import { Row } from "../../common/components/row";

export type FeatureProps = { title: string; leftColumn: JSX.Element; rightColumn: JSX.Element };

export function Feature({ title, leftColumn, rightColumn }: FeatureProps): JSX.Element {
  return (
    <div css={css({ padding: 10 })}>
      <h2 css={css({ textAlign: "center" })}>{title}</h2>
      <Row>
        <Col xs={12} sm={6}>
          {leftColumn}
        </Col>
        <Col xs={12} sm={6}>
          {rightColumn}
        </Col>
      </Row>
    </div>
  );
}
