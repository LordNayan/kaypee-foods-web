"use client";

import React from "react";
import ProductSection from "../common/productSection/productSection";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Parallax, Autoplay } from "swiper/modules";
import Link from "next/link";
import { Container } from "react-bootstrap";
import Footer from "../common/footer/footer";
import { HomeMain, SlideSubTitleStyled, SlideTitleStyled, StyledHeader, SwipeButtonStyle } from "./styled";
import TextContentBlock from "./textContentBlock";

const Home = () => {
  const slides = [
    {
      id: 1,
      title: "",
      subtitle: "",
      image: "./images/home/hero-slider/slide4.png",
    },
    {
      id: 2,
      title: "",
      subtitle: "",
      image: "./images/home/hero-slider/slide5.png",
    },
    {
      id: 3,
      title: "",
      subtitle: "",
      image: "./images/home/hero-slider/slide6.png",
    },
    {
      id: 4,
      title: "",
      subtitle: "",
      image: "./images/home/hero-slider/slide7.png",
    },
    {
      id: 5,
      title: "",
      subtitle: "",
      image: "./images/home/hero-slider/slide8.png",
    },
    {
      id: 6,
      title: "",
      subtitle: "",
      image: "./images/home/hero-slider/slide9.png",
    },
    {
      id: 7,
      title: "",
      subtitle: "",
      image: "./images/home/hero-slider/slide10.png",
    },
    {
      id: 8,
      title: "",
      subtitle: "",
      image: "./images/home/hero-slider/slide11.png",
    },
  ];

  return (
    <div>
      <StyledHeader>
        <Swiper
          modules={[Navigation, Pagination, Parallax, Autoplay]}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{
            type: "fraction",
            renderFraction: function (currentClass, totalClass) {
              return `<span class="${currentClass}">00</span>/<span class="${totalClass}">0</span>`;
            },
          }}
          onSlideChange={(swiper) => {
            // Ensure elements exist before modifying them
            const currentEl = document.querySelector(".swiper-pagination-current");
            const totalEl = document.querySelector(".swiper-pagination-total");
  
            if (currentEl && totalEl) {
              currentEl.textContent = String(swiper.realIndex + 1).padStart(2, "0"); // Format as 01, 02, etc.
              totalEl.textContent = String(swiper.slides.length); // Keep total as is (3)
            }
          }}
          onInit={(swiper) => {
            // Ensure elements exist before modifying them
            const currentEl = document.querySelector(".swiper-pagination-current");
            const totalEl = document.querySelector(".swiper-pagination-total");
  
            if (currentEl && totalEl) {
              currentEl.textContent = String(swiper.realIndex + 1).padStart(2, "0"); // Format as 01, 02, etc.
              totalEl.textContent = String(swiper.slides.length); // Keep total as is (3)
            }
          }}
          parallax
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          effect="fade" // Use fade effect for smoother transitions
          speed={600} // Adjust speed for transition
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
          {/* Custom Navigation Buttons */}
        <div className="swiper-button-prev" data-text="PREV">PREV</div>     
        <div className="swiper-button-next" data-text="NEXT">NEXT</div>
        </Swiper>
      </StyledHeader>
      <HomeMain>
        <ProductSection />
        <TextContentBlock />
        <Footer />
      </HomeMain>
    </div>
  );
};

export default Home;
