import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { SectionContainer } from '../sectionContainer';
import { carouselSettings } from './carousel-settings';
import { Founder } from './founder';

export const Founders = () => {
  const foundersSorter = (founder1, founder2) => {
    const order1 = founder1.node.order;
    const order2 = founder2.node.order;
    return order1 - order2;
  };
  const { founders } = useStaticQuery(graphql`
    {
      founders: allContentfulFounder {
        edges {
          node {
            name
            position
            order
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

  return (
    <SectionContainer sectionTitle="osnivači">
      <FoundersContainer>
        <Slider {...carouselSettings}>
          {founders.edges.sort(foundersSorter).map((node, i) => {
            return <Founder founder={node} key={i} />;
          })}
        </Slider>
      </FoundersContainer>
    </SectionContainer>
  );
};

const FoundersContainer = styled.div`
  overflow-x: hidden;
  @media (min-width: 768px) {
    /* display: flex;
    flex-wrap: wrap;
    align-items: start;
    justify-content: space-between; */
  }
`;
