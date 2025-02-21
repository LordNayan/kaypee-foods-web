import styled from "styled-components";
import { motion } from "framer-motion";

export const FooterWrapper = styled.div`
  width: 100%;
  background: #313434;
  position: relative;
`;

export const FooterContainer = styled.footer`
  display: flex;
  padding: 100px 0;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    padding: 75px 10px;
    gap: 35px;
  }
`;

export const ContentBox = styled(motion.div)`
  width: 100%;
  animation: fadeIn 0.5s forwards;
`;

export const FooterTitle = styled.h2`
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 30px;
  opacity: 0.5;
  color: #989a9a;
  @media screen and (max-width: 767px) {
    margin-bottom: 20px;
  }
`;

export const FooterBodyTitle = styled.span`
  font-family: "Poppins", sans-serif;
  font-weight: bolder;
  color: #fff;
`;

export const FooterBodyAnchor = styled.a`
  text-decoration: none;
  font-size: 17px;
  font-family: "Poppins", sans-serif;
  line-height: 32px;
  margin: 0;
  color: #fff;
`;

export const FooterBody = styled.p`
  font-size: 17px;
  line-height: 32px;
  color: #fff;
  margin: auto 0;
`;

export const SubFooter = styled.footer`
  padding: 40px 0px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    align-items: flex-start;
    flex-direction: column;
  }

  small {
    display: block;
    text-align: center;
  }

  ul {
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
    margin: auto 0;

    li {
      margin: 0 1rem;

      a {
        color: white;
        text-decoration: none;
      }
    }
  }
`;

export const FooterEndTitle = styled.small`
    margin-left: 0;
    color: #fff;
    font-size: 12px;
    font-weight: 400;
`;

export const IconsStyle = styled.div`
    margin-left: 30px;
    @media screen and (max-width: 767px) {
        margin: 0 10px 0 0;
    }
`;