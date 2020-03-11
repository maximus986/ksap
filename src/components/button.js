/** @jsx jsx */
import styled from '@emotion/styled';
import { jsx, useThemeUI } from 'theme-ui';
import { Link } from 'gatsby';

export const Button = ({ path, children }) => {
  const {
    theme: { colors },
  } = useThemeUI();
  return (
    <Btn
      href={path}
      sx={{
        bg: 'primary',
        fontFamily: 'heading',
        fontWeight: 'bold',
        transition: 'link',
      }}
      {...{ colors }}
    >
      {children}
    </Btn>
  );
};

const Btn = styled(Link)`
  font-size: 1.2rem;
  padding: 1.5rem 3.4rem;
  text-align: center;
  text-transform: uppercase;
  border-radius: 4px;
  color: #fff;
  border: ${props => `2px solid ${props.colors.secondary}`};
  text-decoration: none;
  &:hover {
    background: transparent;
    border-color: ${props => props.colors.heading};
    color: ${props => props.colors.heading};
  }
`;
