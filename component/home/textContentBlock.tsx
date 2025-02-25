"use client";

import { Container, Row, Col } from "react-bootstrap";
import FramerMotionWrap from "../common/framerMotionWrap/framerMotionWrap";
import {
  Figure,
  Paragraph,
  ReadMore,
  TextContentSection,
  Title,
} from "./styled";

const TextContentBlock = () => {
  return (
    <TextContentSection>
      <FramerMotionWrap>
        <Container>
          <Row>
            <Col lg={4}>
              <Figure>
                <img
                  src="/images/about-us/text-wrapper-image.jpg"
                  alt="text-wrapper-image"
                />
              </Figure>
            </Col>
            <Col lg={8}>
              <Row className="inner">
                <Col xs={12}>
                  <Title>A Truly Indulgent Chocolate Experience.</Title>
                </Col>
                <Col md={12} className="text-justify">
                  <Paragraph>
                    'Chocozay' is a family-owned chocolate manufacturing
                    business started with the intent to spread happiness with
                    quality products made from superior ingredients.
                  </Paragraph>
                  <Paragraph>
                    The plant is designed with world-class machinery wherein we
                    produce chocolate from scratch and then mould it into
                    truffles and bars. These products are then packed using
                    prime packing machines. We adhere to world-class food
                    manufacturing practices to maintain the level of hygiene
                    required to make sure that our products reach customers in
                    the best condition.
                  </Paragraph>
                  <ReadMore href="/about-us">READ MORE</ReadMore>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </FramerMotionWrap>
    </TextContentSection>
  );
};

export default TextContentBlock;
