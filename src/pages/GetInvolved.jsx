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

const PartnersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
  gap: 2.5rem;
  margin-bottom: 4rem;
`;

const PartnerCard = styled.div`
  background: ${colors.surface};
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(26, 63, 143, 0.1);
  border: 1px solid ${colors.border};
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  text-align: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${props => props.category === 'coaching' ? colors.primary : 
                          props.category === 'academic' ? colors.secondary :
                          props.category === 'corporate' ? colors.primaryLight : colors.secondaryDark};
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 40px rgba(26, 63, 143, 0.15);
  }
`;

const PartnerLogo = styled.div`
  width: 80px;
  height: 80px;
  background: ${props => props.category === 'coaching' ? `${colors.primary}20` : 
                        props.category === 'academic' ? `${colors.secondary}20` :
                        props.category === 'corporate' ? `${colors.primaryLight}20` : `${colors.secondaryDark}20`};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  font-size: 1.8rem;
  color: ${props => props.category === 'coaching' ? colors.primary : 
                    props.category === 'academic' ? colors.secondary :
                    props.category === 'corporate' ? colors.primaryLight : colors.secondaryDark};
  font-weight: bold;
`;

const PartnerName = styled.h3`
  color: ${colors.primary};
  font-size: 1.4rem;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const PartnerDescription = styled.p`
  color: ${colors.text};
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const PartnerCategory = styled.span`
  display: inline-block;
  background: ${props => props.category === 'coaching' ? `${colors.primary}20` : 
                        props.category === 'academic' ? `${colors.secondary}20` :
                        props.category === 'corporate' ? `${colors.primaryLight}20` : `${colors.secondaryDark}20`};
  color: ${props => props.category === 'coaching' ? colors.primary : 
                    props.category === 'academic' ? colors.secondary :
                    props.category === 'corporate' ? colors.primaryLight : colors.secondaryDark};
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const PartnershipBenefits = styled.div`
  background: ${colors.surface};
  padding: 4rem 2rem;
  border-radius: 16px;
  margin-bottom: 4rem;
  box-shadow: 0 8px 30px ${colors.border};
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(250px, 100%), 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const BenefitCard = styled.div`
  text-align: center;
  padding: 2rem 1rem;

  .benefit-icon {
    width: 70px;
    height: 70px;
    background: ${colors.gradientSecondary};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    font-size: 1.8rem;
    color: ${colors.primary};
  }

  h4 {
    color: ${colors.primary};
    margin-bottom: 1rem;
    font-size: 1.3rem;
    font-weight: 600;
  }

  p {
    color: ${colors.textSecondary};
    line-height: 1.6;
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

const GetInvolved = () => {
  const partners = [
    {
      id: 1,
      name: 'Volunteer',
      description: 'QESDO is looking for volunteers to join its standing committees, including curriculum development, social development, Quran and Islamic Studies programme support, the child sponsorship programme and news article development.',
      category: 'coaching',
      label: 'Volunteering',
      icon: '🙋'
    },
    {
      id: 2,
      name: 'Fundraise',
      description: 'Supporters can help raise funds for QESDO. Ongoing projects need a budget of about 21,840,000 birr per year for staff salaries, curriculum materials, building maintenance, office equipment and stationery, and organisational overhead costs.',
      category: 'corporate',
      label: 'Fundraising',
      icon: '💰'
    },
    {
      id: 3,
      name: 'Partner With Us',
      description: 'QESDO welcomes partnerships with schools, non-profit organisations, mosques and diaspora associations, including school and non-profit sponsorship.',
      category: 'corporate',
      label: 'Partnerships',
      icon: '🤝'
    },
    {
      id: 4,
      name: 'Donate',
      description: 'One-off donations, individual child sponsorship ($25 per child per month or $250 per year), and school or non-profit sponsorship.',
      category: 'coaching',
      label: 'Donations',
      icon: '❤️'
    },
    {
      id: 5,
      name: 'Corporate and Community Support',
      description: 'Local businesses, diaspora associations and community groups can sponsor students, programmes or facilities.',
      category: 'coaching',
      label: 'Community',
      icon: '🏢'
    }
  ];

  const benefits = [
    {
      icon: '🏫',
      title: 'Schools',
      description: 'Partnerships with schools, including school sponsorship.'
    },
    {
      icon: '🌐',
      title: 'Non-profit Organisations',
      description: 'Partnerships with non-profit organisations, including non-profit sponsorship.'
    },
    {
      icon: '🕌',
      title: 'Mosques',
      description: 'Partnerships with mosques.'
    },
    {
      icon: '✈️',
      title: 'Diaspora Associations',
      description: 'Diaspora associations can partner with QESDO and sponsor students, programmes or facilities.'
    }
  ];

  return (
    <PageWrapper>
      <HeroSection>
        <h1>Get Involved</h1>
        <div className="subtitle">
          QESDO is supported by the local community, local authorities and the worldwide diaspora. You can volunteer, fundraise, partner with us or donate.
        </div>
      </HeroSection>

      <SectionTitle>Ways to Get Involved</SectionTitle>
      <PartnersGrid>
        {partners.map((partner) => (
          <PartnerCard key={partner.id} category={partner.category}>
            <PartnerLogo category={partner.category}>
              {partner.icon}
            </PartnerLogo>
            <PartnerName>{partner.name}</PartnerName>
            <PartnerDescription>{partner.description}</PartnerDescription>
            <PartnerCategory category={partner.category}>
              {partner.label}
            </PartnerCategory>
          </PartnerCard>
        ))}
      </PartnersGrid>

      <PartnershipBenefits>
        <SectionTitle>Partnership Opportunities</SectionTitle>
        <BenefitsGrid>
          {benefits.map((benefit, index) => (
            <BenefitCard key={index}>
              <div className="benefit-icon">{benefit.icon}</div>
              <h4>{benefit.title}</h4>
              <p>{benefit.description}</p>
            </BenefitCard>
          ))}
        </BenefitsGrid>
      </PartnershipBenefits>

      <CtaSection>
        <h2>Contact QESDO</h2>
        <p>
          To contact QESDO, please email info@qesdo.org or call +251 99 326 2554
        </p>
        <Button href="mailto:info@qesdo.org">Email info@qesdo.org</Button>
      </CtaSection>
    </PageWrapper>
  );
};

export default GetInvolved;
