import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  ProductsSection,
  StyledFigure,
  StyledFigureCaption,
  StyledFigureCaptionSpace,
  StyledFigureCaptionSpan,
  StyledFigureHeding,
  WorkPara,
  WorkTitle,
  WorkTitleHeading,
} from "./styled";
import ProductTable from "./productTable";

const DynamicProductSection = ({ product }: any) => {
  return (
    <ProductsSection>
      <Container>
        <WorkTitle>
          <WorkTitleHeading>{product?.itemName}</WorkTitleHeading>
          <WorkPara>{product?.itemSubTitle}</WorkPara>
        </WorkTitle>
      </Container>
      <Row>
        {product?.productItemsList &&
          product?.productItemsList?.map((product: any, ind: number) => (
            <Col key={ind} md={4}>
              <StyledFigure>
                <img src={product?.src} alt="products" />
                <StyledFigureCaption>
                  <StyledFigureCaptionSpan />
                  <StyledFigureCaptionSpace>&nbsp;</StyledFigureCaptionSpace>
                  <StyledFigureHeding>{product?.title}</StyledFigureHeding>
                </StyledFigureCaption>
              </StyledFigure>
              <ProductTable tableContent={product?.itemSpecification} />
            </Col>
          ))}
      </Row>
    </ProductsSection>
  );
};

export default DynamicProductSection;
