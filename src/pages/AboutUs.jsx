import React, { useState } from 'react';
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

  h1 {
    color: ${colors.primary};
    margin-bottom: 1.5rem;
    font-size: 2.5rem;
    font-weight: 700;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: ${colors.text};
    margin-bottom: 2rem;
  }
`;

const HeroSection = styled.div`
  background: ${colors.gradientPrimary};
  color: ${colors.textInverse};
  padding: 3rem 2rem;
  border-radius: 12px;
  margin-bottom: 3rem;
  text-align: center;

  h1 {
    color: ${colors.textInverse};
    font-size: 2.8rem;
    margin-bottom: 1rem;
  }

  .subtitle {
    font-size: 1.4rem;
    font-weight: 300;
    opacity: 0.9;
  }
`;

const Card = styled.div`
  background: ${colors.card};
  border-radius: 12px;
  padding: 2.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 20px ${colors.border};
  border-left: 4px solid ${colors.primary};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(26, 63, 143, 0.15);
  }

  h2 {
    color: ${colors.primary};
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-weight: 600;
  }

  p {
    font-size: 1rem;
    color: ${colors.text};
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }
`;

const Button = styled.button`
  background: ${colors.gradientPrimary};
  color: ${colors.textInverse};
  border: none;
  padding: 0.8rem 1.8rem;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(26, 63, 143, 0.3);

  &:hover {
    background: ${colors.primaryDark};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(26, 63, 143, 0.4);
  }
