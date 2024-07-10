import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';

const AboutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 2rem;
  background: linear-gradient(45deg, #ff00ff, #00ffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Content = styled.div`
  max-width: 800px;
  font-size: 1.2rem;
  line-height: 1.6;
`;

const About = () => {
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: AboutContainer,
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
    }).from(
      contentRef.current,
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
    <AboutContainer data-scroll-section>
      <Title ref={titleRef}>About Us</Title>
      <Content ref={contentRef}>
        <p>
          We are a team of passionate SEO experts dedicated to helping
          businesses improve their online visibility. With years of experience
          and a deep understanding of search engine algorithms, we craft
          tailored strategies to boost your website's rankings and drive organic
          traffic.
        </p>
        <br />
        <p>
          Our approach combines technical expertise, creative content
          strategies, and data-driven insights to deliver measurable results.
          We're committed to staying ahead of the curve in the ever-changing
          world of SEO, ensuring that our clients always benefit from the latest
          industry trends and best practices.
        </p>
      </Content>
    </AboutContainer>
  );
};

export default About;