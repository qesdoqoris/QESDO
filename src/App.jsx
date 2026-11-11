import React, { lazy, Suspense, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';

// Import critical components immediately (no lazy loading for above-the-fold content)
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Lazy load only pages (routes) - this is the sweet spot for performance
const Home = lazy(() => import('./pages/Home'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const WhatWeDo = lazy(() => import('./pages/WhatWeDo'));
const Impact = lazy(() => import('./pages/Impact'));
const GetSupport = lazy(() => import('./pages/GetSupport'));
const GetInvolved = lazy(() => import('./pages/GetInvolved'));
const Donate = lazy(() => import('./pages/Donate'));
const ContactUs = lazy(() => import('./pages/ContactUs'));
const News = lazy(() => import('./pages/News'));

// Lightweight page loading component (much smaller than full-screen loader)
const PageLoadingFallback = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  width: 100%;
  
  &::after {
    content: "";
    width: 24px;
    height: 24px;
    border: 2px solid rgba(26, 63, 143, 0.2);
    border-radius: 50%;
    border-top-color: var(--primary-color);
    animation: spin 0.8s linear infinite;
  }
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #1a3f8f;
    --secondary-color: #5bb4e8;
    --background-color: #F5F5F5;
    --text-color: #333333;
    --glass-background: rgba(255, 255, 255, 0.85);
    --box-shadow: 0 8px 32px 0 rgba(26, 63, 143, 0.15);
    --border-radius: 8px;
    --border-radius-lg: 15px;
    --transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
  }

  body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    background-color: var(--background-color);
    color: var(--text-color);
    line-height: 1.6;
    overflow-x: hidden;
  }

  /* Mobile-first typography */
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Poppins', sans-serif;
    color: var(--primary-color);
    margin-bottom: 0.75rem;
    font-weight: 600;
    line-height: 1.2;
  }

  h1 {
    font-size: 1.75rem;
    font-weight: 700;
    
    @media (min-width: 768px) {
      font-size: 2.25rem;
    }
    
    @media (min-width: 1024px) {
      font-size: 2.5rem;
    }
  }

  h2 {
    font-size: 1.5rem;
    
    @media (min-width: 768px) {
      font-size: 1.75rem;
    }
    
    @media (min-width: 1024px) {
      font-size: 2rem;
    }
  }

  h3 {
    font-size: 1.25rem;
    
    @media (min-width: 768px) {
      font-size: 1.5rem;
    }
    
    @media (min-width: 1024px) {
      font-size: 1.75rem;
    }
  }

  p {
    margin-bottom: 1rem;
    font-size: 0.95rem;
    
    @media (min-width: 768px) {
      font-size: 1rem;
    }
  }

  a {
    text-decoration: none;
    color: var(--primary-color);
    transition: var(--transition);
    position: relative;

    &:hover {
      color: var(--secondary-color);
    }
    
    &:after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      bottom: -2px;
      left: 0;
      background-color: var(--secondary-color);
      transition: var(--transition);
    }
    
    &:hover:after {
      width: 100%;
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }

  /* Mobile-first button styling */
  button, .button {
    background-color: var(--primary-color);
    color: white;
    border: none;
    padding: 0.6rem 1.2rem;
    border-radius: var(--border-radius);
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 0.9rem;
    cursor: pointer;
    transition: var(--transition);
    
    @media (min-width: 768px) {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
      border-radius: var(--border-radius-lg);
    }
    
    &:hover {
      background-color: var(--secondary-color);
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
  }

  /* Icon sizing - mobile first approach */
  .icon-sm {
    width: 16px;
    height: 16px;
    
    @media (min-width: 768px) {
      width: 20px;
      height: 20px;
    }
  }
  
  .icon-md {
    width: 24px;
    height: 24px;
    
    @media (min-width: 768px) {
      width: 28px;
      height: 28px;
    }
  }
  
  .icon-lg {
    width: 32px;
    height: 32px;
    
    @media (min-width: 768px) {
      width: 40px;
      height: 40px;
    }
  }
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`;

const PageContainer = styled.main`
  flex: 1;
  width: 100%;
  max-width: 1740px;
  margin: 0 auto;
  padding: 0 1rem;
  transition: var(--transition);
  
  @media (min-width: 640px) {
    padding: 0 1.5rem;
  }
  
  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`;

// Scroll to the top on every page change, or to the #hash target if one is given.
// Pages are lazy loaded, so keep trying briefly until the target element exists.
const ScrollManager = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return undefined;
    }

    let attempts = 0;
    let frame;
    const scrollToTarget = () => {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (target) {
        target.scrollIntoView({ block: 'start' });
      } else if (attempts++ < 60) {
        frame = requestAnimationFrame(scrollToTarget);
      } else {
        window.scrollTo(0, 0);
      }
    };
    scrollToTarget();
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollManager />
      <GlobalStyle />
      <AppContainer>
        {/* Critical components load immediately - no Suspense wrapper */}
        <Header />
        <Navigation />
        <PageContainer>
          {/* Only wrap routes in Suspense for page-level lazy loading */}
          <Suspense fallback={<PageLoadingFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/what-we-do" element={<WhatWeDo />} />
              <Route path="/impact" element={<Impact />} />
              <Route path="/get-support" element={<GetSupport />} />
              <Route path="/get-involved" element={<GetInvolved />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/news" element={<News />} />
              {/* Old URLs from the previous site */}
              <Route path="/i-need-help" element={<Navigate to="/get-support" replace />} />
              <Route path="/partners" element={<Navigate to="/get-involved" replace />} />
            </Routes>
          </Suspense>
        </PageContainer>
        {/* Footer loads immediately too */}
        <Footer />
      </AppContainer>
    </Router>
  );
};

export default App;