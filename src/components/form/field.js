/** @jsx jsx */
import styled from '@emotion/styled';
import { jsx } from 'theme-ui';

export const Field = ({ name, value, onChange, label }) => {
  return (
    <Label htmlFor={name} sx={{ color: 'primary', fontFamily: 'body' }}>
      {label}
      <Input
        type="text"
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        sx={{ color: 'primary', fontFamily: 'body' }}
      />
    </Label>
  );
};

const Label = styled.label`
  font-size: 2.5rem;
  display: flex;
  flex-direction: column;
  font-weight: 700;
`;

const Input = styled.input`
  margin-top: 1em;
  padding: 1rem 0.5rem;
  font-size: 1.5rem;
  font-weight: 700;
`;
