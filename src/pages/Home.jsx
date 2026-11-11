import React, { useEffect, useRef, useCallback, useState, lazy, Suspense } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { motion, useAnimation, useInView, useReducedMotion } from 'framer-motion';

// Lazy load heavy components
const SliderComponent = lazy(() => import('../components/SliderComponent'));
const Statistics = lazy(() => import('../components/Statistics'));

// 2025 Modern Design System with Updated Color Scheme
const DESIGN_SYSTEM = {
  colors: {
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
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    xxl: '4rem',
  },
  shadows: {
    soft: '0 2px 8px rgba(26, 63, 143, 0.08)',
    medium: '0 4px 16px rgba(26, 63, 143, 0.12)',
    hard: '0 8px 32px rgba(26, 63, 143, 0.18)',
    focus: '0 0 0 3px rgba(26, 63, 143, 0.1)',
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1440px',
  },
  transitions: {
    fast: '0.15s cubic-bezier(0.4, 0, 0.2, 1)',
    medium: '0.25s cubic-bezier(0.4, 0, 0.2, 1)',
    slow: '0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  typography: {
    h1: 'clamp(2.5rem, 5vw, 4rem)',
    h2: 'clamp(2rem, 4vw, 3rem)',
    h3: 'clamp(1.5rem, 3vw, 2rem)',
    body: 'clamp(1rem, 2vw, 1.125rem)',
    small: '0.875rem',
  },
};

// Modern CSS Reset with Updated Color Variables
const GlobalStyle = createGlobalStyle`
  :root {
    ${Object.entries(DESIGN_SYSTEM.colors).map(([key, value]) => `--color-${key}: ${value};`).join('\n    ')}
    ${Object.entries(DESIGN_SYSTEM.spacing).map(([key, value]) => `--spacing-${key}: ${value};`).join('\n    ')}
    ${Object.entries(DESIGN_SYSTEM.shadows).map(([key, value]) => `--shadow-${key}: ${value};`).join('\n    ')}
    ${Object.entries(DESIGN_SYSTEM.typography).map(([key, value]) => `--text-${key}: ${value};`).join('\n    ')}
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
    
    @media (min-width: ${DESIGN_SYSTEM.breakpoints.wide}) {
      font-size: 18px;
    }
  }

  body {
    width: 100%;
    min-height: 100vh;
    overflow-x: hidden;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    background-color: var(--color-background);
    color: var(--color-text);
    line-height: 1.6;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  a {
    text-decoration: none;
    color: inherit;
    outline: none;
    
    &:focus-visible {
      outline: 2px solid var(--color-secondary);
      outline-offset: 2px;
      border-radius: 4px;
    }
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
    font-family: inherit;
    
    &:focus-visible {
      outline: 2px solid var(--color-secondary);
      outline-offset: 2px;
      border-radius: 4px;
    }
  }

  /* Reduced motion preferences */
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;

// Loading fallback component
const LoadingFallback = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  background: var(--color-surface);
  border-radius: 16px;
  color: var(--color-text);
`;

// ScrollToTop with improved behavior
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  
  return null;
};

// Container styles
const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background: var(--color-background);
  color: var(--color-text);
