import styled from 'styled-components';

export const ProductMain = styled.main`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 100vh;
  background: #fff;
  position: relative;
`;

export const ProductHeader = styled.header`
  background: url(images/products/bg-img/int-hero-products.jpg) center; 
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
  font-size: 8vw;
  color: #fff;
  display: block;
  font-weight: 800;
  margin-bottom: 20px;
  @media screen and (max-width: 767px) {
    font-size: 12vw;
  }
`;