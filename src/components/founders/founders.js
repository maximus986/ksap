import React from 'react';
import { SectionContainer } from '../sectionContainer';
import { useThemeUI } from 'theme-ui';
import { graphql, useStaticQuery } from 'gatsby';
import { Founder } from './founder';
import styled from '@emotion/styled';
import { Container, Row, Col } from 'react-grid-system';

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

  const {
    theme: { colors },
  } = useThemeUI();
  return (
    <SectionContainer sectionTitle="osnivači" sectionBgColor={colors.primary}>
      <Container>
        <Row>
          {founders.edges.sort(foundersSorter).map((node, i) => {
            return (
              <Col lg={6} xl={3} key={i}>
                <Founder founder={node} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </SectionContainer>
  );
};

const FoundersContainer = styled.div`
  @media (min-width: 992px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
