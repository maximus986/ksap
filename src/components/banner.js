/** @jsx jsx */
import { jsx } from 'theme-ui';
import styled from '@emotion/styled';
import { Button } from './button';

export const Banner = () => {
  return (
    <BannerContainer>
      <h1 sx={{ fontFamily: 'heading', fontWeight: 'heading' }}>
        business solutions
      </h1>
      <p sx={{ fontFamily: 'body', fontWeight: 'body' }}>
        Aria is a top consultancy company specializing in business growth using
        online marketing and conversion optimization tactics
      </p>
      <Button path="#intro">discover</Button>
    </BannerContainer>
  );
};

const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 4rem;
    line-height: 4.8rem;
    @media (min-width: 768px) {
      font-size: 5.6rem;
      line-height: 6.4rem;
    }
    margin-bottom: 0.8rem;
    color: #fff;
    text-transform: uppercase;
    text-align: center;
  }

  p {
    font-size: 1.8rem;
    line-height: 2.6rem;
    color: #fff;
    margin: 0 auto 3.2rem;
    text-align: center;
    @media (min-width: 768px) {
      width: 58.65rem;
    }
    @media (min-width: 992px) {
      width: 60.4rem;
    }
    @media (min-width: 1200px) {
      width: 61rem;
    }
  }
`;
