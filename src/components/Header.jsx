import React, { useState } from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaHandHoldingHeart, FaPhoneAlt } from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi';

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
  border: 'rgba(0, 0, 0, 0.08)',
};

const HeaderContainer = styled.header`
  background-color: ${COLORS.primary};
  color: ${COLORS.textInverse};
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  width: 100%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.75rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem 2rem;
  }
`;

const ContactToggle = styled.button`
  background: transparent;
  border: none;
  color: ${COLORS.textInverse};
  font-size: 0.9rem;
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;
  transition: color 0.3s ease;
  
  &::after {
    content: '${props => props.isOpen ? '−' : '+'}';
    font-size: 1.2rem;
    font-weight: bold;
    color: ${COLORS.secondary};
  }
  
  &:hover {
    color: ${COLORS.secondary};
  }
  
  &:focus-visible {
    outline: 2px solid ${COLORS.secondary};
    outline-offset: 2px;
    border-radius: 4px;
  }
  
  @media (min-width: 768px) {
    display: none;
  }
`;

const ContactInfo = styled.div`
  display: ${props => props.isOpen || props.isDesktop ? 'flex' : 'none'};
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: ${props => props.isDesktop ? '0' : '0.75rem'};
  width: 100%;
  
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 1.5rem;
    margin-bottom: 0;
  }
`;

const ContactItem = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: ${COLORS.textInverse};
  opacity: 0.9;
  
  @media (min-width: 768px) {
    font-size: 0.9rem;
  }
`;

const ContactLink = styled.a`
  color: ${COLORS.textInverse};
  text-decoration: none;
  transition: all 0.3s ease;
  opacity: 0.9;
  
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

const ContactUsLink = styled.a`
  background-color: ${COLORS.secondary};
  color: ${COLORS.text};
  font-weight: 600;
  border: none;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  text-decoration: none;
  
  &:hover {
    background-color: ${COLORS.secondaryDark};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    color: ${COLORS.text};
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:focus-visible {
    outline: 2px solid ${COLORS.secondaryLight};
    outline-offset: 2px;
  }
  
  @media (min-width: 768px) {
    width: auto;
    min-width: 150px;
  }
`;

const Icon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.secondary};
  color: ${COLORS.text};
  border-radius: 50%;
  padding: 0.4rem;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  
  ${ContactItem}:hover & {
    background-color: ${COLORS.secondaryDark};
    transform: scale(1.1);
  }
  
  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const Header = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const isDesktop = typeof window !== 'undefined' ? window.innerWidth >= 768 : false;

  return (
    <HeaderContainer>
      <HeaderContent>
        <div>
          <ContactToggle 
            isOpen={isContactOpen} 
            onClick={() => setIsContactOpen(!isContactOpen)}
            aria-expanded={isContactOpen}
            aria-controls="contact-info"
          >
            Contact Information
          </ContactToggle>
          
          <ContactInfo id="contact-info" isOpen={isContactOpen} isDesktop={isDesktop}>
            <ContactItem>
              <Icon><HiLocationMarker /></Icon>
              Qabridahar, Somali Regional State, Ethiopia
            </ContactItem>
            <ContactItem>
              <Icon><FaPhoneAlt /></Icon>
              <ContactLink href="tel:+251993262554">+251 99 326 2554</ContactLink>
            </ContactItem>
            <ContactItem>
              <Icon><FaEnvelope /></Icon>
              <ContactLink href="mailto:info@qesdo.org">info@qesdo.org</ContactLink>
            </ContactItem>
          </ContactInfo>
        </div>
        
        <ContactUsLink 
          href="/donate"
          aria-label="Donate to QESDO"
        >
          <FaHandHoldingHeart />
          Donate
        </ContactUsLink>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;