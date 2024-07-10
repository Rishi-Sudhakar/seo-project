import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';

const HomeContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #ff00ff, #00ffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  max-width: 800px;
  margin-bottom: 2rem;
`;

const CTAButton = styled.button`
  background: linear-gradient(45deg, #ff00ff, #00ffff);
  border: none;
  color: #fff;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border-radius: 50px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const Home = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    })
      .from(
        subtitleRef.current,
        {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
        },
        '-=0.5'
      )
      .from(
        buttonRef.current,
        {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
        },
        '-=0.5'
      );
  }, []);

  return (
    <HomeContainer data-scroll-section>
      <Title ref={titleRef}>Boost Your Online Presence</Title>
      <Subtitle ref={subtitleRef}>
        We help businesses improve their search engine rankings and drive more
        organic traffic to their websites.
      </Subtitle>
      <CTAButton ref={buttonRef}>Get Started</CTAButton>
    </HomeContainer>
  );
};

export default Home;