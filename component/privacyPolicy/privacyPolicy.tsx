"use client";

import React from "react";
import HeaderSection from "../common/headerSection/headerSection";
import { customHeaderSectionDetails } from "@/constant/constant";
import {
  PrivacyMain,
  PrivacyContentSection,
  PrivacyTitle,
  SectionTitle,
  Paragraph,
} from "./styled";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../common/footer/footer";
import FramerMotionWrap from "../common/framerMotionWrap/framerMotionWrap";

const PrivacyPolicy = () => {
  return (
    <div>
      <FramerMotionWrap>
        <PrivacyMain>
          <PrivacyContentSection>
            <Container>
              <Row>
                <Col xs={12}>
                  <PrivacyTitle>Privacy Policy</PrivacyTitle>
                  <Paragraph>
                    Kaypee Food Products respects your privacy. This Privacy
                    Policy provides succinctly the manner your data is
                    collected and used by Kaypee Food Products on the Site. As
                    a visitor to the Site/ Customer, you are advised to please
                    read the Privacy Policy carefully. By accessing the services
                    provided by the Site you agree to the collection and use of
                    your data by Kaypee Food Products in the manner provided in this Privacy
                    Policy.
                  </Paragraph>
                </Col>
              </Row>

              <Row>
                <Col xs={12}>
                  <SectionTitle>
                    What information is, or maybe, collected from you?
                  </SectionTitle>
                  <Paragraph>
                    As part of the registration process on the Site, Kaypee
                    food products may collect the following personally
                    identifiable information about you: Name including first and
                    last name, alternate email address, mobile phone number and
                    contact details, Postal code, address, etc.) and information
                    about the pages on the site you visit/access, the links you
                    click on the site, the number of times you access the page
                    and any such browsing information.
                  </Paragraph>
                </Col>
              </Row>

              <Row>
                <Col xs={12}>
                  <SectionTitle>How do we Collect the Information?</SectionTitle>
                  <Paragraph>
                    Kaypee Food Products will collect personally identifiable
                    information about you only as part of a voluntary
                    registration process, online survey or any combination
                    thereof. The Site may contain links to other Websites.
                    Kaypee Food Products is not responsible for the privacy
                    practices of such Web sites that it does not own, manage or
                    control. The Site and third-party vendors, including Google,
                    use first-party cookies (such as the Google Analytics
                    cookie) and third-party cookies (such as the DoubleClick
                    cookie) together to inform, optimize, and serve ads based on
                    someone's past visits to the Site.
                  </Paragraph>
                </Col>
              </Row>

              <Row>
                <Col xs={12}>
                  <SectionTitle>How is information used?</SectionTitle>
                  <Paragraph>
                    Kaypee Food Products will use your personal information to
                    provide personalized features to you on the Site and to
                    provide promotional offers to you through the Site and other
                    channels. Kaypee Food Products will also provide this
                    information to its business associates and partners to get
                    in touch with you when necessary to provide the services
                    requested by you. Kaypee Food Products will use this
                    information to preserve transaction history as governed by
                    existing law or policy. Kaypee Food Products may also use
                    contact information internally to direct its efforts for
                    product improvement, to contact you as a survey respondent,
                    to notify you if you win any contest; and send you
                    promotional materials from its contest sponsors or
                    advertisers. Kaypee Food Products will also use this
                    information to serve you various promotional and advertising
                    materials via display advertisements through the Google Ad
                    network on third-party websites. You can opt out of Google
                    Analytics for Display Advertising and customize Google
                    Display Network ads using the Ads Preferences Manager.
                  </Paragraph>
                </Col>
              </Row>

              <Row>
                <Col xs={12}>
                  <SectionTitle>
                    With whom will your information be shared?
                  </SectionTitle>
                  <Paragraph>
                    Kaypee Food Products will not use your financial information
                    for any purpose other than to complete a transaction with
                    you. Kaypee Food Products does not rent, sell or share your
                    personal information and will not disclose any of your
                    personally identifiable information to third parties. In
                    cases where it has your permission to provide products or
                    services you've requested and such information is necessary,
                    the information may be shared with Kaypee Food Products's
                    business associates and partners. In addition Kaypee
                    food products may use this information for promotional
                    offers, to help investigate, prevent or take action
                    regarding unlawful and illegal activities, suspected fraud,
                    potential threat to the safety or security of any person,
                    violations of the Site's terms of use or to defend against
                    legal claims; special circumstances such as compliance with
                    subpoenas, court orders, requests/order from legal
                    authorities or law enforcement agencies requiring such
                    disclosure.
                  </Paragraph>
                </Col>
              </Row>
            </Container>
          </PrivacyContentSection>
          <Footer />
        </PrivacyMain>
      </FramerMotionWrap>
    </div>
  );
};

export default PrivacyPolicy;
