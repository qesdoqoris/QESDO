import React, { lazy, Suspense } from 'react';

const Statistics = lazy(() => import('../components/Statistics'));
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

const StatsPanel = styled.div`
  background: ${colors.gradientPrimary};
  padding: 3rem 1.5rem;
  border-radius: 16px;
  margin-bottom: 4rem;
`;

const enrolmentMilestones = [
  { id: 1, value: 250, suffix: '', label: 'Students when the school opened', icon: '🌱', gradient: 'linear-gradient(135deg, #b9e0f7 0%, #8ccbf0 100%)' },
  { id: 2, value: 350, suffix: '', label: 'Students in 2023', icon: '📈', gradient: 'linear-gradient(135deg, #8ccbf0 0%, #5bb4e8 100%)' },
  { id: 3, value: 650, suffix: '+', label: 'Students in academic and Islamic/Quranic studies', icon: '🎓', gradient: 'linear-gradient(135deg, #5bb4e8 0%, #b9e0f7 100%)' },
  { id: 4, value: 890, suffix: '+', label: 'Students enrolled today', icon: '🏫', gradient: 'linear-gradient(135deg, #8ccbf0 0%, #5bb4e8 100%)' }
];

const Impact = () => {
  const achievements = [
    {
      id: 1,
      icon: 'IB',
      title: 'Institute Building',
      description: 'Completed the new G+2 QORRAHEY Institute building.',
      features: []
    },
    {
      id: 2,
      icon: 'FS',
      title: 'Mini Football Stadium',
      description: 'Built the QORIS Mini Football Stadium.',
      features: []
    },
    {
      id: 3,
      icon: 'RP',
      title: 'Regional Recognition',
      description: 'Recognised by the President of the Somali Regional State.',
      features: []
    },
    {
      id: 4,
      icon: 'GS',
      title: 'Governance',
      description: 'Established a formal Board-Led governance structure with an Executive Director and an independent Inspector General.',
      features: []
    }
  ];

  const highlights = [
    { icon: '1', title: 'Fundraising in Jijiga', description: 'Fundraising event in Jijiga on 24 July 2026.' },
    { icon: '2', title: 'Institute Building', description: 'QORRAHEY Institute building completed.' },
    { icon: '3', title: 'Executive Director', description: 'Executive Director appointed.' },
    { icon: '4', title: 'Governance Charter', description: 'Governance charter prepared for Board adoption.' }
  ];

  return (
    <PageWrapper>
      <HeroSection>
        <h1>Our Impact</h1>
        <div className="subtitle">
          More than 890 students enrolled, a K–11 programme adding one grade each year, and two G+2 buildings and a third 8-classroom building in operation.
        </div>
      </HeroSection>

      <SectionTitle>Enrolment Growth</SectionTitle>
      <StatsPanel>
        <Suspense fallback={null}>
          <Statistics metrics={enrolmentMilestones} />
        </Suspense>
      </StatsPanel>

      <SectionTitle>Achievements</SectionTitle>
      <ServicesGrid>
        {achievements.map((item) => (
          <ServiceCard key={item.id}>
            <ServiceIcon>{item.icon}</ServiceIcon>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </ServiceCard>
        ))}
      </ServicesGrid>

      <ApproachSection>
        <SectionTitle>2026 Highlights</SectionTitle>
        <ApproachGrid>
          {highlights.map((item, index) => (
            <ApproachCard key={index}>
              <div className="approach-icon">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </ApproachCard>
          ))}
        </ApproachGrid>
      </ApproachSection>

      <CtaSection>
        <h2>Measuring Our Progress</h2>
        <p>
          The Board's Monitoring &amp; Evaluation Director tracks enrolment, pass rates, retention, memorisation milestones and teacher-to-student ratios.
        </p>
        <Button href="/donate">Support Our Work</Button>
      </CtaSection>
    </PageWrapper>
  );
};

export default Impact;
