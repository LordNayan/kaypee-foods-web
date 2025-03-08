"use client";

import Link from "next/link";
import Image from "next/image";
import { Navbar, Nav, Container } from "react-bootstrap";
import { navigation } from "@/constant/appRouting";
import FramerMotionWrap from "../framerMotionWrap/framerMotionWrap";
import {
  Logo,
  NavSecondLogo,
  StyledNavbar,
  StyledNavLink,
} from "./style";

const CustomNavbar = () => {
  return (
    <FramerMotionWrap>
      <StyledNavbar expand="lg" collapseOnSelect>
        <Container>
          <Logo>
            <Link href="/">
              <Image
                src="/images/common/navbar/logo.png"
                alt="brand-Logo"
                width={150}
                height={50}
              />
            </Link>
          </Logo>

          <Navbar.Toggle aria-controls="main-nav" />
          <Navbar.Collapse id="main-nav">
            <Nav className="ms-auto">
              {navigation?.map((item: any) => (
                <StyledNavLink
                  key={item?.id}
                  href={
                    item?.menu === "Catalogue"
                      ? "/images/doc/kaypee-food-catalog.pdf"
                      : item?.link
                  }
                  target={item?.targetBlank ? "_blank" : undefined}
                >
                  {item?.menu}
                </StyledNavLink>
              ))}
            </Nav>
          </Navbar.Collapse>

          <NavSecondLogo className="ms-auto">
            <img
              src="./images/common/navbar/kaypee_logo.png"
              alt="brand-logo"
            />
          </NavSecondLogo>
        </Container>
      </StyledNavbar>
    </FramerMotionWrap>
  );
};

export default CustomNavbar;
