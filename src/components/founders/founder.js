/** @jsx jsx */
import styled from '@emotion/styled';
import Img from 'gatsby-image';
import { jsx } from 'theme-ui';

export const Founder = ({ founder }) => {
  const { name, founderImage, position } = founder.node;

  return (
    <FounderContainer>
      {founderImage && <FounderImg fluid={founderImage.fluid} alt={name} />}
      <figcaption>
        <FounderName sx={{ color: 'heading', fontFamily: 'body' }}>
          {name}
        </FounderName>
        <FounderPosition sx={{ color: 'heading', fontFamily: 'body' }}>
          {position}
        </FounderPosition>
      </figcaption>
    </FounderContainer>
  );
};

const FounderContainer = styled.figure`
  text-align: center;
  letter-spacing: 2px;
  line-height: 4rem;
  margin-bottom: 4rem;
  align-self: baseline;
  @media (min-width: 576px) {
    width: 450px;
    margin: 4rem auto 0;
  }
  @media (min-width: 992px) {
    width: 260px;
  }
  @media (min-width: 1200px) {
    width: 360px;
  }
  @media (min-width: 1800px) {
    width: 410px;
  }
`;

const FounderImg = styled(Img)`
  line-height: 4rem;
  letter-spacing: 2px;
  margin-bottom: 2rem;
`;

const FounderName = styled.span`
  font-size: 3rem;
  font-weight: 300;
  font-style: italic;
  text-transform: capitalize;
  display: block;
`;

const FounderPosition = styled.span`
  font-weight: 300;
  display: block;
  font-size: 2rem;
  text-transform: uppercase;
`;
