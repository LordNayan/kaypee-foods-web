import styled from 'styled-components';

export const ProductHeader = styled.header<{ backgroundImage: string }>`
  background: url(${(props) => props.backgroundImage}) center center / cover no-repeat;
  // background-size: contain;
  // background-position: center;
  // background-repeat: no-repeat;
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

export const ProductTitle = styled.h2`
  font-size: 6vw;
  color: #fff;
  display: block;
  font-weight: 800;
  margin-bottom: 20px;
  @media screen and (max-width: 767px) {
    font-size: 12vw;
  }
`;