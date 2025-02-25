import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import { getCommonAssets } from "@/constant/constant";
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
import FramerMotionWrap from "../framerMotionWrap/framerMotionWrap";

const ProductSection = () => {
  return (
    <ProductsSection>
      <FramerMotionWrap>
      <Container>
        <WorkTitle>
          <WorkTitleHeading>Products</WorkTitleHeading>
          <WorkPara>
            A premium array of mouth-watering chocolates manufactured with
            utmost quality and hygiene.
          </WorkPara>
        </WorkTitle>
      </Container>
      <Row className="works-grid">
        {getCommonAssets &&
          getCommonAssets?.common?.products?.map((product) => (
            <Col key={product?.id} md={4}>
              <StyledFigure>
                <Link href={product?.imgLink}>
                  <img src={product?.imgSrc} alt={product?.imgAlt} />
                </Link>
                <StyledFigureCaption>
                  <StyledFigureCaptionSpan />
                  <StyledFigureCaptionSpace>&nbsp;</StyledFigureCaptionSpace>
                  <StyledFigureHeding>{product?.imgAlt}</StyledFigureHeding>
                </StyledFigureCaption>
              </StyledFigure>
            </Col>
          ))}
      </Row>
      </FramerMotionWrap>
    </ProductsSection>
  );
};

export default ProductSection;