`;

const FullWidthSection = styled.section`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
`;

// Optimized Hero Section
const HeroSection = styled(FullWidthSection)`
  height: 60vh;
  min-height: 400px;
  max-height: 800px;
  overflow: hidden;
  
  @media (min-width: ${DESIGN_SYSTEM.breakpoints.tablet}) {
    height: 70vh;
    min-height: 500px;
  }
  
  @media (min-width: ${DESIGN_SYSTEM.breakpoints.desktop}) {
    height: 80vh;
    min-height: 600px;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 var(--spacing-sm);
  
  @media (min-width: ${DESIGN_SYSTEM.breakpoints.tablet}) {
    padding: 0 var(--spacing-md);
  }
  
  @media (min-width: ${DESIGN_SYSTEM.breakpoints.desktop}) {
    padding: 0 var(--spacing-lg);
  }
`;

// Modern Section with better spacing
const Section = styled(motion.section)`
  width: 100%;
  padding: var(--spacing-lg) 0;
  position: relative;
  
  @media (min-width: ${DESIGN_SYSTEM.breakpoints.tablet}) {
    padding: var(--spacing-xl) 0;
  }
  
  @media (min-width: ${DESIGN_SYSTEM.breakpoints.desktop}) {
    padding: var(--spacing-xxl) 0;
  }
`;

// Primary Color Section (for stats and featured sections)
const PrimaryColorSection = styled(Section)`
  background-color: var(--color-primary);
  color: var(--color-textInverse);
  
  p, h1, h2, h3, h4, h5, h6 {
    color: var(--color-textInverse);
  }
  
  a {
    color: var(--color-secondary);
    transition: color ${DESIGN_SYSTEM.transitions.fast};
    
    &:hover {
      color: var(--color-textInverse);
    }
    
    &:focus-visible {
      outline-color: var(--color-secondary);
    }
  }
`;

// Modern Section Title with fluid typography
const SectionTitle = styled(motion.h2)`
  font-size: var(--text-h2);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: var(--spacing-lg);
  text-align: center;
  background: var(--color-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  position: relative;
  letter-spacing: -0.02em;
  
  @media (min-width: ${DESIGN_SYSTEM.breakpoints.tablet}) {
    margin-bottom: var(--spacing-xl);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: calc(-1 * var(--spacing-sm));
    left: 50%;
    transform: translateX(-50%);
    width: min(80px, 20vw);
    height: 4px;
    background: var(--color-gradient);
    border-radius: 2px;
    opacity: 0.8;
    
    @media (min-width: ${DESIGN_SYSTEM.breakpoints.tablet}) {
      width: min(100px, 15vw);
      height: 5px;
      bottom: calc(-1 * var(--spacing-md));
    }
  }
`;

// Section Title for primary color sections
const PrimarySectionTitle = styled(SectionTitle)`
  color: var(--color-textInverse);
  background: none;
  -webkit-background-clip: initial;
  background-clip: initial;
  
  &::after {
    background: var(--color-secondary);
  }
`;

// Enhanced Services Grid with masonry layout on desktop
const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-md);
  width: 100%;
  
  @media (min-width: ${DESIGN_SYSTEM.breakpoints.mobile}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: ${DESIGN_SYSTEM.breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-lg);
    
    /* Masonry effect for visual interest */
    & > :nth-child(2n) {
      transform: translateY(2rem);
    }
  }
  
  @media (min-width: ${DESIGN_SYSTEM.breakpoints.wide}) {
    grid-template-columns: repeat(4, 1fr);
    
    & > :nth-child(2n) {
      transform: none;
    }
    
    & > :nth-child(4n-1),
    & > :nth-child(4n-2) {
      transform: translateY(2rem);
    }
  }
`;

// Modern Card with enhanced accessibility (removed image section)
const Card = styled(motion.article)`
  background: var(--color-card);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: var(--shadow-medium);
  border: 1px solid var(--color-border);
  transition: all var(--transition-medium);
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  padding: var(--spacing-lg);
  
  &:focus-within {
    box-shadow: var(--shadow-focus);
  }
  
  @media (hover: hover) {
    &:hover {
      transform: translateY(-8px);
      box-shadow: var(--shadow-hard);
      border-color: var(--color-primaryLight);
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: var(--color-gradient);
    opacity: 0;
    transition: opacity var(--transition-medium);
  }

  &:hover::before {
    opacity: 1;
  }
`;

// Enhanced card content (full height since no image)
const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  height: 100%;
  position: relative;
  z-index: 2;
`;

const CardTitle = styled.h3`
  font-size: var(--text-h3);
  font-weight: 700;
  color: var(--color-primary);
  letter-spacing: -0.01em;
  line-height: 1.2;
  margin-bottom: var(--spacing-sm);
`;

const CardDescription = styled.p`
  font-size: var(--text-body);
  line-height: 1.6;
  color: var(--color-textSecondary);
  font-weight: 400;
  flex-grow: 1;
  margin-bottom: var(--spacing-md);
`;

// Modern button with better accessibility
const StyledButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-xs) var(--spacing-md);
  background: var(--color-primary);
  color: var(--color-textInverse);
  font-weight: 600;
  border-radius: 100px;
  font-size: var(--text-small);
  transition: all var(--transition-fast);
  margin-top: auto;
  align-self: flex-start;
  box-shadow: var(--shadow-soft);
  position: relative;
  overflow: hidden;
  border: 2px solid transparent;
  
  @media (min-width: ${DESIGN_SYSTEM.breakpoints.tablet}) {
    padding: var(--spacing-sm) var(--spacing-lg);
  }
  
  &:focus-visible {
    outline: none;
    border-color: var(--color-secondary);
    box-shadow: var(--shadow-focus);
  }
  
  @media (hover: hover) {
    &:hover {
      transform: translateY(-2px);
      background: var(--color-primaryDark);
      box-shadow: var(--shadow-medium);
      color: var(--color-textInverse);
      
      .button-arrow {
        transform: translateX(4px);
      }
    }
  }
  
  &:active {
    transform: translateY(0);
  }
  
  .button-arrow {
    margin-left: var(--spacing-xs);
    transition: transform var(--transition-fast);
    display: inline-flex;
  }
`;

// Enhanced sections with modern backgrounds
const StatsSection = styled(PrimaryColorSection)`
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(circle at 20% 30%, rgba(91, 180, 232, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const SponsorSection = styled(Section)`
  background: linear-gradient(to bottom, var(--color-background), var(--color-surface));
  position: relative;
`;

const SponsorGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-md);
  width: 100%;
  
  @media (min-width: ${DESIGN_SYSTEM.breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
    gap: var(--spacing-lg);
  }
`;

const CardMeta = styled.p`
  font-size: var(--text-small);
  font-weight: 600;
  color: var(--color-primaryLight);
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const SectionIntro = styled.p`
  max-width: 800px;
  margin: 0 auto var(--spacing-xl);
  text-align: center;
  font-size: var(--text-body);
  color: var(--color-textSecondary);
`;

const CtaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--spacing-sm);
  
  ${StyledButton} {
    margin-top: 0;
    align-self: center;
    background: var(--color-secondary);
    color: var(--color-text);
    
    @media (hover: hover) {
      &:hover {
        background: var(--color-textInverse);
        color: var(--color-primary);
      }
    }
  }
`;

// Optimized animations with reduced motion support
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

// Performance-optimized AnimatedSection with intersection observer
const AnimatedSection = ({ children, className, threshold = 0.05, isPrimary = false }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const inView = useInView(ref, { 
    once: true,
    threshold,
    margin: "0px 0px -5% 0px"
  });
  
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  
  // Skip animations if user prefers reduced motion
  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Home = () => {
  const services = [
  {
    title: 'QORRAHEY International School',
    description: 'An academic programme from Kindergarten to Grade 11, adding a new grade each year.',
    link: '/what-we-do',
    buttonText: 'Our Programmes'
  },
  {
    title: 'QORRAHEY Institute for Quranic and Islamic Studies',
    description: 'Quran memorisation and Islamic studies, housed in its own newly completed G+2 building.',
    link: '/what-we-do',
    buttonText: 'Our Programmes'
  },
  {
    title: 'Social Development',
    description: 'Capacity building, good governance and ethical leadership, and programmes that improve the economic wellbeing of the community.',
    link: '/what-we-do',
    buttonText: 'Our Programmes'
  },
  {
    title: 'Youth Development and Sports',
    description: 'Youth development and sports, including the QORIS Mini Football Stadium.',
    link: '/what-we-do',
    buttonText: 'Our Programmes'
  }
];

  const sponsorshipOptions = [
    {
      meta: 'Monthly',
      title: '$25 per child',
      description: "Covers a child's place at QORRAHEY International School when their family cannot pay the fees.",
      link: '/donate#sponsor-a-child'
    },
    {
      meta: 'Yearly',
      title: '$250 per child',
      description: 'Sponsor a full school year for one child in a single payment.',
      link: '/donate#sponsor-a-child'
    },
    {
      meta: 'Schools, non-profits & diaspora groups',
      title: 'Sponsor as a group',
      description: 'Schools, non-profit organisations and diaspora associations can sponsor students, programmes or facilities.',
      link: '/donate#group-sponsorship'
    }
  ];

  const callsToAction = [
    { label: 'Donate', link: '/donate' },
    { label: 'Partner With Us', link: '/get-involved' },
    { label: 'Contact Us', link: '/contact-us' }
  ];

  return (
    <>
      <GlobalStyle />
      <ScrollToTop />
      <HomeContainer>
        <HeroSection>
          <Suspense fallback={<LoadingFallback>Loading hero content...</LoadingFallback>}>
            <SliderComponent />
          </Suspense>
        </HeroSection>

        <ContentWrapper>
          <Section as={AnimatedSection}>
            <SectionTitle
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              Our Programmes
            </SectionTitle>
            <SectionIntro>
              We support children and young people, families, community leaders and local institutions in Qabridahar and the surrounding communities of the Somali Regional State of Ethiopia.
            </SectionIntro>
            <ServicesGrid>
              {services.map((service, index) => (
                <Card 
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -8 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <CardContent>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                    <StyledButton to={service.link}>
                      {service.buttonText}
                      <span className="button-arrow" aria-hidden="true">→</span>
                    </StyledButton>
                  </CardContent>
                </Card>
              ))}
            </ServicesGrid>
          </Section>
        </ContentWrapper>

        <StatsSection as={AnimatedSection} isPrimary>
          <ContentWrapper>
            <PrimarySectionTitle variants={fadeInUp}>
              Our Impact
            </PrimarySectionTitle>
            <motion.div variants={scaleIn}>
              <Suspense fallback={<LoadingFallback>Loading statistics...</LoadingFallback>}>
                <Statistics />
              </Suspense>
            </motion.div>
          </ContentWrapper>
        </StatsSection>

        <ContentWrapper>
          <SponsorSection as={AnimatedSection}>
            <SectionTitle variants={fadeInUp}>
              Sponsor a Child
            </SectionTitle>
            <SectionIntro>
              No child should miss out on school because their family cannot afford the fees. A sponsorship keeps a child learning with qualified teachers in Qabridahar.
            </SectionIntro>
            <SponsorGrid>
              {sponsorshipOptions.map((option) => (
                <Card key={option.title} variants={fadeInUp}>
                  <CardContent>
                    <CardMeta>{option.meta}</CardMeta>
                    <CardTitle>{option.title}</CardTitle>
                    <CardDescription>{option.description}</CardDescription>
                    <StyledButton to={option.link}>
                      Sponsor Now
                      <span className="button-arrow" aria-hidden="true">→</span>
                    </StyledButton>
                  </CardContent>
                </Card>
              ))}
            </SponsorGrid>
          </SponsorSection>
        </ContentWrapper>

        <StatsSection as={AnimatedSection} isPrimary>
          <ContentWrapper>
            <PrimarySectionTitle variants={fadeInUp}>
              Get Involved
            </PrimarySectionTitle>
            <CtaRow>
              {callsToAction.map((cta) => (
                <StyledButton key={cta.label} to={cta.link}>
                  {cta.label}
                  <span className="button-arrow" aria-hidden="true">→</span>
                </StyledButton>
              ))}
            </CtaRow>
          </ContentWrapper>
        </StatsSection>
      </HomeContainer>
    </>
  );
};

export default Home;