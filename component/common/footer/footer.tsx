"use client";

import { getCommonAssets } from "@/constant/constant";
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
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="container">
        <FooterContainer>
          <ContentBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <FooterTitle>OFFICE ADDRESS</FooterTitle>
            <FooterBody>
              <FooterBodyTitle>MR Nutriments LLP</FooterBodyTitle>
              <br />
              Flat No. 305, Alishan Flat,
              <br />
              Shishuvihar Circle,
              <br />
              Bhavnagar - 364001
              <br />
              Gujarat, India
            </FooterBody>
          </ContentBox>
          <ContentBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <FooterTitle>FACTORY ADDRESS</FooterTitle>
            <FooterBody>
              <FooterBodyTitle>MR Nutriments LLP</FooterBodyTitle>
              <br />
              Survey No. 184, Block No. 144/1/3,
              <br />
              Plot No. 4/B, At. Malpar, Mamsa Area,
              <br />
              Ta. Ghogha, Dist. Bhavnagar,
              <br />
              Gujarat, India
            </FooterBody>
          </ContentBox>
          <ContentBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <FooterTitle>GET IN TOUCH</FooterTitle>
            <FooterBody>
              <FooterBodyAnchor href="mailto:mrnutriments@gmail.com">
                mrnutriments@gmail.com
              </FooterBodyAnchor>
            </FooterBody>
            <FooterBody>
              <FooterBodyAnchor href="tel:919833467323">
                +91 9833467323
              </FooterBodyAnchor>
            </FooterBody>
          </ContentBox>
        </FooterContainer>
        <SubFooter>
          <FooterEndTitle>All rights reserved 2025 © Chocozay</FooterEndTitle>
          <ul>
            {getCommonAssets &&
              getCommonAssets?.common?.socialMedia?.map((item) => (
                <IconsStyle key={item?.id}>
                  <Link href={item?.iconLink} target="_blank">
                    <Image
                      src={item?.iconSrc}
                      alt={item?.iconAlt}
                      height={15}
                      width={15}
                    />
                  </Link>
                </IconsStyle>
              ))}
          </ul>
        </SubFooter>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
