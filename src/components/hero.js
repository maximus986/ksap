import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import styled from '@emotion/styled';

const Hero = ({ hero, img, alt, children, className }) => {
  return (
    <BackgroundImage className={className} hero={hero} fluid={img} alt={alt}>
      {children}
    </BackgroundImage>
  );
};

export default styled(Hero)`
  min-height: 100vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 1 !important;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
