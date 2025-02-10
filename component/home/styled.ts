import styled from 'styled-components';

export const HeroSection = styled.header`
  height: 100vh;
  position: relative;
  overflow: hidden;
  margin-top: 80px;

  .swiper {
    height: 100%;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: #fff;
    transition: all 0.3s ease;
    
    span {
      position: relative;
      display: block;
      
      &:after {
        content: attr(data-hover);
        position: absolute;
        top: 100%;
        left: 0;
        opacity: 0;
        transform: translateY(10px);
        transition: all 0.3s ease;
      }
      
      &:hover:after {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }

  .swiper-pagination {
    color: #fff;
  }
`;

export const SlideInner = styled.div<{ backgroundImage: string }>`
  height: 100%;
  background: url(${props => props.backgroundImage}) no-repeat center center;
  background-size: cover;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
  }
`;

export const SlideContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
  z-index: 2;
  width: 100%;
  max-width: 1200px;
  padding: 0 2rem;
`;

export const SlideTitle = styled.h2`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  transform: translateY(0);
  transition: transform 0.5s ease;
`;

export const SlideSubtitle = styled.h5`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  transform: translateY(0);
  transition: transform 0.5s ease;
`;

export const HeroButton = styled.a`
  display: inline-block;
  padding: 1rem 2rem;
  background: transparent;
  border: 2px solid #fff;
  color: #fff;
  font-weight: 600;
  text-transform: uppercase;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  span {
    position: relative;
    z-index: 1;
    transition: color 0.3s ease;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: #fff;
    transition: width 0.3s ease;
  }

  &:hover {
    span {
      color: #f03a37;
    }
    
    &:before {
      width: 100%;
    }
  }
`;