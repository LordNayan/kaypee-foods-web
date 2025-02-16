import { Form } from 'react-bootstrap';
import styled from 'styled-components';

export const DistributorsMain = styled.main`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  margin-top: 100vh;
`;

export const DistributorSection = styled.section`
  padding: 40px 0;
  width: 100%;
  background: #f8f9fa;
`;

export const Title = styled.h5`
    font-size: 25px;
    font-weight: 600;
    color: #313434;
`;

export const SubTitle = styled.h3`
    width: 100%;
    float: left;
    margin-bottom: 40px;
    margin-top: 10px;
    font-weight: 400;
    font-size: 14px;
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

export const Figure = styled.figure`
  img {
    width: 100%;
  }
`;