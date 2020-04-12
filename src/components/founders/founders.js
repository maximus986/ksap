import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Founder } from './founder';

export const Founders = () => {
  const { founders } = useStaticQuery(graphql`
    {
      founders: allContentfulFounder {
        edges {
          node {
            id
            name
            order
            position
            founderImage {
              fluid {
                ...GatsbyContentfulFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);

  const sortedFounders = founders.edges.sort(
    (founder1, founder2) => founder1.node.order - founder2.node.order
  );

  return (
    <FoundersContainer>
      {sortedFounders.map(node => {
        return <Founder founder={node} key={node.node.id} />;
      })}
    </FoundersContainer>
  );
};

const FoundersContainer = styled.div`
  overflow-x: hidden;
  @media (min-width: 992px) {
    display: flex;
    flex-wrap: wrap;
    align-items: start;
    justify-content: space-between;
  }
`;
