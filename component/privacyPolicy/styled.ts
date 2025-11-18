import styled from 'styled-components';

// Styled Components
export const PrivacyMain = styled.main`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  position: relative;
`;

export const PrivacyContentSection = styled.section`
  padding: 60px 0;
  background: #fff;
  width: 100%;
`;

export const PrivacyTitle = styled.h1`
  font-weight: 600;
  font-size: 3vw;
  color: #323434;
  margin-bottom: 50px;
  margin-top: 10vh;
  text-align: center;
  @media screen and (max-width: 767px) {
    font-size: 7vw;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 600;
  line-height: 1.2;
  color: #313434;
  margin-top: 40px;
  margin-bottom: 20px;
  @media screen and (max-width: 767px) {
    font-size: 6vw;
  }
`;

export const Paragraph = styled.p`
  font-size: 19px;
  line-height: 30px;
  color: #8f999a;
  font-family: "Poppins", sans-serif;
  padding-bottom: 10px !important;
  text-align: justify;
`;
