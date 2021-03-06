/** @jsx jsx */
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import { jsx, useThemeUI } from 'theme-ui';
import { Banner } from '../../../components/banner';
import Hero from '../../../components/hero';
import Layout from '../../../components/layout';
import { SectionContainer } from '../../../components/sectionContainer';
import SEO from '../../../components/seo';
import { useContentfulContent } from '../../../hooks/useContentfulContent';
import { useHeroImage } from '../../../hooks/useHeroImage';

export const PAGE_QUERY = graphql`
  {
    academy: contentfulRonaldRegan(
      id: { eq: "dfdcfb8e-cc49-5ca6-8883-5ecfa35e489b" }
    ) {
      content {
        json
      }
    }
  }
`;

const Akademija = ({ data }) => {
  const { name, childImageSharp } = useHeroImage();

  const {
    theme: { colors },
  } = useThemeUI();

  const { academy } = data;

  const options = useContentfulContent();

  return (
    <Layout>
      <SEO title="Akademija" />
      <Hero img={childImageSharp.fluid} alt={name} hero={true}>
        <Banner>akademija</Banner>
      </Hero>
      <SectionContainer sectionBgColor={colors.muted}>
        <Container>
          <Content sx={{ fontFamily: 'body', color: 'primary' }}>
            {documentToReactComponents(academy.content.json, options)}
          </Content>
        </Container>
      </SectionContainer>
    </Layout>
  );
};

export default Akademija;

const Content = styled.div`
  padding: 0 1.6rem;
  letter-spacing: 2px;
  font-size: 2rem;
  line-height: 3rem;
  font-weight: 300;
  @media (min-width: 1200px) {
    padding: 0;
    font-size: 2rem;
    line-height: 3.5rem;
    text-align: left;
  }
  @media (min-width: 1800px) {
    font-size: 2.5rem;
  }
`;

const Container = styled.div`
  @media (min-width: 1200px) {
    max-width: 1140px;
    margin: 0 auto;
  }
  @media (min-width: 1600px) {
    max-width: 1410px;
  }
  @media (min-width: 1800px) {
    max-width: 1420px;
  }
`;
