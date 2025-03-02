import Link from "next/link";
import { Navbar } from "react-bootstrap";
import styled from "styled-components";

export const StyledNavbar = styled(Navbar)`
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

export const Logo = styled.div`
  img {
    height: 93px;
    width: 200px;
    @media screen and (max-width: 767px) {
      height: 40px;
      width: 86px;
    }
  }
`;

export const StyledNavLink = styled(Link)`
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

export const NavSecondLogo = styled.div`
  @media screen and (max-width: 767px) {
    display: none;
  }
  img {
      height: 93px;
    }
`;