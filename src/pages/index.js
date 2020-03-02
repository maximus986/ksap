import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Col, Container, Row } from 'react-grid-system';
import { Banner } from '../components/banner';
import Hero from '../components/hero';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { useSiteMetadata } from '../hooks/useSiteMetadata';
import { AboutUs } from '../components/aboutUs';
import { Founders } from '../components/founders/founders';
import { News } from '../components/news';
import styled from '@emotion/styled';
import sectionImg from '../images/section-bg.png';
import { useThemeUI } from 'theme-ui';

const IndexPage = () => {
  const {
    theme: { colors },
  } = useThemeUI();

  const {
    siteMetadata: { title },
  } = useSiteMetadata();

  const { heroImage } = useStaticQuery(graphql`
    {
      heroImage: file(relativePath: { eq: "hero.png" }) {
        name
        childImageSharp {
          fluid(maxWidth: 4160, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title={title} />
      <Hero
        img={heroImage.childImageSharp.fluid}
        alt={heroImage.name}
        hero={true}
      >
        <Banner />
      </Hero>
      <AboutUs />
      <BackgroundSection {...{ colors }}>
        <Founders />
        <News />
      </BackgroundSection>
    </Layout>
  );
};

export default IndexPage;

const BackgroundSection = styled.div`
  background-image: url(${sectionImg});
  background-color: ${props => props.colors.primary};
  background-position: 12% 67%;
  background-repeat: no-repeat;
  @media (min-width: 576px) {
    background-position: 12% 75%;
  }
  @media (min-width: 768px) {
    background-position: 12% 41%;
  }
  @media (min-width: 1200px) {
    background-position: 12% 46%;
  }
  @media (min-width: 1600px) {
    background-position: 9px 62%;
  }
`;
