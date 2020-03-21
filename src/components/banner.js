/** @jsx jsx */
import { jsx } from 'theme-ui';
import styled from '@emotion/styled';

export const Banner = ({ children }) => {
  return (
    <BannerContainer>
      <h1 sx={{ fontFamily: 'heading', fontWeight: 'bold', color: 'heading' }}>
        {children}
      </h1>
    </BannerContainer>
  );
};

const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    width: 80%;
    margin: 0 auto;
  }
  @media (min-width: 1200px) {
    width: 100%;
    margin: 0 auto;
  }

  h1 {
    font-size: 4rem;
    line-height: 4rem;
    text-transform: uppercase;
    text-align: center;

    @media (min-width: 576px) {
      font-size: 5rem;
      line-height: 5rem;
    }
    @media (min-width: 768px) {
      font-size: 7rem;
      line-height: 7rem;
    }
    @media (min-width: 992px) {
      font-size: 8rem;
      line-height: 8rem;
    }
    @media (min-width: 1200px) {
      font-size: 9rem;
      line-height: 9rem;
    }
    @media (min-width: 1600px) {
      font-size: 10rem;
      line-height: 10rem;
    }
  }
`;
