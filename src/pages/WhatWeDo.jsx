import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

const WhatWeDo = () => {
  const services = [
    {
      id: 1,
      icon: 'IS',
      title: 'QORRAHEY International School (QORIS)',
      description: 'Academic education from Kindergarten to Grade 11, adding one grade each year.',
      features: [
        'For children and young people from Kindergarten to Grade 11',
        'Academic teaching and character development',
        'Delivered by qualified teachers',
        'Led by Director Abdiwahab Wadar Amey'
      ]
    },
    {
      id: 2,
      icon: 'QI',
      title: 'QORRAHEY Institute for Quranic and Islamic Studies',
      description: 'Quran memorisation tracks and an Islamic studies syllabus in a dedicated G+2 building.',
      features: [
        'For students of Quranic and Islamic studies',
        'A planned programme for junior high students (Grade 7 and above)',
        'Quran memorisation and Islamic studies',
        'Led by Director Abdiaziz Hassan Gelle'
      ]
    },
    {
      id: 3,
      icon: 'SD',
      title: 'Social Development',
      description: 'Capacity building, good governance and ethical leadership, and programmes that improve the economic wellbeing of the community.',
      features: [
        'Programmes to meet the capacity building needs of the regional administration',
        'Good governance and ethical leadership',
        'Supporting communities with economic wellbeing through upward social mobility'
      ]
    },
    {
      id: 4,
      icon: 'YS',
      title: 'QORIS Mini Football Stadium',
      description: 'Sport and recreation for young people.',
      features: [
        'Youth development and sports',
        'Sports facilities for young people'
      ]
    }
  ];

  const approachPrinciples = [
    {
      icon: '1',
      title: 'Programme Leadership',
      description: 'Each programme is led by its own director and overseen by a dedicated Board Track Director.'
    },
    {
      icon: '2',
      title: 'Shared Operations',
      description: 'The Executive Director manages shared operations such as finance, HR and joint events.'
    },
    {
      icon: '3',
      title: 'Where We Work',
      description: 'Qabridahar, Somali Regional State, Ethiopia. Our programmes are open to all the communities living in the Qorrahey region and the Somali Regional State.'
    },
    {
      icon: '4',
      title: 'Costs and Fees',
      description: 'School fees apply; the amounts are about $20 per child per month for those able to pay fees. Child sponsorship is available to help families who cannot pay.'
    },
    {
      icon: '5',
      title: 'Enrolment',
      description: 'Families can contact the school or the Institute directly.'
    }
  ];

  return (
    <PageWrapper>
      <HeroSection>
        <h1>What We Do</h1>
        <div className="subtitle">
          Academic teaching, Quran memorisation, Islamic studies, character development and sports facilities, delivered by qualified teachers in three purpose-built buildings.
        </div>
      </HeroSection>

      <SectionTitle>Our Programmes</SectionTitle>
      <ServicesGrid>
        {services.map((service) => (
          <ServiceCard key={service.id}>
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
        <SectionTitle>How Our Programmes Work</SectionTitle>
        <ApproachGrid>
          {approachPrinciples.map((principle, index) => (
            <ApproachCard key={index}>
              <div className="approach-icon">{principle.icon}</div>
              <h4>{principle.title}</h4>
              <p>{principle.description}</p>
            </ApproachCard>
          ))}
        </ApproachGrid>
      </ApproachSection>

      <CtaSection>
        <h2>Sponsor a Child</h2>
        <p>
          Child sponsorship is available to help families who cannot pay school fees: $25 per child per month, or $250 per year.
        </p>
        <Button as={Link} to="/donate#sponsor-a-child">Sponsor a Child</Button>
      </CtaSection>
    </PageWrapper>
  );
};

export default WhatWeDo;
