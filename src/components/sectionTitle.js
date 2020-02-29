/** @jsx jsx */
import styled from '@emotion/styled';
import { Fragment } from 'react';
import { jsx } from 'theme-ui';

export const SectionTitle = ({ children, intro }) => {
  return (
    <Fragment>
      {intro && (
        <Intro
          sx={{ color: 'primary', fontFamily: 'heading', fontWeight: 'body' }}
        >
          {intro}
        </Intro>
      )}
      <Title
        sx={{ color: 'heading', fontWeight: 'heading', fontFamily: 'heading' }}
      >
        {children}
      </Title>
    </Fragment>
  );
};

const Intro = styled.p`
  font-size: 1.3rem;
  margin-bottom: 8px;
  text-transform: uppercase;
`;

const Title = styled.h2`
  font-size: 2.8rem;
`;