`;

const ExpandedContent = styled.div`
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid ${colors.border};
  display: ${(props) => (props.isVisible ? 'block' : 'none')};

  h3 {
    color: ${colors.primary};
    margin-bottom: 1rem;
    font-size: 1.3rem;
    font-weight: 600;
  }

  p {
    margin-bottom: 1rem;
    font-size: 1rem;
    color: ${colors.text};
    line-height: 1.6;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(350px, 100%), 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const StaffGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
`;

const StaffCard = styled.div`
  background: ${colors.surface};
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 12px ${colors.border};
  border: 1px solid ${colors.border};

  h4 {
    color: ${colors.primary};
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
    font-weight: 600;
  }

  h5 {
    color: ${colors.primaryLight};
    margin-bottom: 0.5rem;
    font-size: 1rem;
    font-weight: 600;
  }

  p {
    font-size: 0.95rem;
    margin-bottom: 0.5rem;
    line-height: 1.4;
    color: ${colors.text};
  }

  .quote {
    font-style: italic;
    color: ${colors.primaryLight};
    border-left: 3px solid ${colors.secondary};
    padding-left: 1rem;
    margin: 0.5rem 0;
    font-weight: 500;
  }
`;

const StaffSection = styled.div`
  h3 {
    color: ${colors.primary};
    margin: 1.5rem 0 1rem 0;
    font-size: 1.3rem;
    font-weight: 600;
  }
`;

const ImpactSection = styled.div`
  h3 {
    color: ${colors.primary};
    margin-bottom: 1rem;
    font-size: 1.3rem;
    font-weight: 600;
  }
  
  strong {
    color: ${colors.primary};
    font-weight: 600;
  }
  
  .highlight {
    background: linear-gradient(135deg, ${colors.primaryLight}15 0%, ${colors.secondaryLight}15 100%);
    padding: 1.5rem;
    border-radius: 8px;
    border-left: 4px solid ${colors.secondary};
    margin: 1.5rem 0;
    border: 1px solid ${colors.border};
  }
  
  .project {
    font-weight: 600;
    color: ${colors.primary};
  }
`;

const ServicesList = styled.ul`
  margin-left: 1.5rem;
  margin-bottom: 1.5rem;
  
  li {
    margin-bottom: 0.8rem;
    color: ${colors.text};
    line-height: 1.5;
    position: relative;
    padding-left: 1rem;
    
    &::before {
      content: '•';
      color: ${colors.secondary};
      font-weight: bold;
      position: absolute;
      left: 0;
    }
  }
  
  strong {
    color: ${colors.primary};
    font-weight: 600;
  }
`;

const ServicesSection = styled.div`
  h3 {
    color: ${colors.primary};
    margin-bottom: 1rem;
    font-size: 1.3rem;
    font-weight: 600;
  }
  
  .intro {
    font-weight: 600;
    color: ${colors.text};
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
  }
`;

const AboutUs = () => {
  const [expandedSections, setExpandedSections] = useState({
    history: false,
    mission: false,
    vision: false,
    values: false,
    objectives: false,
    approach: false,
    leadership: false,
    registration: false,
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const leadershipTeam = [
    { name: 'Ilwad Keysar', role: 'Executive Director' },
    { name: 'Abdiwahab Wadar Amey', role: 'Director, QORRAHEY International School' },
    { name: 'Abdiaziz Hassan Gelle', role: 'Director, QORRAHEY Institute' },
  ];

  const boardOfDirectors = [
    { name: 'Dr. Abdirashid Abdi', role: 'Chairman' },
    { name: 'Dr. Mohamed Nur', role: 'Vice-Chairman' },
    { name: 'Ahmed Abdinur', role: 'Secretary' },
    { name: 'Layli Warfa', role: 'Treasurer' },
    { name: 'Mohamed Ibrahim', role: 'Academic Track Director' },
    { name: 'Abdinur Werar', role: 'Institute Track Director' },
    { name: 'Siraji SharifAli', role: 'Public Relations & Communications' },
    { name: 'Faysal Warfa', role: 'Monitoring & Evaluation' },
    { name: 'Muxamedrashid Ali', role: 'Strategic Growth & Resources' },
    { name: 'Jamal Arab', role: 'Facilities & Infrastructure' },
    { name: 'Mohamud H. Khalif', role: 'Legal, Compliance & Personnel' },
  ];

  const governance = [
    { name: 'Ahmedhadi Ali Abdullahi', role: 'Founder' },
    { name: 'Mohamed Yusuf Ismail', role: 'Founder' },
    { name: 'Mohamed Hassan', role: 'Inspector General' },
  ];

  const renderPeople = (people) => (
    <StaffGrid>
      {people.map((person) => (
        <StaffCard key={person.name}>
          <h4>{person.name}</h4>
          <h5>{person.role}</h5>
        </StaffCard>
      ))}
    </StaffGrid>
  );

  const sections = [
    {
      id: 'history',
      title: 'Our History',
      description: 'Construction of Qorrahey International School (QORIS) officially began in October 2018.',
      expandedContent: (
        <>
          <h3>From One School to Two Tracks</h3>
          <p>
            Construction of Qorrahey International School (QORIS) officially began in October 2018. The school opened in October 2019 with 250 students in Kindergarten to Grade 6, grew to 300 students in 2020 and 350 by 2023, and has since grown to more than 650 students in both academic learning and Islamic and Quranic studies.
          </p>
          <div className="highlight">
            <p>The organisation is now registered in Ethiopia as QORIS Education and Social Development Organization, a Board-Led Organization, and runs two tracks: QORRAHEY International School and QORRAHEY Institute for Quranic and Islamic Studies.</p>
          </div>
        </>
      ),
    },
    {
      id: 'mission',
      title: 'Our Mission',
      description: 'To provide transformative education and social development programmes that build knowledge and character, preserve cultural heritage, strengthen capacity, good governance and ethical leadership, and improve the economic wellbeing of the communities we serve.',
      expandedContent: (
        <ServicesSection>
          <h3>Two Pillars</h3>
          <p className="intro">We work through two pillars:</p>
          <ServicesList>
            <li><strong>Education</strong> – academic and Quranic/Islamic learning that builds knowledge, character and cultural heritage.</li>
            <li><strong>Social development</strong> – capacity building, good governance and ethical leadership, and improving the economic wellbeing of society.</li>
          </ServicesList>
        </ServicesSection>
      ),
    },
    {
      id: 'vision',
      title: 'Our Vision',
      description: 'A prosperous, just and self-reliant society, led by a generation of knowledgeable, principled and ethical leaders who are deeply rooted in their faith and culture.',
      expandedContent: null,
    },
    {
      id: 'values',
      title: 'Our Values',
      description: "Drawn from QESDO's mission and governance documents.",
      expandedContent: (
        <ServicesSection>
          <ServicesList>
            <li>Knowledge and lifelong learning</li>
            <li>Strong character and Islamic values</li>
            <li>Ethical leadership</li>
            <li>Good governance, transparency and accountability</li>
            <li>Preservation of cultural heritage</li>
            <li>Community ownership and self-reliance</li>
          </ServicesList>
        </ServicesSection>
      ),
    },
    {
      id: 'objectives',
      title: 'Our Objectives',
      description: 'Our objectives cover education, social development and the sustainability of the organisation itself.',
      expandedContent: (
        <ServicesSection>
          <h3>Education</h3>
          <ServicesList>
            <li>Develop high-quality, integrated K–12 schools that give students the opportunity to excel in both academic and Islamic studies.</li>
            <li>Graduate knowledgeable high school students who are prepared to enrol in the best universities in the country and around the world.</li>
            <li>Equip talented young people with vocational skills that meet the needs of the local workforce.</li>
          </ServicesList>
          <h3>Social Development</h3>
          <ServicesList>
            <li>Offer capacity-building opportunities for local and regional leaders in transformative ethical leadership and culturally grounded, locally informed skills, to build a better society.</li>
            <li>Promote good governance and ethical leadership in community and local institutions.</li>
            <li>Improve the economic wellbeing of society by creating opportunities to develop modern economic methods and pathways for social mobility.</li>
          </ServicesList>
          <h3>Organisational</h3>
          <ServicesList>
            <li>Build a financially sustainable organisation that lives within its own means.</li>
          </ServicesList>
        </ServicesSection>
      ),
    },
    {
      id: 'approach',
      title: 'How We Work',
      description: 'A community-based approach to education and development, supported by the local community, local authorities and the worldwide diaspora.',
      expandedContent: (
        <>
          <h3>Practising Good Governance</h3>
          <p>
            QESDO practises the good governance and ethical leadership it promotes: it is governed by an elected 11-member Board of Directors, with independent oversight from an Inspector General and advice from a Founders' Council to safeguard the founding mission.
          </p>
          <div className="highlight">
            <p>QESDO has a Council of Trustees of 25 members, which meets at least twice annually and elects the Board of Directors.</p>
          </div>
        </>
      ),
    },
    {
      id: 'leadership',
      title: 'Team and Leadership',
      description: 'QESDO is led by an Executive Director and programme directors, and governed by an elected Board of Directors.',
      expandedContent: (
        <StaffSection>
          <h3>Leadership Team</h3>
          {renderPeople(leadershipTeam)}
          <h3>Board of Directors</h3>
          {renderPeople(boardOfDirectors)}
          <h3>Founders and Inspector General</h3>
          {renderPeople(governance)}
        </StaffSection>
      ),
    },
    {
      id: 'registration',
      title: 'Registration and Recognition',
      description: 'Registered in Ethiopia as a Board-Led Organization.',
      expandedContent: (
        <>
          <p>
            QESDO is supported by local authorities and recognised by the President of the Somali Regional State.
          </p>
        </>
      ),
    },
  ];

  return (
    <PageWrapper>
      <HeroSection>
        <h1>About QESDO</h1>
        <div className="subtitle">Educate, Empower, and Transform</div>
      </HeroSection>

      <p>
        QORIS Education and Social Development Organization (QESDO) provides transformative education and social development programmes in Qabridahar and the surrounding communities of the Somali Regional State of Ethiopia.
      </p>

      <GridContainer>
        {sections.map((section) => (
          <Card key={section.id}>
            <h2>{section.title}</h2>
            <p>{section.description}</p>
            {section.expandedContent && (
              <>
                <Button onClick={() => toggleSection(section.id)}>
                  {expandedSections[section.id] ? 'Show Less' : 'Explore More'}
                </Button>
                <ExpandedContent isVisible={expandedSections[section.id]}>
                  {section.expandedContent}
                </ExpandedContent>
              </>
            )}
          </Card>
        ))}
      </GridContainer>
    </PageWrapper>
  );
};

export default AboutUs;
