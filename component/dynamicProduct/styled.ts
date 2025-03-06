import Link from 'next/link';
import styled from 'styled-components';

export const ProductMain = styled.main`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 100vh;
  background: #fff;
  position: relative;
`;

export const ProductHeader = styled.header<{ backgroundImage: string }>`
  background: url(${(props) => props.backgroundImage}) center center / cover no-repeat; 
  background-size: cover;
  width: 100%;
  height: 100%;
  min-height: 560px;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
`;

export const ProductInnerContent = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
`;

export const ProductInner = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  padding: 0 140px;
  @media screen and (max-width: 767px) {
    padding: 0 10px;
  }
`;

export const ProductTitle = styled.h2`
  font-size: 4.5vw;
  color: #fff;
  display: block;
  font-weight: 800;
  margin-bottom: 20px;
  @media screen and (max-width: 767px) {
    font-size: 12vw;
  }
`;

export const ProductSubTitle = styled.h6`
  font-size: 20px;
  color: #fff;
  display: block;
  font-family: "Poppins", sans-serif;
`;

export const BrandLogo = styled.div`
  position: absolute;
  bottom: 60px;
  img {
      height: 120px;
      width: 140px;
      @media screen and (max-width: 767px) {
        height: 85px;
        width: 100px;
      }
  }
`;

export const ProductsSection = styled.section`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 100px 40px;
    padding-bottom: 20px;
    position: relative;
    z-index: 2;
    @media screen and (max-width: 767px) {
        padding: 75px 10px;
    }
`;

export const WorkTitle = styled.div`
    width: 70%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    padding: 0;
    margin-bottom: 80px;
    @media screen and (max-width: 767px) {
        width: 100%;
    }
`;

export const WorkTitleHeading = styled.h2`
    font-size: 6vw;
    font-weight: 800;
    line-height: 1;
    color: #313434;
`;

export const WorkPara = styled.p`
    display: block;
    color: #8f999a;
    font-size: 22px;
    font-weight: 300;
    line-height: 34px;
    margin: 0;
    font-family: "Poppins", sans-serif;
`;

export const StyledFigureCaptionSpan = styled.span`
  width: 3px;
  height: 50px;
  background: #f03a37;
  position: absolute;
  left: 20px;
  top: -80%;
  transition: opacity 0.3s, transform 0.3s; // Smooth transition for opacity and transform
`;

export const StyledFigure = styled.figure`
  padding: 0 1vw;
  position: relative;
  margin: 0 0 1rem;
  overflow: hidden;
  transition: transform 0.3s;

  // Initial scale set to 1.1 for zoom-in effect
  transform: scale(1);

  img {
    &:hover {
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
  }

  @media screen and (max-width: 767px) {
      padding: 0 15px;
      margin-bottom: 40px;
  }

  &:hover {
    // Scale to 1 on hover for zoom-out effect
    transform: scale(0.95);
    // Hide the caption span on hover
    ${StyledFigureCaptionSpan} {
      opacity: 0;
      transform: translateY(-10px); // Optional: move it slightly up
    }
  }

  img {
    width: 100%;
    height: auto;
  }
`;

export const StyledFigureCaption = styled.figcaption`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  margin-top: 30px;
`;

export const StyledFigureCaptionSpace = styled.small`
  width: 100%;
  display: block;
  margin-bottom: 10px;
  color: #8f999a;
  font-family: "Poppins", sans-serif;
  font-size: 13px;
`;

export const StyledFigureHeding = styled.h2`
  font-weight: 800;
  color: #313434;
`;



export const TableWrapper = styled.div`
  margin-bottom: 80px;
`

export const Table = styled.table`
  background: #fff;
  margin-bottom: 20px;
  width: 100%;
  border: solid 1px #d4d8d8;

  tbody{
    tr {
      &:first-child {
        font-weight: bold;
      }
      td{
        padding: 5px;
      }
    }
  }
`

export const StyledTextBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const StyledTextForMore = styled.h3`
    font-weight: 600;
    font-size: 3vw;
    color: #ffd700;
    margin-bottom: 20px;
`;


export const StyleBtnMore = styled(Link)`
  background: #313434 !important;
  color: #fff !important;
  padding: 16px 30px !important;
  border: none !important;
  font-size: 13px !important;
  font-weight: 600 !important;
  text-decoration: none;
`;