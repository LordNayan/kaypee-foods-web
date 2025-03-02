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
                        A Truly Indulgent Chocolate Experience.
                      </SubTitle>
                      <Paragraph>
                        'Chocozay' is a family-owned chocolate manufacturing
                        business started with the intent to spread happiness
                        with quality products made from superior ingredients.
                        The plant is designed with world-class machinery wherein
                        we produce chocolate from scratch and then mould it into
                        truffles and bars. These products are then packed using
                        prime packing machines. We adhere to world-classfood
                        manufacturing practices to maintain the level of hygiene
                        required to make sure that our products reach customers
                        in the best condition.
                      </Paragraph>
                      <Paragraph>
                        We are known in the market for our superior chocolate
                        quality and great packaging, making our products
                        suitable not only for consumption but also for gifting,
                        be it personal gifting or corporate gifting. Our vision
                        is to have customers all over the world consume our
                        chocolate, not only for the first time but multiple
                        times to create a long-lasting association with our
                        brand 'Chocozay'.
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
