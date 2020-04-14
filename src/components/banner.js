/** @jsx jsx */
import { jsx } from 'theme-ui';
import styled from '@emotion/styled';

export const Banner = ({ hero, children }) => {
  return (
    <BannerContainer>
      <h1
        sx={{
          fontFamily: 'heading',
          fontWeight: hero ? 'bold' : 'medium',
          color: 'heading',
        }}
      >
        {children}
      </h1>
    </BannerContainer>
  );
};

const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  margin: 0 auto;
  @media (min-width: 1200px) {
    margin: 0 auto;
  }

  h1 {
    font-size: 3rem;
    line-height: 4rem;
    text-transform: uppercase;
    text-align: center;

    @media (min-width: 576px) {
      font-size: 5rem;
      line-height: 5rem;
    }
    @media (min-width: 768px) {
      line-height: 7rem;
    }
    @media (min-width: 992px) {
      font-size: 6rem;
    }
  }
`;
