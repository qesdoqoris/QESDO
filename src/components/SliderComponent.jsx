import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import buildingWebP from '../assets/qoris-building.webp';
import stadiumWebP from '../assets/qoris-stadium.webp';
import qabridaharViewWebP from '../assets/qabridahar-view.webp';

// Updated color constants based on your design system
const COLORS = {
  primary: '#1a3f8f',
  primaryDark: '#122e6b',
  primaryLight: '#2a5bb5',
  secondary: '#5bb4e8',
  secondaryDark: '#3f9ad3',
  secondaryLight: '#8ccbf0',
  background: '#f7f7f7',
  surface: '#ffffff',
  card: '#ffffff',
  text: '#212529',
  textSecondary: '#495057',
  textTertiary: '#6C757D',
  textInverse: '#ffffff',
  border: 'rgba(0, 0, 0, 0.08)',
  gradient: 'linear-gradient(135deg, #1a3f8f 0%, #2a5bb5 50%, #5bb4e8 100%)',
  gradientPrimary: 'linear-gradient(135deg, #1a3f8f 0%, #2a5bb5 100%)',
  gradientSecondary: 'linear-gradient(135deg, #5bb4e8 0%, #8ccbf0 100%)',
  overlay: 'rgba(0, 0, 0, 0.4)',
};

// Create image objects with WebP and dynamic fallbacks
const heroImages = [
  {
    id: 1,
    webp: buildingWebP,
    alt: 'QORIS building in Qabridahar',
    heading: 'Educate, Empower, and Transform',
    description:
      'QESDO provides transformative education and social development programmes that build knowledge and character, preserve cultural heritage, strengthen capacity, good governance and ethical leadership, and improve the economic wellbeing of the communities we serve.',
    buttonText: 'Donate',
    buttonLink: '/donate',
  },
  {
    id: 2,
    webp: stadiumWebP,
    alt: 'Young people playing football at the QORIS Mini Football Stadium',
    heading: 'Youth Development and Sports',
    description:
      'The QORIS Mini Football Stadium provides sport and recreation for young people in Qabridahar and the surrounding communities.',
    buttonText: 'Partner With Us',
    buttonLink: '/get-involved',
  },
  {
    id: 3,
    webp: qabridaharViewWebP,
    alt: 'View over Qabridahar showing the QORIS Mini Football Stadium, a mosque and a QORIS building',
    heading: 'Sponsor a Child',
    description:
      'More than 890 students are served across academic and Islamic/Quranic studies. Child sponsorship of $25 per month, or $250 per year, helps families who cannot pay school fees.',
    buttonText: 'Sponsor a Child',
    buttonLink: '/donate#sponsor-a-child',
  },
];

const SliderContainer = styled.div`
  width: 100vw;
  left: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  position: relative;
  overflow: hidden;
  
  /* Override slick slider default styles */
  .slick-slider {
    width: 100vw;
    margin: 0;
    padding: 0;
  }
  
  .slick-list {
    width: 100vw;
    margin: 0;
    padding: 0 !important; /* Override inline styles */
  }
  
  .slick-track {
    width: 100%;
  }
  
  /* Override dots styling */
  .slick-dots {
    bottom: 20px;
    padding: 0;
    margin: 0;
    width: 100%;
    
    li {
      margin: 0 4px;
      
      button {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: ${COLORS.textInverse};
        opacity: 0.6;
        transition: all 0.3s ease;
        
        &::before {
          display: none;
        }
        
        &:hover {
          opacity: 0.8;
        }
      }
      
      &.slick-active button {
        background: ${COLORS.secondary};
        opacity: 1;
        transform: scale(1.2);
      }
    }
  }
  
  /* Override arrow styling */
  .slick-prev,
  .slick-next {
    width: 50px;
    height: 50px;
    z-index: 5;
    background: ${COLORS.primary};
    border-radius: 50%;
    transition: all 0.3s ease;
    
    &:hover {
      background: ${COLORS.primaryDark};
      transform: scale(1.1);
    }
    
    &::before {
      font-size: 20px;
      color: ${COLORS.secondary};
      opacity: 1;
    }
  }
  
  .slick-prev {
    left: 20px;
  }
  
  .slick-next {
    right: 20px;
  }
`;

const Slide = styled.div`
  height: 100vh; /* Changed to 100vh to fill the entire viewport height on mobile */
  max-height: 800px; /* Added max-height to prevent it from becoming too tall on larger screens */
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw !important; /* Force full width */
  
  @media (min-width: 481px) {
    height: 90vh; /* Slightly reduced on small tablets */
    min-height: 500px;
  }
  
  @media (min-width: 769px) {
    height: 80vh; /* Further reduced on tablets */
    min-height: 600px;
  }
  
  @media (min-width: 1025px) {
    height: 780px; /* Keep original height for desktops */
  }
`;

const SlideImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
`;

const BackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${COLORS.gradientPrimary};
  opacity: 0.7;
  z-index: 1;
`;

const SlideInner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
  padding: 15px 20px; /* Start with mobile padding */
  z-index: 2;
  
  @media (min-width: 481px) {
    padding: 15px 40px;
  }
  
  @media (min-width: 769px) {
    padding: 15px 80px;
    max-width: 1340px;
  }
