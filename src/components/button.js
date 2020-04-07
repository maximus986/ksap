/** @jsx jsx */
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { jsx } from 'theme-ui';

export const Button = ({ variant = 'primary',
  to,
  children, }) => {
  return (
    <Btn
      to={to}
      sx={{
        variant: `buttons.${variant}`,
      }}
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
  text-decoration: none;
`;
