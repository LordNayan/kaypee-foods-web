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
                B22/3, Pinto Park,
                <br />
                Industrial Area,
                <br />
                Maharajpura, Gwalior,
                <br />
                Madhya Pradesh 474004
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
                B22/3, Pinto Park,
                <br />
                Industrial Area,
                <br />
                Maharajpura, Gwalior,
                <br />
                Madhya Pradesh 474004
              </FooterBody>
            </ContentBox>
            <ContentBox
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <FooterTitle>GET IN TOUCH</FooterTitle>
              <FooterBody>
                <FooterBodyAnchor href="mailto:kaypeefood@gmail.com">
                  kaypeefood@gmail.com
                </FooterBodyAnchor>
              </FooterBody>
              <FooterBody>
                <FooterBodyAnchor href="tel:917879747859">
                  +91 78797 47859
                </FooterBodyAnchor>
              </FooterBody>
              <FooterBody>
                <FooterBodyAnchor href="tel:917999570646">
                  +91 79995 70646
                </FooterBodyAnchor>
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
                      <FontAwesomeIcon icon={item?.iconSrc} size="xs" />
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
