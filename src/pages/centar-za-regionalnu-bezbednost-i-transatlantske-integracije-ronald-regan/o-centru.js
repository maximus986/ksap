/** @jsx jsx */
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import { jsx, useThemeUI } from 'theme-ui';
import { Banner } from '../../components/banner';
import Hero from '../../components/hero';
import Layout from '../../components/layout';
import { SectionContainer } from '../../components/sectionContainer';
import SEO from '../../components/seo';
import { useContentfulContent } from '../../hooks/useContentfulContent';
import { useHeroImage } from '../../hooks/useHeroImage';
import { useSiteMetadata } from '../../hooks/useSiteMetadata';

export const PAGE_QUERY = graphql`
  {
    aboutCenter: contentfulRonaldRegan(
      id: { eq: "6b3eec82-f338-5152-8c33-e9caae21223b" }
    ) {
      content {
        json
      }
    }
  }
`;

const OCentru = ({ data }) => {
  const { name, childImageSharp } = useHeroImage();
  const {
    siteMetadata: { regionSafety },
  } = useSiteMetadata();

  const {
    theme: { colors },
  } = useThemeUI();

  const { aboutCenter } = data;

  const options = useContentfulContent();

  return (
    <Layout>
      <SEO title="O centru" />
      <Hero img={childImageSharp.fluid} alt={name} hero={true}>
        <Banner>{regionSafety}</Banner>
      </Hero>
      <SectionContainer sectionTitle="o centru" sectionBgColor={colors.muted}>
        <Container>
          <Content sx={{ fontFamily: 'body', color: 'primary' }}>
            {documentToReactComponents(aboutCenter.content.json, options)}
          </Content>
        </Container>
      </SectionContainer>
    </Layout>
  );
};

export default OCentru;

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
