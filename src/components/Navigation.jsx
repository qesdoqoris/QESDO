import React, { useState } from 'react';
import styled from 'styled-components';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../assets/qesdo-logo.png';

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

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  background: ${COLORS.surface};
  width: 100%;
  box-shadow: 0 2px 12px rgba(26, 63, 143, 0.08);
  border-bottom: 1px solid ${COLORS.border};
  position: relative;
  
  @media (min-width: 1100px) {
    padding: 0.9rem 2rem;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  display: block;
  height: 52px;
  width: auto;
  
  @media (min-width: 768px) {
    height: 66px;
  }
`;

const MenuButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  border-radius: 4px;
  
  svg {
    font-size: 1.75rem;
    color: ${COLORS.primary};
  }
  
  &:hover {
    background-color: rgba(26, 63, 143, 0.08);
    transform: scale(1.05);
  }
  
  &:focus-visible {
    outline: 2px solid ${COLORS.secondary};
    outline-offset: 2px;
  }
  
  @media (min-width: 1100px) {
    display: none;
  }
`;

const NavList = styled.ul`
  display: ${({ open }) => (open ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: ${COLORS.primaryDark};
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 10;
  
  @media (min-width: 1100px) {
    display: flex;
    flex-direction: row;
    position: static;
    width: auto;
    background: transparent;
    box-shadow: none;
    gap: 0.25rem;
  }
`;

const NavItem = styled.li`
  border-bottom: 1px solid ${COLORS.primaryLight};
  
  &:last-child {
    border-bottom: none;
  }
  
  a {
    display: block;
    text-decoration: none;
    color: ${COLORS.textInverse};
    font-weight: 500;
    font-size: 1rem;
    padding: 1rem;
    text-align: center;
    transition: all 0.3s ease;
    position: relative;
    
    &:hover {
      background-color: ${COLORS.primaryLight};
      color: ${COLORS.secondary};
    }
    
    &:focus-visible {
      outline: 2px solid ${COLORS.secondary};
      outline-offset: -2px;
      background-color: ${COLORS.primaryLight};
    }
  }

  @media (min-width: 1100px) {
    border-bottom: none;
    
    a {
      padding: 0.5rem 0.6rem;
      font-size: 0.95rem;
      font-weight: 600;
      background: transparent;
      color: ${COLORS.primary};
      
      &:hover {
        background-color: transparent;
        color: ${COLORS.primaryLight};
        transform: translateY(-2px);
      }
      
      &::after {
        content: '';
        position: absolute;
        width: 0;
        height: 2px;
        bottom: 0;
        left: 50%;
        background-color: ${COLORS.secondary};
        transition: all 0.3s ease;
        transform: translateX(-50%);
      }
      
      &:hover::after {
        width: 80%;
        left: 50%;
      }
      
      &:focus-visible::after {
        width: 80%;
        left: 50%;
      }
    }
  }
`;

const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <Nav>
      <LogoContainer>
        <Logo src={logo} alt="QORIS Education and Social Development Organization (QESDO) logo" />
      </LogoContainer>

      <MenuButton 
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
      >
        {open ? <FiX /> : <FiMenu />}
      </MenuButton>

      <NavList open={open}>
        <NavItem>
          <a href="/" onClick={() => setOpen(false)}>Home</a>
        </NavItem>
        <NavItem>
          <a href="/about-us" onClick={() => setOpen(false)}>About Us</a>
        </NavItem>
        <NavItem>
          <a href="/what-we-do" onClick={() => setOpen(false)}>What We Do</a>
        </NavItem>
        <NavItem>
          <a href="/impact" onClick={() => setOpen(false)}>Impact</a>
        </NavItem>
        <NavItem>
          <a href="/get-support" onClick={() => setOpen(false)}>Get Support</a>
        </NavItem>
        <NavItem>
          <a href="/get-involved" onClick={() => setOpen(false)}>Get Involved</a>
        </NavItem>
        <NavItem>
          <a href="/news" onClick={() => setOpen(false)}>News</a>
        </NavItem>
        <NavItem>
          <a href="/contact-us" onClick={() => setOpen(false)}>Contact Us</a>
        </NavItem>
      </NavList>
    </Nav>
  );
};

export default Navigation;