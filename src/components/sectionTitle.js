/** @jsx jsx */
import styled from '@emotion/styled';
import { jsx, useThemeUI } from 'theme-ui';

export const SectionTitle = ({ children }) => {
  const {
    theme: { colors },
  } = useThemeUI();
  return (
    <Title
      {...{ colors }}
      sx={{
        fontFamily: 'heading',
        color: 'heading',
      }}
    >
      {children}
    </Title>
  );
};

const Title = styled.h2`
  font-size: 3.5rem;
  text-transform: uppercase;
  margin-bottom: 4rem;
  font-weight: 400;
  &:after {
    content: '';
    height: 1px;
    width: 230px;
    display: block;
    margin: 2rem auto 0;
    background: ${props => props.colors.secondary};
  }
  @media (min-width: 992px) {
    font-size: 4.5rem;
  }
  @media (min-width: 1200px) {
    margin-bottom: 8rem;
    font-size: 6rem;
    &:after {
      width: 500px;
    }
  }
`;
