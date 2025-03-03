import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  ProductsSection,
  StyleBtnMore,
  StyledFigure,
  StyledFigureCaption,
  StyledFigureCaptionSpace,
  StyledFigureCaptionSpan,
  StyledFigureHeding,
  StyledTextBox,
  StyledTextForMore,
  WorkPara,
  WorkTitle,
  WorkTitleHeading,
} from "./styled";
// import ProductTable from "./productTable";

const DynamicProductSection = ({ product }: any) => {
  return (
    <>
      <ProductsSection>
        <Container>
          <WorkTitle>
            <WorkTitleHeading>{product?.itemName}</WorkTitleHeading>
            <WorkPara>{product?.itemSubTitle}</WorkPara>
          </WorkTitle>
        </Container>
        <Row>
          {product?.productItemsList &&
            product?.productItemsList
              ?.slice(0, 5)
              ?.map((product: any, ind: number) => (
                <Col key={ind} md={4}>
                  <StyledFigure>
                    <img src={product?.src} alt="products" />
                    <StyledFigureCaption>
                      <StyledFigureCaptionSpan />
                      <StyledFigureCaptionSpace>
                        &nbsp;
                      </StyledFigureCaptionSpace>
                      <StyledFigureHeding>{product?.title}</StyledFigureHeding>
                    </StyledFigureCaption>
                  </StyledFigure>
                  {/* <ProductTable tableContent={product?.itemSpecification} /> */}
                </Col>
              ))}
        </Row>
        <div>
        <StyledTextBox>
          <StyledTextForMore>
            For more products please visit our catalogue
          </StyledTextForMore>
          <StyleBtnMore
            href="/images/doc/kaypee-food-catalog.pdf"
            target="_blank"
          >
            Catalogue
          </StyleBtnMore>
        </StyledTextBox>
      </div>
      </ProductsSection>

    </>
  );
};

export default DynamicProductSection;