`;

const SlideContents = styled.div`
  width: 100%; /* Full width on mobile */
  margin: 0 auto;
  
  @media (min-width: 769px) {
    max-width: 610px;
  }
`;

const SlideHeading = styled.h2`
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  font-size: 30px; /* Start with mobile font size */
  font-weight: 800;
  line-height: 1.25em;
  color: ${COLORS.textInverse};
  margin-bottom: 15px; /* Smaller margin on mobile */
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  
  @media (min-width: 481px) {
    font-size: 40px;
    margin-bottom: 20px;
  }
  
  @media (min-width: 769px) {
    font-size: 50px;
  }
  
  @media (min-width: 1025px) {
    font-size: 60px;
  }
`;

const SlideDescription = styled.p`
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  font-size: 14px; /* Start with mobile font size */
  font-weight: 400;
  line-height: 1.75em;
  color: ${COLORS.textInverse};
  margin-bottom: 30px; /* Smaller margin on mobile */
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  opacity: 0.95;
  
  @media (min-width: 481px) {
    font-size: 16px;
    margin-bottom: 40px;
  }
  
  @media (min-width: 769px) {
    font-size: 18px;
    margin-bottom: 50px;
  }
  
  @media (min-width: 1025px) {
    font-size: 20px;
    margin-bottom: 60px;
  }
`;

const SlideButton = styled.a`
  background-color: ${COLORS.secondary};
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  font-size: 12px; /* Start with mobile font size */
  font-weight: 700;
  text-transform: uppercase;
  color: ${COLORS.text};
  border: 2px solid ${COLORS.secondary};
  padding: 8px 16px; /* Smaller padding on mobile */
  text-decoration: none;
  border-radius: 100px;
  transition: all 0.3s ease;
  display: inline-block;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;

  &:hover {
    background-color: ${COLORS.secondaryDark};
    color: ${COLORS.text};
    border-color: ${COLORS.secondaryDark};
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  }
  
  &:focus-visible {
    outline: 2px solid ${COLORS.secondaryLight};
    outline-offset: 2px;
  }
  
  @media (min-width: 481px) {
    font-size: 14px;
    padding: 12px 24px;
  }
`;

// Define a style block to be injected into the component
const GlobalSliderStyles = styled.style`
  /* Override any Slick inline styles that might add padding or margins */
  .slick-slider, .slick-list, .slick-track {
    margin: 0 !important;
    padding: 0 !important;
    width: 100vw !important;
  }
  
  .slick-slide, .slick-slide > div {
    width: 100vw !important;
    margin: 0 !important;
    padding: 0 !important;
  }
`;

const SliderComponent = () => {
  const [sliderRef, setSliderRef] = useState(null);
  
  // Keep track of the Slider instance
  const handleSliderInit = (slider) => {
    setSliderRef(slider);
  };

  // Preload images and ensure slider is properly initialized
  useEffect(() => {
    // Create an array of image elements to preload
    const preloadImages = heroImages.map(slide => {
      const img = new Image();
      img.src = slide.webp;
      return img;
    });

    // Function to ensure autoplay is working
    const ensureAutoplay = () => {
      if (sliderRef) {
        // Force refresh the slider
        sliderRef.slickPlay();
      }
    };

    // Set a timeout to ensure autoplay after images are loaded
    const timeoutId = setTimeout(ensureAutoplay, 500);

    // Override any inline styles that might be limiting width
    const overrideInlineStyles = () => {
      if (sliderRef) {
        const slickList = document.querySelector('.slick-list');
        if (slickList) {
          slickList.style.padding = '0';
          slickList.style.margin = '0';
          slickList.style.width = '100vw';
        }
      }
    };
    
    // Apply override after a small delay to ensure the slider is rendered
    const overrideTimeoutId = setTimeout(overrideInlineStyles, 100);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(overrideTimeoutId);
    };
  }, [sliderRef]);

  const settings = {
    dots: false, /* Start with no dots on mobile */
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false, /* Start with no arrows on mobile */
    initialSlide: 0,
    lazyLoad: 'ondemand',
    ref: handleSliderInit,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          arrows: true,
          dots: true,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          dots: false,
        },
      },
    ],
  };

  return (
    <SliderContainer>
      {/* Inject global styles to override slick's inline styles */}
      <GlobalSliderStyles />
      
      {/* Preload all images with proper hidden elements */}
      <div style={{ display: 'none' }}>
        {heroImages.map(slide => (
          <img 
            key={`preload-${slide.id}`} 
            src={slide.webp} 
            alt="" 
            aria-hidden="true"
          />
        ))}
      </div>
      
      <Slider {...settings}>
        {heroImages.map((slide) => (
          <Slide key={slide.id}>
            <SlideImage src={slide.webp} role="img" aria-label={slide.alt} />
            <BackgroundOverlay />
            <SlideInner>
              <SlideContents>
                <SlideHeading>{slide.heading}</SlideHeading>
                <SlideDescription>{slide.description}</SlideDescription>
                <SlideButton href={slide.buttonLink}>
                  {slide.buttonText}
                </SlideButton>
              </SlideContents>
            </SlideInner>
          </Slide>
        ))}
      </Slider>
    </SliderContainer>
  );
};

export default SliderComponent;