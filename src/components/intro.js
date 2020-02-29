import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import { Col, Container, Row } from 'react-grid-system';
import { SectionTitle } from './sectionTitle';

export const Intro = () => {
  const { sectionImg } = useStaticQuery(graphql`
    {
      sectionImg: file(relativePath: { eq: "intro-office.jpg" }) {
        name
        childImageSharp {
          fluid(maxWidth: 800, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <Section id="intro">
      <Container>
        <Row>
          <Col lg={5}>
            <SectionTitleContainer>
              <SectionTitle intro="intro">
                We Offer Some Of The Best Business Growth Services In Town
              </SectionTitle>
            </SectionTitleContainer>
            <Text
              sx={{ fontFamily: 'body', fontWeight: 'body', color: 'text' }}
            >
              Launching a new company or developing the market position of an
              existing one can be quite an overwhelming processs at times.
            </Text>
            <Text
              sx={{ fontFamily: 'body', fontWeight: 'body', color: 'text' }}
            >
              Our mission here at Aira is to get you through those tough moments
              relying on our team's expertise in starting and growing companies.
            </Text>
          </Col>
          <Col lg={7}>
            <ImageContainer>
              <Image fluid={sectionImg.childImageSharp.fluid} />
            </ImageContainer>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

const SectionTitleContainer = styled.div`
  margin-bottom: 2.2rem;
`;

const Section = styled.section`
  padding: 10rem 0 4rem;
`;

const Text = styled.p`
  font-size: 16px;
  margin-bottom: 16px;
`;

const ImageContainer = styled.div`
  border-radius: 4px;
  overflow: hidden;
`;

const Image = styled(Img)`
  transition: 0.3s ease;
  &:hover {
    transform: scale(1.15);
  }
`;
