"use client";

import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Parallax } from 'swiper/modules';
import * as H from './styled';

const Container = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const Home = () => {
  const slides = [
    {
      image: './images/home/hero-slider/slide1.jpg',
      title: 'Rich, Smooth & Delicious',
      subtitle: 'Cream-filled Chocolates'
    },
    {
      image: './images/home/hero-slider/slide2.jpg',
      title: 'A Blast of Cream & Crunch',
      subtitle: 'Wafer Rolls'
    },
    {
      image: './images/home/hero-slider/slide3.jpg',
      title: 'A Perfect Gift for Every',
      subtitle: 'Special Moment'
    }
  ];

  return (
    <div>
      <h1>Welcome to My Next.js App!</h1>
      <H.HeroSection>
      <Swiper
        // modules={[Navigation, Pagination, Autoplay, Parallax]}
        // navigation={{
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // }}
        // pagination={{
        //   type: 'fraction',
        //   el: '.swiper-pagination',
        // }}
        // parallax={true}
        // autoplay={{
        //   delay: 5000,
        //   disableOnInteraction: false,
        // }}
        // loop={true}
        // style={{ height: '100%' }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <H.SlideInner backgroundImage={slide.image}>
              <H.SlideContent>
                <H.SlideSubtitle data-swiper-parallax="-200">
                  {slide.subtitle}
                </H.SlideSubtitle>
                <H.SlideTitle data-swiper-parallax="-300">
                  {slide.title}
                </H.SlideTitle>
                <H.HeroButton href="/products" data-swiper-parallax="-100">
                  <span data-hover="GET STARTED">GET STARTED</span>
                </H.HeroButton>
              </H.SlideContent>
            </H.SlideInner>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination"></div>
        <div className="swiper-button-next">
          <span data-hover="NEXT">NEXT</span>
        </div>
        <div className="swiper-button-prev">
          <span data-hover="PREV">PREV</span>
        </div>
      </Swiper>
    </H.HeroSection>
    </div>
  );
};

export default Home;
