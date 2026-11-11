import React from 'react';
import styled from 'styled-components';

// Brand Colors
const colors = {
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

const PageWrapper = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background: ${colors.background};
  min-height: 100vh;
`;

const HeroSection = styled.div`
  background: ${colors.gradientPrimary};
  color: ${colors.textInverse};
  padding: 4rem 2rem;
  border-radius: 16px;
  margin-bottom: 4rem;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${colors.gradient};
    opacity: 0.1;
  }

  h1 {
    color: ${colors.textInverse};
    font-size: 3rem;
    margin-bottom: 1rem;
    font-weight: 700;
    position: relative;
  }

  .subtitle {
    font-size: 1.4rem;
    font-weight: 300;
    opacity: 0.9;
    position: relative;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }
`;

const ContactItems = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(260px, 100%), 1fr));
  gap: 1.5rem;
`;

const ContactInfoCard = styled.div`
  background: ${colors.surface};
  padding: 3rem;
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(26, 63, 143, 0.1);
  border: 1px solid ${colors.border};
  position: relative;
  overflow: hidden;
  margin-bottom: 4rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${colors.gradientPrimary};
  }

  h2 {
    color: ${colors.primary};
    font-size: 2rem;
    margin-bottom: 2rem;
    font-weight: 600;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 1.5rem;
  background: ${colors.background};
  border-radius: 12px;
  border-left: 4px solid ${colors.secondary};
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(5px);
    box-shadow: 0 4px 15px rgba(26, 63, 143, 0.1);
  }

  .icon {
    width: 50px;
    height: 50px;
    background: ${colors.gradientSecondary};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1.5rem;
    font-size: 1.2rem;
    color: ${colors.primary};
    font-weight: bold;
    flex-shrink: 0;
  }

  .content {
    flex: 1;
  }

  h3 {
    color: ${colors.primary};
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
    font-weight: 600;
  }

  p {
    color: ${colors.text};
    margin: 0;
    line-height: 1.5;
  }

  a {
    color: ${colors.primary};
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${colors.primaryLight};
      text-decoration: underline;
    }
  }
`;

const RoutesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(280px, 100%), 1fr));
  gap: 1rem;

  li {
    background: ${colors.background};
    border-left: 4px solid ${colors.secondary};
    border-radius: 12px;
    padding: 1.25rem 1.5rem;
  }

  h3 {
    color: ${colors.primary};
    font-size: 1.1rem;
    margin-bottom: 0.25rem;
    font-weight: 600;
  }

  p {
    margin: 0;
    color: ${colors.text};
  }

  a {
    color: ${colors.primary};
  }
`;

const MapSection = styled.div`
  background: ${colors.surface};
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(26, 63, 143, 0.1);
  margin-bottom: 2rem;

  h2 {
    color: ${colors.primary};
    text-align: center;
    font-size: 2rem;
    margin-bottom: 2rem;
    font-weight: 600;
  }
`;

const MapPlaceholder = styled.div`
  background: ${colors.gradient};
  height: 300px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.textInverse};
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
  padding: 2rem;
`;

const contactRoutes = [
  { topic: 'General and governance', contact: 'Chairman, Dr. Abdirashid Abdi' },
  { topic: 'Operations', contact: 'Executive Director, Ilwad Keysar', email: 'ilwad.keysar@qesdo.org' },
  { topic: 'School enquiries', contact: 'Principal Abdiwahab Wadar Amey' },
  { topic: 'Institute enquiries', contact: 'Principal Abdiaziz Hassan Gelle' },
  { topic: 'Donors and media', contact: 'Siraji SharifAli (Public Relations & Communications)' },
  { topic: 'Partnerships and grants', contact: 'Muxamedrashid Ali (Strategic Growth & Resources)' },
];

const ContactUs = () => {
  return (
    <PageWrapper>
      <HeroSection>
        <h1>Contact Us</h1>
        <div className="subtitle">
          Get in touch about enrolment, donations and sponsorship, partnerships or any other enquiry.
        </div>
      </HeroSection>

      <ContactInfoCard>
        <h2>Contact Information</h2>
        <ContactItems>
          <ContactItem>
            <div className="icon">📍</div>
            <div className="content">
              <h3>Address</h3>
              <p>
                Qabridahar<br />
                Somali Regional State<br />
                Ethiopia
              </p>
            </div>
          </ContactItem>

          <ContactItem>
            <div className="icon">📞</div>
            <div className="content">
              <h3>Phone</h3>
              <p>
                <a href="tel:+251993262554">+251 99 326 2554</a>
              </p>
            </div>
          </ContactItem>

          <ContactItem>
            <div className="icon">✉️</div>
            <div className="content">
              <h3>Email</h3>
              <p>
                <a href="mailto:info@qesdo.org">info@qesdo.org</a>
              </p>
            </div>
          </ContactItem>
        </ContactItems>
      </ContactInfoCard>

      <MapSection>
        <h2>Who to Contact</h2>
        <RoutesList>
          {contactRoutes.map((route) => (
            <li key={route.topic}>
              <h3>{route.topic}</h3>
              <p>{route.contact}</p>
              {route.email && <p><a href={`mailto:${route.email}`}>{route.email}</a></p>}
            </li>
          ))}
        </RoutesList>
      </MapSection>

      <MapSection>
        <h2>Find Us</h2>
        <MapPlaceholder>
          Qabridahar, Somali Regional State, Ethiopia
        </MapPlaceholder>
      </MapSection>
    </PageWrapper>
  );
};

export default ContactUs;
