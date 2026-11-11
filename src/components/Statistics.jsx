import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView, useReducedMotion } from 'framer-motion';

const StatisticsContainer = styled.div`
  width: 100%;
`;

const MetricsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
  }
`;

const MetricCard = styled(motion.div)`
  position: relative;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  border-radius: 1.5rem;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    border-color: rgba(255, 255, 255, 0.4);
  }
  
  @media (min-width: 640px) {
    padding: 2.5rem;
  }
`;

const GradientBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: ${props => props.gradient};
  border-radius: 1.5rem 1.5rem 0 0;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
  
  ${MetricCard}:hover & {
    transform: scaleX(1);
  }
`;

const GlowEffect = styled.div`
  position: absolute;
  inset: 0;
  background: ${props => props.gradient};
  opacity: 0;
  border-radius: 1.5rem;
  transition: opacity 0.3s ease;
  
  ${MetricCard}:hover & {
    opacity: 0.1;
  }
`;

const CardContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.75rem;
`;

const IconContainer = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 1rem;
  background: ${props => props.gradient};
  background-opacity: 0.2;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  transition: all 0.3s ease;
  
  ${MetricCard}:hover & {
    transform: scale(1.1) rotate(3deg);
  }
  
  @media (min-width: 1024px) {
    width: 5rem;
    height: 5rem;
    font-size: 2.5rem;
  }
`;

const MetricValue = styled.div`
  font-size: 3rem;
  font-weight: bold;
  background: ${props => props.gradient};
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  
  @media (min-width: 640px) {
    font-size: 3.5rem;
  }
  
  @media (min-width: 1024px) {
    font-size: 4rem;
  }
`;

const MetricLabel = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
  color: white;
  line-height: 1.4;
  padding: 0 0.5rem;
  
  @media (min-width: 640px) {
    font-size: 1rem;
  }
  
  @media (min-width: 1024px) {
    font-size: 1.125rem;
  }
`;

const CornerAccent = styled.div`
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
  width: 2rem;
  height: 2rem;
  opacity: 0;
  transition: opacity 0.3s ease;
  
  ${MetricCard}:hover & {
    opacity: 1;
  }
`;

const AccentCircle = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: ${props => props.gradient};
  opacity: 0.2;
  filter: blur(4px);
`;

const defaultMetrics = [
  { 
    id: 1, 
    value: 890, 
    suffix: '+', 
    label: 'Students served across academic and Islamic/Quranic studies', 
    icon: '🎓', 
    gradient: 'linear-gradient(135deg, #8ccbf0 0%, #5bb4e8 100%)' 
  },
  { 
    id: 2, 
    value: 11, 
    prefix: 'K–',
    suffix: '', 
    label: 'Academic programme, growing by one grade each year', 
    icon: '📚', 
    gradient: 'linear-gradient(135deg, #b9e0f7 0%, #8ccbf0 100%)' 
  },
  { 
    id: 3, 
    value: 3, 
    suffix: '', 
    label: 'Buildings in operation: two G+2 buildings and an 8-classroom building', 
    icon: '🏫', 
    gradient: 'linear-gradient(135deg, #5bb4e8 0%, #b9e0f7 100%)' 
  },
  { 
    id: 4, 
    value: 25, 
    suffix: '', 
    label: 'Council of Trustees members, locally and in the diaspora', 
    icon: '🤝', 
    gradient: 'linear-gradient(135deg, #8ccbf0 0%, #5bb4e8 100%)' 
  }
];

const Statistics = ({ metrics = defaultMetrics }) => {
  const [animatedValues, setAnimatedValues] = useState({});
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const prefersReducedMotion = useReducedMotion();

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  useEffect(() => {
    if (isInView && !hasAnimated && !prefersReducedMotion) {
      metrics.forEach(metric => {
        let start = 0;
        const end = metric.value;
        const duration = 1500;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            start = end;
            clearInterval(timer);
          }
          setAnimatedValues(prev => ({ ...prev, [metric.id]: Math.floor(start) }));
        }, 16);
      });
      setHasAnimated(true);
    } else if (prefersReducedMotion || isInView) {
      const finalValues = {};
      metrics.forEach(metric => { finalValues[metric.id] = metric.value; });
      setAnimatedValues(finalValues);
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated, prefersReducedMotion, metrics]);

  return (
    <StatisticsContainer ref={ref}>
      <MetricsGrid
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {metrics.map((metric) => (
          <MetricCard
            key={metric.id}
            variants={fadeInUp}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
          >
            <GradientBar gradient={metric.gradient} />
            <GlowEffect gradient={metric.gradient} />
            
            <CardContent>
              <IconContainer gradient={metric.gradient}>
                {metric.icon}
              </IconContainer>

              <MetricValue gradient={metric.gradient}>
                {metric.prefix}{animatedValues[metric.id] || 0}{metric.suffix}
              </MetricValue>

              <MetricLabel>
                {metric.label}
              </MetricLabel>
            </CardContent>

            <CornerAccent>
              <AccentCircle gradient={metric.gradient} />
            </CornerAccent>
          </MetricCard>
        ))}
      </MetricsGrid>
    </StatisticsContainer>
  );
};

export default Statistics;