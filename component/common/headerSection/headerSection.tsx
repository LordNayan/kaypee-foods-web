import React from "react";
import { Container } from "react-bootstrap";
import {
  ProductHeader,
  ProductInner,
  ProductInnerContent,
  ProductTitle,
} from "./style";

const HeaderSection = ({ pageDetails }: any) => {
  return (
    <ProductHeader backgroundImage={pageDetails?.heroImg || "/images/products/bg-img/int-hero-products.jpg"}>
      <ProductInnerContent>
        <ProductInner>
          <Container>
            <ProductTitle>{pageDetails?.title}</ProductTitle>
          </Container>
        </ProductInner>
      </ProductInnerContent>
    </ProductHeader>
  );
};

export default HeaderSection;
