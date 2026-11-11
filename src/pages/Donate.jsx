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
    right: 0;
    bottom: 0;
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
    font-size: 1.5rem;
    font-weight: 300;
    opacity: 0.9;
    position: relative;
    max-width: 600px;
    margin: 0 auto;
  }
`;

const PaymentSection = styled.section`
  scroll-margin-top: 140px;
  margin-bottom: 4rem;

  .intro {
    text-align: center;
    color: ${colors.textSecondary};
    font-size: 1.1rem;
    margin: -1.5rem auto 2.5rem;
  }

  .note {
    text-align: center;
    color: ${colors.textTertiary};
    font-size: 0.9rem;
    margin-top: 1.5rem;
  }
`;

const PaymentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(320px, 100%), 1fr));
  gap: 2rem;
`;

const PaymentCard = styled.div`
  background: ${colors.card};
  border-radius: 16px;
  padding: 2.5rem 2rem;
  border: 1px solid ${colors.border};
  border-top: 4px solid ${colors.secondary};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  .flag {
    font-size: 2.5rem;
    line-height: 1;
    margin-bottom: 1rem;
  }

  h3 {
    color: ${colors.primary};
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
  }

  p {
    color: ${colors.textSecondary};
    margin-bottom: 1.5rem;
  }

  .phone {
    display: inline-block;
    margin-top: auto;
    font-size: 1.6rem;
    font-weight: 700;
    color: ${colors.primary};
    text-decoration: none;
    letter-spacing: 0.02em;
    word-break: keep-all;
    white-space: nowrap;

    &:hover {
      color: ${colors.primaryLight};
    }
  }
`;

const PaymentButton = styled.a`
  margin-top: auto;
  display: inline-block;
  background: ${colors.primary};
  color: ${colors.textInverse};
  padding: 0.9rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s ease;

  &:hover {
    background: ${colors.primaryLight};
  }
`;

const SectionTitle = styled.h2`
  color: ${colors.primary};
  text-align: center;
  font-size: 2.2rem;
  margin-bottom: 3rem;
  font-weight: 700;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: ${colors.secondary};
    border-radius: 2px;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(350px, 100%), 1fr));
  gap: 2.5rem;
  margin-bottom: 4rem;
`;

const ServiceCard = styled.div`
  scroll-margin-top: 140px;
  background: ${colors.card};
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 8px 30px rgba(26, 63, 143, 0.1);
  border: 1px solid ${colors.border};
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${colors.gradientPrimary};
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(26, 63, 143, 0.15);
  }

  h3 {
    color: ${colors.primary};
    font-size: 1.5rem;
    margin-bottom: 1rem;
    font-weight: 600;
  }

  p {
    color: ${colors.text};
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
`;

const ServiceIcon = styled.div`
  width: 60px;
  height: 60px;
  background: ${colors.gradientSecondary};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  color: ${colors.primary};
  font-weight: bold;
`;

const ServiceFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;

  li {
    padding: 0.5rem 0;
    color: ${colors.text};
    position: relative;
    padding-left: 1.5rem;

    &::before {
      content: '✓';
      color: ${colors.secondary};
      font-weight: bold;
      position: absolute;
      left: 0;
    }
  }
`;

const ApproachSection = styled.div`
  background: ${colors.surface};
  padding: 4rem 2rem;
  border-radius: 16px;
  margin-bottom: 4rem;
  box-shadow: 0 8px 30px ${colors.border};
`;

const ApproachGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const ApproachCard = styled.div`
  text-align: center;
  padding: 2rem 1rem;

  .approach-icon {
    width: 80px;
    height: 80px;
    background: ${colors.gradientPrimary};
    color: ${colors.textInverse};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    font-weight: bold;
    font-size: 1.5rem;
  }

  h4 {
    color: ${colors.primary};
    margin-bottom: 1rem;
    font-size: 1.3rem;
    font-weight: 600;
  }

  p {
    color: ${colors.textSecondary};
    line-height: 1.5;
  }
