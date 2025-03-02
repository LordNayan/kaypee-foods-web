"use client";

import React, { useEffect, useState } from "react";
import {
  BrandLogo,
  ProductHeader,
  ProductInner,
  ProductInnerContent,
  ProductMain,
  ProductSubTitle,
  ProductTitle,
} from "./styled";
import { Container } from "react-bootstrap";
import Footer from "../common/footer/footer";
import { dynamicProductDetails } from "@/constant/dynamicProductsDetails";
import DynamicProductSection from "./dynamicProductSection";
import FramerMotionWrap from "../common/framerMotionWrap/framerMotionWrap";

const DynamicProduct = ({ getSlug }: any) => {
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    const foundProduct = dynamicProductDetails.find(
      (product) => product.slug === getSlug
    );
    setProduct(foundProduct);
  }, [getSlug]);

  return (
    <FramerMotionWrap>
       <ProductHeader backgroundImage={product?.heroImg || "/images/products/bg-img/int-hero-products.jpg"}>
        <ProductInnerContent>
          <ProductInner>
            <Container>
              <ProductTitle>{product?.itemName}</ProductTitle>
              <ProductSubTitle>{product?.itemSubTitle}</ProductSubTitle>
            </Container>
          </ProductInner>
          <Container>
          {/* <BrandLogo><img src="./images/common/navbar/kaypee_logo.png" alt="brand-logo" /></BrandLogo> */}
          </Container>
        </ProductInnerContent>
      </ProductHeader>

      <ProductMain>
        <DynamicProductSection product={product} />
        <Footer />
      </ProductMain>
    </FramerMotionWrap>
  );
};

export default DynamicProduct;
