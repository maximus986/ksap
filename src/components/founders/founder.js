/** @jsx jsx */
import { jsx } from 'theme-ui';
import Img from 'gatsby-image';
import styled from '@emotion/styled';

export const Founder = ({ founder }) => {
  const { name, position, founderImage } = founder.node;

  return (
    <FounderContainer>
      <FounderImg fluid={founderImage.fluid} alt={name} />
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
  margin-bottom: 3rem;
  letter-spacing: 2px;
  line-height: 4rem;
  @media (min-width: 768px) {
    flex-basis: 45%;
  }
  @media (min-width: 1200px) {
    margin-bottom: 0;
    flex-basis: 23%;
  }
  @media (min-width: 1600px) {
    margin-bottom: 0;
    flex-basis: 20%;
  }
`;

const FounderImg = styled(Img)`
  line-height: 4rem;
  letter-spacing: 2px;
  margin-bottom: 1rem;
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
