import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi';
import QesdoLogo from '../assets/qesdo-logo-white.png';

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
  text: '#212529',
  textSecondary: '#495057',
  textInverse: '#ffffff',
  border: '#1a3f8f',
};

const shimmer = keyframes`
  0% { background-position: -500px 0; }
  100% { background-position: 500px 0; }
`;

const FooterContainer = styled.footer`
  background-color: ${COLORS.primary};
  color: ${COLORS.textInverse};
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  position: relative;
  overflow: hidden;
  margin-top: 3rem;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${COLORS.secondary};
    background-size: 1000px 100%;
    animation: ${shimmer} 8s infinite linear;
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  
  @media (min-width: 768px) {
    padding: 3rem 2rem;
  }
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const FooterSection = styled.div`
  h4 {
    font-size: 1.1rem;
    margin-bottom: 1.2rem;
    color: ${COLORS.secondary};
    font-weight: 600;
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 40px;
      height: 2px;
      background: ${COLORS.secondary};
      border-radius: 2px;
      transition: width 0.3s ease;
    }
    
    &:hover::after {
      width: 60px;
    }
  }
`;

const LogoSection = styled.div`
  margin-bottom: 1rem;

  img {
    max-width: 260px;
    height: auto;
  }
`;

const FooterText = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 1.2rem;
  color: ${COLORS.textInverse};
  opacity: 0.9;
`;

const ContactList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ContactItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: ${COLORS.textInverse};
  opacity: 0.9;
  
  svg {
    min-width: 18px;
    color: ${COLORS.text};
    background-color: ${COLORS.secondary};
    border-radius: 50%;
    padding: 0.4rem;
    font-size: 0.9rem;
  }
`;

const LinksList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const LinkItem = styled.li`
  margin-bottom: 0.8rem;
  
  a {
    color: ${COLORS.textInverse};
    opacity: 0.9;
    text-decoration: none;
    font-size: 0.9rem;
    display: inline-block;
    position: relative;
    transition: all 0.3s ease;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 1px;
      background-color: ${COLORS.secondary};
      transition: width 0.3s ease;
    }
    
    &:hover {
      color: ${COLORS.secondary};
      opacity: 1;
      transform: translateX(5px);
      
      &::after {
        width: 100%;
      }
    }
    
    &:focus-visible {
      outline: 2px solid ${COLORS.secondary};
      outline-offset: 2px;
      border-radius: 2px;
    }
  }
`;

const CopyrightSection = styled.div`
  text-align: center;
  padding: 1.5rem 1rem;
  margin-top: 2rem;
  background: ${COLORS.primaryDark};
  color: ${COLORS.textInverse};
  font-size: 0.8rem;
  
  p {
    margin: 0.5rem 0;
    opacity: 0.9;
  }
  
  a {
    color: ${COLORS.secondary};
    text-decoration: none;
    position: relative;
    padding: 0 5px;
    transition: color 0.3s ease;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 1px;
      background-color: ${COLORS.secondary};
      transition: width 0.3s ease;
    }
    
    &:hover {
      color: ${COLORS.textInverse};
      
      &::after {
        width: 100%;
        background-color: ${COLORS.textInverse};
      }
    }
    
    &:focus-visible {
      outline: 2px solid ${COLORS.secondary};
      outline-offset: 2px;
      border-radius: 2px;
    }
  }
`;

const ContactLink = styled.a`
  color: ${COLORS.textInverse};
  opacity: 0.9;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    color: ${COLORS.secondary};
    opacity: 1;
    text-decoration: underline;
  }
  
  &:focus-visible {
    outline: 2px solid ${COLORS.secondary};
    outline-offset: 2px;
    border-radius: 2px;
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <FooterGrid>
          <FooterSection>
            <LogoSection>
              <img src={QesdoLogo} alt="QORIS Education and Social Development Organization (QESDO) logo" />
            </LogoSection>
            <FooterText>
              QESDO provides transformative education and social development programmes that build knowledge and character, preserve cultural heritage, strengthen capacity, good governance and ethical leadership, and improve the economic wellbeing of the communities we serve.
            </FooterText>
          </FooterSection>
          
          <FooterSection>
            <h4>Contact Us</h4>
            <ContactList>
              <ContactItem>
                <HiLocationMarker />
                <span>Qabridahar, Somali Regional State, Ethiopia</span>
              </ContactItem>
              <ContactItem>
                <FaPhoneAlt />
                <ContactLink href="tel:+251993262554">+251 99 326 2554</ContactLink>
              </ContactItem>
              <ContactItem>
                <FaEnvelope />
                <ContactLink href="mailto:info@qesdo.org">info@qesdo.org</ContactLink>
              </ContactItem>
            </ContactList>
          </FooterSection>
          
          <FooterSection>
            <h4>Quick Links</h4>
            <LinksList>
              <LinkItem><Link to="/">Home</Link></LinkItem>
              <LinkItem><Link to="/about-us">About Us</Link></LinkItem>
              <LinkItem><Link to="/what-we-do">What We Do</Link></LinkItem>
              <LinkItem><Link to="/impact">Impact</Link></LinkItem>
              <LinkItem><Link to="/get-support">Get Support</Link></LinkItem>
              <LinkItem><Link to="/news">News</Link></LinkItem>
            </LinksList>
          </FooterSection>

          <FooterSection>
            <h4>Support Our Work</h4>
            <LinksList>
              <LinkItem><Link to="/donate">Donate</Link></LinkItem>
              <LinkItem><Link to="/donate#sponsor-a-child">Sponsor a Child</Link></LinkItem>
              <LinkItem><Link to="/get-involved">Partner With Us</Link></LinkItem>
              <LinkItem><Link to="/get-involved">Volunteer</Link></LinkItem>
              <LinkItem><Link to="/contact-us">Contact Us</Link></LinkItem>
            </LinksList>
          </FooterSection>
        </FooterGrid>
      </FooterContent>
      
      <CopyrightSection>
        <p>QORIS Education and Social Development Organization (QESDO) is registered in Ethiopia as a Board-Led Organization.</p>
        <p>© {currentYear} QORIS Education and Social Development Organization (QESDO). All rights reserved.</p>
      </CopyrightSection>
    </FooterContainer>
  );
};

export default Footer;
