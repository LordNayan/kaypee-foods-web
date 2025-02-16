import { Form } from 'react-bootstrap';
import styled from 'styled-components';

export const ContactUsMain = styled.main`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  margin-top: 100vh;
`;

export const ContactSection = styled.section`
  padding: 40px 0;
  width: 100%;
  background: #f8f9fa;
`;

export const Title = styled.h5`
    font-weight: 800;
    font-size: 13px;
    color: #8f999a;
`;

export const SubTitle = styled.h3`
    font-weight: 400;
    font-size: 38px;
    line-height: 1.2;
    color: #313434;
`;

export const StyledLabel = styled(Form.Label)`
  width: 100%;
  float: left;
  line-height: 54px;
  font-weight: 500;
  color: #313434;
`;

export const StyledText = styled(Form.Control)`
    width: 100%;
    float: left;
    height: 54px;
    padding: 0 20px;
    border: none;
    background: #f3f3f3;
`;

export const Submit = styled.button`
    margin-top: 94px;
    height: 54px;
    background: #313434;
    color: #fff;
    padding: 0 30px;
    border: none;
    font-size: 13px;
    font-weight: 600;
`;

export const MapContainer = styled.div`
  margin: 30px 0;
  width: 100%;
  height: 450px;
  overflow: hidden;

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

export const GetInTouchWrapper = styled.div`

`;

export const GetInTitle = styled.div`
    width: 100%;
    float: left;
    margin-bottom: 40px;
    margin-top: 10px;
`;

export const GetInTouchHeading = styled.h3`
    font-family: "Poppins", sans-serif;
    font-size: 38px;
`;


export const ContactBoxContainer = styled.div`
.contact-box {
  background: #f8f9fa; /* Light background */
  margin-bottom: 20px;

  h6 {
    margin-bottom: 10px;
    font-size: 16px;
    font-weight: bold;
    color: #313434;
  }

  p {
    line-height: 30px;
    font-size: 18px;
    color: #8f999a;
  }

  a {
    color: #8f999a;
    text-decoration: none;
    margin-bottom: 30px;
    &:hover {
      text-decoration: underline;
    }
  }
}
`;
