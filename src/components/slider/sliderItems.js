import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { SectionContainer } from '../sectionContainer';
import { carouselSettings } from './carousel-settings';
import { SliderItem } from './sliderItem';

export const SliderItems = () => {
  const { sliderItems } = useStaticQuery(graphql`
    {
      sliderItems: allContentfulSlider {
        edges {
          node {
            id
            title
            sliderImage: image {
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
    <SectionContainer sectionTitle="KSAP koktel">
      <SliderItemsContainer>
        <Slider {...carouselSettings}>
          {sliderItems.edges.map((node, i) => {
            return <SliderItem slider={node} key={i} />;
          })}
        </Slider>
      </SliderItemsContainer>
    </SectionContainer>
  );
};

const SliderItemsContainer = styled.div`
  overflow-x: hidden;
  @media (min-width: 768px) {
    /* display: flex;
    flex-wrap: wrap;
    align-items: start;
    justify-content: space-between; */
  }
`;
