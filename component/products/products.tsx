"use client";

import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../common/footer/footer";
import ProductSection from "../common/productSection/productSection";
import {
  ProductHeader,
  ProductInner,
  ProductInnerContent,
  ProductMain,
  ProductTitle,
} from "./styled";

const Products = () => {
  return (
    <div>
      <ProductHeader>
        <ProductInnerContent>
          <ProductInner>
            <Container>
              <ProductTitle>Products</ProductTitle>
            </Container>
          </ProductInner>
        </ProductInnerContent>
      </ProductHeader>

      <ProductMain>
        <ProductSection />
        <Footer />
      </ProductMain>
    </div>
  );
};

export default Products;
