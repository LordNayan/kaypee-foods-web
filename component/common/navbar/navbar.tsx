"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
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
  const [expanded, setExpanded] = useState(false); 
  const navRef = useRef(null); 

  // Close navbar when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !(navRef.current as HTMLElement).contains(event.target as Node)) {
        setExpanded(false); 
      }
    }

    if (expanded) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [expanded]);

  useEffect(() => {
    function handleScroll() {
      if (expanded) {
        setExpanded(false); // Close navbar on scroll
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [expanded]);

  return (
    <FramerMotionWrap>
      <StyledNavbar expand="lg" expanded={expanded} ref={navRef} collapseOnSelect>
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

          {/* Toggle Button */}
          <Navbar.Toggle
            aria-controls="main-nav"
            onClick={() => setExpanded(!expanded)} 
          />

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
                  onClick={() => setExpanded(false)} // Close navbar on click
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