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
import FramerMotionWrap from "../common/framerMotionWrap/framerMotionWrap";

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
      email: Yup.string()
        .required("Email is required")
        .email("Invalid email format")
        .matches(
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          "Invalid email format"
        ),
      phone: Yup.string()
        .required("Phone number is required")
        .matches(/^\d{10}$/, "Phone number must be exactly 10 digits"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: (values) => {
      // if (!captchaValue) {
      //   setErrorMessage("Please complete the reCAPTCHA");
      //   return;
      // }

      const phoneNumber = "+917999570646"; // Replace with your WhatsApp number (in international format without +)
      const message = encodeURIComponent(
        `Name: ${values.name}\nEmail: ${values.email}\nPhone: ${values.phone}\nMessage: ${values.message}`
      );

      // Construct the WhatsApp URL with the pre-filled message
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

      // Open the WhatsApp URL in a new tab
      window.open(whatsappUrl, "_blank");

      // Clear success/error messages
      setSuccessMessage("Redirecting to WhatsApp...");
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
      <FramerMotionWrap>
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
                  {errorMessage && (
                    <Alert variant="danger">{errorMessage}</Alert>
                  )}
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
                        type="text"
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
                    {/* <Form.Group>
                    <ReCAPTCHA
                      sitekey="your-site-key"
                      onChange={(value: any) => setCaptchaValue(value)}
                    />
                  </Form.Group> */}
                    <Submit type="submit">SUBMIT</Submit>
                  </Form>
                </Col>
              </Row>

              <MapContainer
                className="col-12 wow fadeIn animated"
                style={{ visibility: "visible", animationName: "fadeIn" }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3578.3336700555737!2d78.2181328!3d26.250832!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c77aaaaaaaab%3A0x23661c94af873bfa!2sKAYPEE%20FOOD%20PRODUCTS!5e0!3m2!1sen!2sin!4v1739894841969!5m2!1sen!2sin"
                  width="600"
                  height="450"
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
                        <b>KAYPEE FOOD PRODUCTS</b>
                        <br />
                        B22/3, Pinto Park,
                        <br />
                        Industrial Area,
                        <br />
                        Maharajpura, Gwalior,
                        <br />
                        Madhya Pradesh 474004
                      </>
                    }
                  />
                  <ContactBox
                    title="Factory Address"
                    content={
                      <>
                        <b>KAYPEE FOOD PRODUCTS</b>
                        <br />
                        B22/3, Pinto Park,
                        <br />
                        Industrial Area,
                        <br />
                        Maharajpura, Gwalior,
                        <br />
                        Madhya Pradesh 474004
                      </>
                    }
                  />
                  <ContactBox
                    title="LET'S TALK"
                    content={
                      <>
                        <a href="tel:919833467323">+917879747859</a> <br />
                        <h6 style={{ marginTop: "30px" }}>REACH US</h6>
                        <a href="mailto:kaypeefood@gmail.com">
                          kaypeefood@gmail.com
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
      </FramerMotionWrap>
    </div>
  );
};

export default ContactUs;
