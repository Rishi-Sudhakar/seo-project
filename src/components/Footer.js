import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: rgba(26, 26, 46, 0.8);
  backdrop-filter: blur(10px);
  padding: 2rem;
  text-align: center;
`;

const Copyright = styled.p`
  font-size: 1rem;
  color: #fff;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Copyright>&copy; 2024 SEO Pro. All rights reserved.</Copyright>
    </FooterContainer>
  );
};

export default Footer;