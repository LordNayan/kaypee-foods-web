"use client";

import React, { useState } from "react";
import HeaderSection from "../common/headerSection/headerSection";
import { customHeaderSectionDetails } from "@/constant/constant";
import {
  DistributorSection,
  DistributorsMain,
  Figure,
  StyledLabel,
  StyledText,
  Submit,
  SubTitle,
  Title,
} from "./styled";
import { Alert, Col, Container, Form, Row } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
import { useFormik } from "formik";
import * as Yup from "yup";
import Footer from "../common/footer/footer";

const Distributors = () => {
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

  return (
    <div>
      <HeaderSection pageDetails={customHeaderSectionDetails?.distributors} />
      <DistributorsMain>
        <DistributorSection>
          <Container>
            <Row>
              <Title>Distributors Form</Title>
              <SubTitle>
                We are always looking for enthusiastic and growth seeking
                distributors across the country. Looking forward to growing your
                business with us? Fill this form and we will reach out to you.
              </SubTitle>
            </Row>
            <Row>
              <Col md={5} className="mt-4">
                <Figure>
                  <img
                    src="/images/about-us/text-wrapper-image.jpg"
                    alt="text-wrapper-image"
                  />
                </Figure>
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
                      type="text"
                      name="message"
                      value={formik.values.message}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isInvalid={formik.touched.message && !!formik.errors.message}
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
          </Container>
        </DistributorSection>
        <Footer />
      </DistributorsMain>
    </div>
  );
};

export default Distributors;