`;

const CtaSection = styled.div`
  background: ${colors.gradient};
  color: ${colors.textInverse};
  padding: 4rem 2rem;
  border-radius: 16px;
  text-align: center;
  margin-bottom: 2rem;

  h2 {
    color: ${colors.textInverse};
    font-size: 2.2rem;
    margin-bottom: 1rem;
    font-weight: 700;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    opacity: 0.9;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const Button = styled.a`
  display: inline-block;
  background: ${colors.surface};
  color: ${colors.primary};
  border: none;
  padding: 1rem 2.5rem;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
    background: ${colors.primaryLight};
    color: ${colors.textInverse};
  }
`;

const Donate = () => {
  const services = [
    {
      id: 1,
      icon: 'GD',
      title: 'General Donation',
      description: 'One-off or regular donations that support the running costs of our projects and programmes.',
      features: [
        'One-off giving',
        'Regular giving'
      ]
    },
    {
      id: 2,
      anchor: 'sponsor-a-child',
      icon: 'SC',
      title: 'Sponsor a Child',
      description: 'Child sponsorship helps families who cannot pay school fees.',
      features: [
        '$25 per child per month',
        'or $250 per year'
      ]
    },
    {
      id: 3,
      anchor: 'group-sponsorship',
      icon: 'SP',
      title: 'School or Non-profit Sponsorship',
      description: 'Schools and non-profit organisations can sponsor students, programmes or facilities.',
      features: [
        'School sponsorship',
        'Non-profit sponsorship'
      ]
    },
    {
      id: 4,
      icon: 'QI',
      title: 'QORRAHEY Institute Campaign',
      description: 'Support the QORRAHEY Institute for Quranic and Islamic Studies.',
      features: [
        'Quran memorisation and Islamic studies',
        'Housed in its own G+2 building'
      ]
    }
  ];

  const fundedItems = [
    { icon: '1', title: 'Salaries', description: 'Teacher and staff salaries.' },
    { icon: '2', title: 'Curriculum', description: 'Curriculum materials.' },
    { icon: '3', title: 'Buildings', description: 'Building readiness and facilities for both the School and the Institute.' },
    { icon: '4', title: 'Office', description: 'Office equipment and stationery.' }
  ];

  return (
    <PageWrapper>
      <HeroSection>
        <h1>Donate</h1>
        <div className="subtitle">
          QESDO is working to become financially self-sufficient, but donations remain essential to keep fees affordable, pay qualified teachers, add a new grade each year and maintain three buildings.
        </div>
      </HeroSection>

      <PaymentSection id="make-your-payment">
        <SectionTitle>Make Your Payment</SectionTitle>
        <p className="intro">Choose your location to continue securely.</p>
        <PaymentGrid>
          <PaymentCard>
            <div className="flag" aria-hidden="true">🇪🇹</div>
            <h3>Inside Ethiopia</h3>
            <p>Send your donation in birr directly to this number.</p>
            <a className="phone" href="tel:+251993262554">+251 99 326 2554</a>
          </PaymentCard>
          <PaymentCard>
            <div className="flag" aria-hidden="true">🌍</div>
            <h3>Outside Ethiopia</h3>
            <p>Pay using an international debit or credit card.</p>
            <PaymentButton
              href="https://www.qoris.org/donate/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Donate by card (opens in a new tab)"
            >
              Donate by Card
            </PaymentButton>
          </PaymentCard>
        </PaymentGrid>
        <p className="note">Payments are completed on the respective third-party provider's website.</p>
      </PaymentSection>

      <SectionTitle>Ways to Give</SectionTitle>
      <ServicesGrid>
        {services.map((service) => (
          <ServiceCard key={service.id} id={service.anchor}>
            <ServiceIcon>{service.icon}</ServiceIcon>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <ServiceFeatures>
              {service.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ServiceFeatures>
          </ServiceCard>
        ))}
      </ServicesGrid>

      <ApproachSection>
        <SectionTitle>What Your Donation Funds</SectionTitle>
        <ApproachGrid>
          {fundedItems.map((item, index) => (
            <ApproachCard key={index}>
              <div className="approach-icon">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </ApproachCard>
          ))}
        </ApproachGrid>
      </ApproachSection>

      <CtaSection>
        <h2>Our Fundraising Goal</h2>
        <p>
          QESDO needs to raise about 21,840,000 birr per year to meet the running costs of its projects and programmes. To donate or sponsor a child, use the payment options above. For any questions, email info@qesdo.org or call +251 99 326 2554.
        </p>
        <Button href="#make-your-payment">Make Your Payment</Button>
      </CtaSection>
    </PageWrapper>
  );
};

export default Donate;
