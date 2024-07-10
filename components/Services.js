import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';

const ServicesContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 2rem;
  text-align: center;
  background: linear-gradient(45deg, #ff00ff, #00ffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  width: 100%;
`;

const ServiceCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  padding: 2rem;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const ServiceIcon = styled.i`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
`;

const services = [
  {
    icon: '🔍',
    title: 'Keyword Research',
    description:
      'Identify the most valuable keywords for your business to target.',
  },
  {
    icon: '📝',
    title: 'Content Optimization',
    description:
      'Optimize your website content to rank higher in search results.',
  },
  {
    icon: '🔗',
    title: 'Link Building',
    description: 'Build high-quality backlinks to boost your domain authority.',
  },
  {
    icon: '📊',
    title: 'Analytics & Reporting',
    description: 'Track your SEO performance with detailed analytics reports.',
  },
];

const Services = () => {
  const titleRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ServicesContainer,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
      },
    });

    tl.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    });

    cardRefs.current.forEach((card, index) => {
      tl.from(
        card,
        {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
        },
        `-=${index === 0 ? 0.5 : 0.8}`
      );
    });
  }, []);

  return (
    <ServicesContainer data-scroll-section>
      <Title ref={titleRef}>Our Services</Title>
      <ServiceGrid>
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
          >
            <ServiceIcon>{service.icon}</ServiceIcon>
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
          </ServiceCard>
        ))}
      </ServiceGrid>
    </ServicesContainer>
  );
};

export default Services;