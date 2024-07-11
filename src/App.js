import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

const AppContainer = styled.div`
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('https://source.unsplash.com/random/1920x1080?abstract') no-repeat center center fixed;
    background-size: cover;
    opacity: 0.1;
    z-index: -1;
    transform: translateZ(-10px) scale(2);
  }
`;

const App = () => {
  const cursorRef = useRef(null);
  const cursorFollowerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorFollower = cursorFollowerRef.current;

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
      });
      gsap.to(cursorFollower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
      });
    };

    document.addEventListener('mousemove', moveCursor);

    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
    });

    ScrollTrigger.scrollerProxy('[data-scroll-container]', {
      scrollTop(value) {
        return arguments.length
          ? scroll.scrollTo(value, 0, 0)
          : scroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    });

    scroll.on('scroll', ScrollTrigger.update);
    ScrollTrigger.addEventListener('refresh', () => scroll.update());

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      ScrollTrigger.removeEventListener('refresh', () => scroll.update());
      scroll.destroy();
    };
  }, []);

  return (
    <Router>
      <AppContainer>
        <div className="cursor" ref={cursorRef}></div>
        <div className="cursor-follower" ref={cursorFollowerRef}></div>
        <div data-scroll-container>
          <Header />
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
          <Footer />
        </div>
      </AppContainer>
    </Router>
  );
};

export default App;