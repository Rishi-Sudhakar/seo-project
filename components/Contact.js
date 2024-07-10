import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';

const ContactContainer = styled.div`
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 500px;
  width: 100%;
`;

const Input = styled.input`
  padding: 1rem;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 5px;
  color: #fff;
  outline: none;
  transition: background 0.3s ease;

  &:focus {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const TextArea = styled.textarea`
  padding: 1rem;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 5px;
  color: #fff;
  outline: none;
  transition: background 0.3s ease;
  resize: vertical;
  min-height: 150px;

  &:focus {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const SubmitButton = styled.button`
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

const Contact = () => {
  const titleRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ContactContainer,
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
      formRef.current,
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
    <ContactContainer data-scroll-section>
      <Title ref={titleRef}>Contact Us</Title>
      <Form ref={formRef}>
        <Input type="text" placeholder="Your Name" />
        <Input type="email" placeholder="Your Email" />
        <TextArea placeholder="Your Message" />
        <SubmitButton type="submit">Send Message</SubmitButton>
      </Form>
    </ContactContainer>
  );
};

export default Contact;