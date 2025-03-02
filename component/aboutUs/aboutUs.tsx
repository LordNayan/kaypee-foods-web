"use client";

import React from "react";
import HeaderSection from "../common/headerSection/headerSection";
import { customHeaderSectionDetails } from "@/constant/constant";
import {
  AboutMain,
  Figure,
  Paragraph,
  TextContentSection,
  Title,
  SubTitle,
  Image,
  CustomRow,
} from "./styled";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../common/footer/footer";
import FramerMotionWrap from "../common/framerMotionWrap/framerMotionWrap";

const AboutUs = () => {
  return (
    <div>
      <HeaderSection pageDetails={customHeaderSectionDetails?.aboutUs} />
      <FramerMotionWrap>
        <AboutMain>
          <TextContentSection>
            <Container>
              <Row>
                <Col lg={4}>
                  <Figure>
                    <img
                      src="/images/common/products/premiumcfc.jpg"
                      alt="text-wrapper-image"
                    />
                  </Figure>
                </Col>
                <Col lg={8}>
                  <Row className="inner">
                    <Col xs={12}>
                      <Title>About Us</Title>
                    </Col>
                    <Col md={12} className="text-justify">
                      <SubTitle>
                        A Truly Indulgent Sweet Experience.
                      </SubTitle>
                      <Paragraph>
                      We are a family-owned confectionery manufacturing company with a rich legacy dating back to 1965. Located at 22/3 Maharajpura Industrial Area, Gwalior (M.P.), India, we take pride in being a trusted name in the world of sweets and confectionery. Our journey began with a simple yet powerful vision: to spread joy and happiness through high-quality, delicious products crafted with care and precision.


                      </Paragraph>
                      <Paragraph>
                      We operate through a diverse network of channel partners, agencies, and direct customers via online platforms, ensuring that our products are accessible to everyone. By leveraging multiple avenues, we strive to deliver our products to customers in a timely and efficient manner. We welcome partnerships with businesses of all sizes—small, medium, and large—and are committed to serving their unique needs with excellence.


                      </Paragraph>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <CustomRow>
                <Col lg={9}>
                  <Paragraph>
                    We work across the board with different channel partners,
                    agencies and direct customers via online platforms. We try
                    to connect to our customers through different avenues to
                    ensure that they receive products in a timely manner. We
                    invite small, medium and large companies to associate with
                    us and give us a chance to serve their business needs.
                  </Paragraph>
                </Col>
                <Col lg={3}>
                  <Image  src="/images/common/products/premiumjumbo.jpg" alt="Image" />
                </Col>
              </CustomRow>
            </Container>
          </TextContentSection>
          <Footer />
        </AboutMain>
      </FramerMotionWrap>
    </div>
  );
};

export default AboutUs;
