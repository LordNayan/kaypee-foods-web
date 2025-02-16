import Link from 'next/link';
import { Row } from 'react-bootstrap';
import styled from 'styled-components';

// Styled Components
export const TextContentSection = styled.section`
  padding: 60px 0;
  background: #fff;
  width: 100%;
`;

export const Figure = styled.figure`
  img {
    width: 100%;
  }
`;

export const Title = styled.h4`
  font-weight: 600;
  font-size: 3vw;
  margin-bottom: 50px;
  @media screen and (max-width: 767px) {
    font-size: 7vw;
  }
`;

export const SubTitle = styled.h3`
    font-size: 1.75rem;
    font-weight: 500;
    line-height: 1.2;
    color: #313434;
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

export const AboutMain = styled.main`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  margin-top: 100vh;
`;

export const CustomRow = styled(Row)`
  margin-top: 60px;
`;

export const Image = styled.img`
  width: 100%;
`;