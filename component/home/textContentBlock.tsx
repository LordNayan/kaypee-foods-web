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
                  src="/images/products/csc/2.jpg"
                  alt="text-wrapper-image"
                />
              </Figure>
            </Col>
            <Col lg={8}>
              <Row className="inner">
                <Col xs={12}>
                  <Title>A Truly Indulgent Sweet Experience.</Title>
                </Col>
                <Col md={12} className="text-justify">
                  <Paragraph>
                  We are a family-owned confectionery manufacturing company with a rich legacy dating back to 1965. Located at 22/3 Maharajpura Industrial Area, Gwalior (M.P.), India, we take pride in being a trusted name in the world of sweets and confectionery. Our journey began with a simple yet powerful vision: to spread joy and happiness through high-quality, delicious products crafted with care and precision.


                  </Paragraph>
                  <Paragraph>
                  We operate through a diverse network of channel partners, agencies, and direct customers via online platforms, ensuring that our products are accessible to everyone. By leveraging multiple avenues, we strive to deliver our products to customers in a timely and efficient manner. We welcome partnerships with businesses of all sizes—small, medium, and large—and are committed to serving their unique needs with excellence.

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
