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
    width: 100%;
    height: 100%;
    background: ${colors.gradient};
    opacity: 0.1;
  }

  h1 {
    color: ${colors.textInverse};
    font-size: 3rem;
    margin-bottom: 1.5rem;
    font-weight: 700;
    position: relative;
  }

  .subtitle {
    font-size: 1.4rem;
    font-weight: 300;
    opacity: 0.9;
    position: relative;
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.6;
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

const ChallengeSolutionGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ChallengeCard = styled.div`
  background: ${colors.surface};
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(26, 63, 143, 0.1);
  border: 1px solid ${colors.border};
  border-left: 6px solid ${colors.primary};
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(26, 63, 143, 0.15);
  }

  h3 {
    color: ${colors.primary};
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  p {
    color: ${colors.text};
    line-height: 1.7;
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
  }
`;

const SolutionCard = styled.div`
  background: ${colors.surface};
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(26, 63, 143, 0.1);
  border: 1px solid ${colors.border};
  border-left: 6px solid ${colors.secondary};
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(26, 63, 143, 0.15);
  }

  h3 {
    color: ${colors.primary};
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

const SolutionList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    padding: 0.8rem 0;
    color: ${colors.text};
    position: relative;
    padding-left: 2rem;
    line-height: 1.6;
    border-bottom: 1px solid ${colors.border};

    &:last-child {
      border-bottom: none;
    }

    &::before {
      content: '✓';
      color: ${colors.secondary};
      font-weight: bold;
      position: absolute;
      left: 0;
      font-size: 1.2rem;
    }
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
    line-height: 1.6;
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

const GetSupport = () => {
  const supportAreas = [
    {
      need: {
        title: "Who can receive support",
        description: "Children and young people in Qabridahar and the surrounding area, and their families."
      },
      help: {
        items: [
          "Academic schooling (K–11)",
          "Quranic and Islamic studies",
          "Child sponsorship support for families in need"
        ]
      }
    },
    {
      need: {
        title: "Costs and fees",
        description: "School fees apply; the amounts are about $20 per child per month for those able to pay fees."
      },
      help: {
        items: [
          "Child sponsorship is available to help families who cannot pay",
          "Enrolment: families can contact the school or the Institute directly"
        ]
      }
    }
  ];

  return (
    <PageWrapper>
      <HeroSection>
        <h1>Get Support</h1>
        <div className="subtitle">
          Academic schooling (K–11), Quranic and Islamic studies, and child sponsorship support for families in need in Qabridahar and the surrounding area.
        </div>
      </HeroSection>

      <SectionTitle>How We Can Help</SectionTitle>
      
      {supportAreas.map((item, index) => (
        <ChallengeSolutionGrid key={index}>
          <ChallengeCard>
            <h3>{item.need.title}</h3>
            <p>{item.need.description}</p>
          </ChallengeCard>
          
          <SolutionCard>
            <h3>Support available</h3>
            <SolutionList>
              {item.help.items.map((help, helpIndex) => (
                <li key={helpIndex}>{help}</li>
              ))}
            </SolutionList>
          </SolutionCard>
        </ChallengeSolutionGrid>
      ))}

      <CtaSection>
        <h2>Contact Us for Support</h2>
        <p>
          Main contact for support: Executive Director, Ilwad Keysar – ilwad.keysar@qesdo.org
        </p>
        <Button href="mailto:ilwad.keysar@qesdo.org">Email Ilwad Keysar</Button>
      </CtaSection>
    </PageWrapper>
  );
};

export default GetSupport;
