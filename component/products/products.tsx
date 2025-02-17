"use client";

import React from "react";
import Footer from "../common/footer/footer";
import ProductSection from "../common/productSection/productSection";
import HeaderSection from "../common/headerSection/headerSection";
import { customHeaderSectionDetails } from "@/constant/constant";
import { ProductMain } from "./styled";

const Products = () => {
  return (
    <div>
      <HeaderSection pageDetails={customHeaderSectionDetails?.products} />
      <ProductMain>
        <ProductSection />
        <Footer />
      </ProductMain>
    </div>
  );
};

export default Products;
