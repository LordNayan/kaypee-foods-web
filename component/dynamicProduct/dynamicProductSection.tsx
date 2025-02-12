"use client";

import React, { useEffect, useState } from "react";
import {
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

interface Product {
  slug: string;
  itemName: string;
  itemSubTitle: string;
  heroImg?: string;
}

const DynamicProduct = ({ getSlug }: any) => {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const foundProduct = dynamicProductDetails.find(
      (product) => product.slug === getSlug
    ) || null;
    setProduct(foundProduct);
  }, [getSlug]);

  return (
    <div>
      <ProductHeader
        backgroundImage={product?.heroImg || "/images/products/bg-img/int-hero-products.jpg"}
      >
        <ProductInnerContent>
          <ProductInner>
            <Container>
              <ProductTitle>{product?.itemName}</ProductTitle>
              <ProductSubTitle>{product?.itemSubTitle}</ProductSubTitle>
            </Container>
          </ProductInner>
        </ProductInnerContent>
      </ProductHeader>

      <ProductMain>
        <DynamicProductSection product={product} />
        <Footer />
      </ProductMain>
    </div>
  );
};

export default DynamicProduct;
