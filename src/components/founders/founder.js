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
  @media (min-width: 992px) {
    margin-bottom: 0;
  }
`;

const FounderImg = styled(Img)`
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
  font-size: 3rem;
  text-transform: uppercase;
`;
