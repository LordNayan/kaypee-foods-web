"use client";

import Link from "next/link";
import Image from "next/image";
import { Navbar, Nav, Container } from "react-bootstrap";
import styled from "styled-components";
import { navigation } from "@/constant/appRouting";

const StyledNavbar = styled(Navbar)`
  padding: 30px 40px;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 9;
  #main-nav {
    @media screen and (max-width: 767px) {
      position: relative;
    }
    .ms-auto {
      @media screen and (max-width: 767px) {
       position: absolute;
       top: 14px;
      }
    }
  }

  @media screen and (max-width: 767px) {
    padding: 30px 25px;
  }
`;

const Logo = styled.div`
  img {
    height: 93px;
    width: 200px;
    @media screen and (max-width: 767px) {
      height: 40px;
      width: 86px;
    }
  }
`;

const StyledNavLink = styled(Link)`
  color: #fff;
  font-size: 18px;
  text-decoration: none;
  padding-right: 26px;
  padding-left: 0.5rem;
  font-family: "Poppins", sans-serif;
  font-weight: 800;
    @media screen and (max-width: 767px) {
        color: #000000;
        background-color: #fff;
        padding: .5rem 1rem;
    }
  }
`;

const CustomNavbar = () => {
  return (
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
                href={item?.link}
                target={item?.targetBlank && "_blank"}
              >
                {item?.menu}
              </StyledNavLink>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  );
};

export default CustomNavbar;
