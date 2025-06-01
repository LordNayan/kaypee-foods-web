import Link from 'next/link';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  height: 100%;
  position: fixed;
  &::before {
    content: "";
    width: 60%;
    height: 20px;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 2;
  }
  &::after {
    content: "";
    width: 60%;
    height: 70px;
    position: absolute;
    left: 40px;
    bottom: 0;
    z-index: 2;
    @media screen and (max-width: 767px) {
      height: 30px;
      left: 25px;
    }
  }
`;

export const SlideTitleStyled = styled.h5`
  font-size: 36px;
  color: #fff;
  font-family: "Poppins", sans-serif;
  margin-bottom: 0;
  @media screen and (max-width: 767px) {
    font-size: 17px;
  }
`;

export const SlideSubTitleStyled = styled.h2`
  font-size: 3vw;
  color: #fff;
  font-weight: 800;
  margin-bottom: 40px;
  @media screen and (max-width: 767px) {
    font-size: 50px;
    margin-bottom: 20px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100px;
`;

export const TextStyled = styled.p`
  margin: 0;
  // padding: 10px;
  font-size: 20px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  font-weight: 800;
  font-size: 13px;
  transition: transform 0.3s ease, opacity 0.3s ease;
`;

export const TextHover = styled(TextStyled)`
  opacity: 0;
  transform: translateY(100%);
`;

export const StyledTextContainer = styled(TextContainer)`
  &:hover ${TextStyled} {
    transform: translateY(-100%);
    opacity: 0;
  }

  &:hover ${TextHover} {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const SwipeButtonStyle = styled.span`
  width: 180px;
  height: 54px;
  line-height: 52px;
  display: inline-block;
  border-radius: 54px;
  border-bottom: 4px solid rgba(0, 0, 0, 0.2);
  background: url("./images/common/button-bg/btn-bg.jpg");
  background-size: cover;
  color: #fff;
  font-weight: 800;
  font-size: 13px;
  text-align: center;
  position: relative;
  z-index: 2;
  overflow: hidden;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);
`;

export const HomeMain = styled.main`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  // position: relative;
`;

// Styled Components
export const TextContentSection = styled.section`
  padding: 60px 0;
  background: #fff;
  width: 100%;
  position: relative;
`;

export const Figure = styled.figure`
  img {
    width: 100%;
  }
`;

export const Title = styled.h4`
  font-weight: 600;
  font-size: 3vw;
  color: #323434;
  margin-bottom: 50px;
  @media screen and (max-width: 767px) {
    font-size: 7vw;
  }
`;

export const Paragraph = styled.p`
  font-size: 19px;
  line-height: 30px;
  color: #8f999a;
  font-family: "Poppins", sans-serif;
  padding-bottom: 10px !important;
`;

export const ReadMore = styled(Link)`
  background: #313434 !important;
  color: #fff !important;
  padding: 16px 30px !important;
  border: none !important;
  font-size: 13px !important;
  font-weight: 600 !important;
  text-decoration: none;
`;

export const BrandLogo = styled.div`
  position: absolute;
  bottom: 82px;
  @media screen and (max-width: 767px) {
    left: 25px;
  }
  img {
      margin-left: 33px;
      height: 120px;
      width: 140px;
      @media screen and (max-width: 767px) {
        height: 85px;
        width: 100px;
      }
    }
`;