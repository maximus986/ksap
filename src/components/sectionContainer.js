import React from 'react';
import styled from '@emotion/styled';
import { SectionTitle } from './sectionTitle';

export const SectionContainer = ({
  sectionTitle,
  children,
  sectionBgColor,
}) => {
  return (
    <Section sectionBgColor={sectionBgColor}>
      {sectionTitle && <SectionTitle>{sectionTitle}</SectionTitle>}
      {children}
    </Section>
  );
};

const Section = styled.section`
  padding: 5rem 0;
  background: ${props => props.sectionBgColor};
  text-align: center;
  @media (min-width: 1200px) {
    padding: 7rem 0;
  }
`;
