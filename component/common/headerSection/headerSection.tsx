import React from "react";
import { Container } from "react-bootstrap";
import {
  BrandLogo,
  ProductHeader,
  ProductInner,
  ProductInnerContent,
  ProductTitle,
} from "./style";
import FramerMotionWrap from "../framerMotionWrap/framerMotionWrap";

const HeaderSection = ({ pageDetails }: any) => {
  return (
    <FramerMotionWrap>
      <ProductHeader
        backgroundImage={
          pageDetails?.heroImg ||
          "/images/products/bg-img/int-hero-products.jpg"
        }
      >
        <ProductInnerContent>
          <ProductInner>
            <Container>
              <ProductTitle>{pageDetails?.title}</ProductTitle>
            </Container>
          </ProductInner>
          <Container>
          {/* <BrandLogo>
            <img
              src="./images/common/navbar/kaypee_logo.png"
              alt="brand-logo"
            />
          </BrandLogo> */}
          </Container>
        </ProductInnerContent>
      </ProductHeader>
    </FramerMotionWrap>
  );
};

export default HeaderSection;
