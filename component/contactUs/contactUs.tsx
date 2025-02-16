"use client";

import React, { useState } from "react";
import HeaderSection from "../common/headerSection/headerSection";
import { customHeaderSectionDetails } from "@/constant/constant";
import {
  ContactBoxContainer,
  ContactSection,
  ContactUsMain,
  GetInTitle,
  GetInTouchHeading,
  GetInTouchWrapper,
  MapContainer,
  StyledLabel,
  StyledText,
  Submit,
  SubTitle,
  Title,
} from "./styled";

import { useFormik } from "formik";
import * as Yup from "yup";
import { Container, Row, Col, Form, Alert } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
import styled from "styled-components";
import Footer from "../common/footer/footer";

const ContactUs = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [captchaValue, setCaptchaValue] = useState(null);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      phone: Yup.string().required("Phone number is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: (values) => {
      if (!captchaValue) {
        setErrorMessage("Please complete the reCAPTCHA");
        return;
      }
      console.log("Form Submitted:", values);
      setSuccessMessage("Your message was sent successfully!");
      setErrorMessage("");
      formik.resetForm();
      setCaptchaValue(null);
    },
  });

  const ContactBox = ({ title, content }: any) => {
    return (
      <ContactBoxContainer
        className="col-md-4 wow fadeIn animated"
        style={{ visibility: "visible", animationName: "fadeIn" }}
      >
        <div className="contact-box">
          <h6>{title}</h6>
          <p>{content}</p>
        </div>
      </ContactBoxContainer>
    );
  };

  return (
    <div>
      <HeaderSection pageDetails={customHeaderSectionDetails?.contactUs} />
      <ContactUsMain>
        <ContactSection>
          <Container>
            <Row>
              <Col md={5} className="mt-4">
                <Title>CONTACT FORM</Title>
                <SubTitle>If you have any questions just ask us</SubTitle>
              </Col>
              <Col md={6} className="mt-4">
                {successMessage && (
                  <Alert variant="success">{successMessage}</Alert>
                )}
                {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
                <Form onSubmit={formik.handleSubmit}>
                  <Form.Group>
                    <StyledLabel>Your Name *</StyledLabel>
                    <StyledText
                      type="text"
                      name="name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isInvalid={formik.touched.name && !!formik.errors.name}
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.name}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Row>
                    <Col md={6}>
                      <Form.Group>
                        <StyledLabel>Your Email *</StyledLabel>
                        <StyledText
                          type="email"
                          name="email"
                          value={formik.values.email}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          isInvalid={
                            formik.touched.email && !!formik.errors.email
                          }
                        />
                        <Form.Control.Feedback type="invalid">
                          {formik.errors.email}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <StyledLabel>Phone Number *</StyledLabel>
                        <StyledText
                          type="text"
                          name="phone"
                          value={formik.values.phone}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          isInvalid={
                            formik.touched.phone && !!formik.errors.phone
                          }
                        />
                        <Form.Control.Feedback type="invalid">
                          {formik.errors.phone}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group>
                    <StyledLabel>Your Message *</StyledLabel>
                    <StyledText
                      style={{ marginBottom: "20px" }}
                      as="textarea"
                      name="message"
                      value={formik.values.message}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isInvalid={
                        formik.touched.message && !!formik.errors.message
                      }
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group>
                    <ReCAPTCHA
                      sitekey="your-site-key"
                      onChange={(value: any) => setCaptchaValue(value)}
                    />
                  </Form.Group>
                  <Submit type="submit">SUBMIT</Submit>
                </Form>
              </Col>
            </Row>

            <MapContainer
              className="col-12 wow fadeIn animated"
              style={{ visibility: "visible", animationName: "fadeIn" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3708.044291125175!2d72.14368571425666!3d21.662134371231172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395f59017287e541%3A0xa513f8ac7769157d!2sMR+Nutriments+LLP!5e0!3m2!1sen!2sin!4v1557486722929!5m2!1sen!2sin"
                loading="lazy"
              ></iframe>
            </MapContainer>

            <GetInTouchWrapper>
              <GetInTitle>
                <GetInTouchHeading>Get in touch</GetInTouchHeading>
              </GetInTitle>

              <Row>
                <ContactBox
                  title="Office Address"
                  content={
                    <>
                      <b>MR Nutriments LLP</b> <br />
                      Flat No. 305, Alishan Flat, <br />
                      Shishuvihar Circle, <br />
                      Bhavnagar - 364001 <br />
                      Gujarat, India
                    </>
                  }
                />
                <ContactBox
                  title="Factory Address"
                  content={
                    <>
                      <b>MR Nutriments LLP</b> <br />
                      Survey No. 184, Block No. 144/1/3, <br />
                      Plot No. 4/B, At. Malpar, Mamsa Area, <br />
                      Ta. Ghogha, Dist. Bhavnagar, <br />
                      Gujarat, India
                    </>
                  }
                />
                <ContactBox
                  title="LET'S TALK"
                  content={
                    <>
                      <a href="tel:919833467323">+91 9833467323</a> <br />
                      <h6 style={{ marginTop: "30px" }}>REACH US</h6>
                      <a href="mailto:mrnutriments@gmail.com">
                        mrnutriments@gmail.com
                      </a>
                    </>
                  }
                />
              </Row>
            </GetInTouchWrapper>
          </Container>
        </ContactSection>
        <Footer />
      </ContactUsMain>
    </div>
  );
};

export default ContactUs;
