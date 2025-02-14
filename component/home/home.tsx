"use client";

import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import ProductSection from "../common/productSection/productSection";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Parallax } from "swiper/modules";
import Link from "next/link";
import { Container } from "react-bootstrap";

const Home = () => {
  const slides = [
    {
      id: 1,
      title: "Rich, Smooth & Delicious",
      subtitle: "Cream-filled Chocolates",
      image: "./images/home/hero-slider/slide1.jpg",
    },
    {
      id: 2,
      title: "A Blast of Cream & Crunch",
      subtitle: "Wafer Rolls",
      image: "./images/home/hero-slider/slide2.jpg",
    },
    {
      id: 3,
      title: "A Perfect Gift for Every",
      subtitle: "Special Moment",
      image: "./images/home/hero-slider/slide3.jpg",
    },
  ];

  // const StyledHeader = styled.header`
  //   .swiper {
  //     width: 100%;
  //     height: 100vh;
  //   }

  //   .swiper-slide {
  //     position: relative;
  //     display: flex;
  //     align-items: center;
  //     justify-content: center;
  //     text-align: center;
  //     color: #fff;
  //   }

  //   .slide-inner {
  //     position: absolute;
  //     width: 100%;
  //     height: 100vh;
  //     background-size: cover;
  //     background-position: center;
  //     background-repeat: no-repeat;
  //     display: flex;
  //     align-items: center;
  //     justify-content: center;
  //     flex-direction: column;
  //     left: 0;
  //     top: 0;
  //     z-index: 1;
  //     flex-wrap: wrap;
  //     flex-direction: column;
  //     justify-content: center;
  //     padding: 0 150px;
  //   }

  //   h5 {
  //     font-size: 1.8rem;
  //     margin-bottom: 10px;
  //   }

  //   h2 {
  //     font-size: 3rem;
  //     margin-bottom: 20px;
  //   }

  //   .btn-ghost {
  //     display: inline-block;
  //     padding: 12px 30px;
  //     border: 2px solid #fff;
  //     color: #fff;
  //     text-transform: uppercase;
  //     font-weight: bold;
  //     transition: 0.3s;
  //     &:hover {
  //       background: #fff;
  //       color: #000;
  //     }
  //   }

  //   .swiper-button-next,
  //   .swiper-button-prev {
  //     color: #fff !important;
  //   }
  // `;

  const SlideTitleStyled = styled.h5`
    font-size: 36px;
    color: #fff;
    font-family: "Poppins", sans-serif;
    margin-bottom: 0;
  `;

  const SlideSubTitleStyled = styled.h2`
    font-size: 3vw;
    color: #fff;
    font-weight: 800;
    margin-bottom: 40px;
  `;

  const SwipeButtonStyle = styled.span`
    width: 180px;
    height: 54px;
    line-height: 52px;
    display: inline-block;
    border-radius: 54px;
    border-bottom: 4px solid rgba(0, 0, 0, 0.2);
    background: url("./images/common/button-bg/btn-bg.jpg");
    background-size: cover;
    color: #fff;
    font-weight: 800;
    font-size: 13px;
    text-align: center;
    position: relative;
    z-index: 2;
    overflow: hidden;
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);
  `;

  return (
    <div>
      {/* <StyledHeader> */}
      <Swiper
        modules={[Navigation, Pagination, Parallax]}
        navigation
        pagination={{ type: "fraction" }}
        parallax
        loop={true}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="slide-inner"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <Container
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                }}
              >
                <SlideTitleStyled>{slide.title}</SlideTitleStyled>
                <SlideSubTitleStyled>{slide.subtitle}</SlideSubTitleStyled>
                <Link href="/products">
                  <SwipeButtonStyle>GET STARTED</SwipeButtonStyle>
                </Link>
              </Container>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* </StyledHeader> */}

      <ProductSection />
    </div>
  );
};

export default Home;
