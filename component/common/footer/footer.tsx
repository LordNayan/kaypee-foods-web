"use client";

import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { getCommonAssets } from "@/constant/constant";
import FramerMotionWrap from "../framerMotionWrap/framerMotionWrap";
import {
  ContentBox,
  FooterBody,
  FooterBodyAnchor,
  FooterBodyTitle,
  FooterContainer,
  FooterEndTitle,
  FooterTitle,
  FooterWrapper,
  IconsStyle,
  SubFooter,
} from "./styled";

const Footer = () => {
  return (
    <FooterWrapper>
      <FramerMotionWrap>
        <Container>
          <FooterContainer>
            <ContentBox
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <FooterTitle>OFFICE ADDRESS</FooterTitle>
              <FooterBody>
                <FooterBodyTitle>KAYPEE FOOD PRODUCTS</FooterBodyTitle>
                <br />
                B-22/3,
                <br />
                Maharajpura Industrial Area,
                <br />
                Gwalior,
                <br />
                Madhya Pradesh, 474005
              </FooterBody>
            </ContentBox>
            <ContentBox
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <FooterTitle>FACTORY ADDRESS</FooterTitle>
              <FooterBody>
                <FooterBodyTitle>KAYPEE FOOD PRODUCTS</FooterBodyTitle>
                <br />
                B-22/3,
                <br />
                Maharajpura Industrial Area,
                <br />
                Gwalior,
                <br />
                Madhya Pradesh, 474005
              </FooterBody>
            </ContentBox>
            <ContentBox
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <FooterTitle>GET IN TOUCH</FooterTitle>
              <FooterBody>
                <FooterBodyAnchor href="mailto:admin@kaypeefood.com">
                  admin@kaypeefood.com
                </FooterBodyAnchor>
              </FooterBody>
              <FooterBody>
                <FooterBodyAnchor href="tel:919343698906">
                  +91 93436 98906
                </FooterBodyAnchor>
              </FooterBody>
              <FooterBody>
                <Link href="/privacy-policy" passHref legacyBehavior>
                  <FooterBodyAnchor>
                    Privacy Policy
                  </FooterBodyAnchor>
                </Link>
              </FooterBody>
              <FooterBody>
                <Link href="/terms-and-conditions" passHref legacyBehavior>
                  <FooterBodyAnchor>
                    Terms & Conditions
                  </FooterBodyAnchor>
                </Link>
              </FooterBody>
            </ContentBox>
          </FooterContainer>
          <SubFooter>
            <FooterEndTitle></FooterEndTitle>
            <ul>
              {getCommonAssets &&
                getCommonAssets?.common?.socialMedia?.map((item) => (
                  <IconsStyle key={item?.id}>
                    <Link href={item?.iconLink} target="_blank">
                      <FontAwesomeIcon icon={item?.iconSrc} size="xl" />
                    </Link>
                  </IconsStyle>
                ))}
            </ul>
          </SubFooter>
        </Container>
      </FramerMotionWrap>
    </FooterWrapper>
  );
};

export default Footer;
