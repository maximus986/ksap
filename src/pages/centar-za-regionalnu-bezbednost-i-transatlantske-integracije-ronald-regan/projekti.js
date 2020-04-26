/** @jsx jsx */
import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import { jsx, useThemeUI } from 'theme-ui';
import { Banner } from '../../components/banner';
import Hero from '../../components/hero';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import { useContentfulContent } from '../../hooks/useContentfulContent';
import { useHeroImage } from '../../hooks/useHeroImage';
import { useSiteMetadata } from '../../hooks/useSiteMetadata';

export const PAGE_QUERY = graphql`
  {
    projects: contentfulRonaldRegan(
      id: { eq: "517ad931-c039-5eb2-9ba1-32b08cf11df6" }
    ) {
      content {
        json
      }
    }
  }
`;

const Projekti = ({ data }) => {
  const { name, childImageSharp } = useHeroImage();
  const {
    siteMetadata: { regionSafety },
  } = useSiteMetadata();

  const {
    theme: { colors },
  } = useThemeUI();

  const options = useContentfulContent();

  const { projects } = data;

  return (
    <Layout>
      <SEO title={regionSafety} />
      <Hero img={childImageSharp.fluid} alt={name} hero={true}>
        <Banner>projekti</Banner>
      </Hero>
      {/* <SectionContainer sectionBgColor={colors.muted}>
        <Container>
          <Content sx={{ fontFamily: 'body', color: 'primary' }}>
            {documentToReactComponents(projects.content.json, options)}
          </Content>
        </Container>
      </SectionContainer> */}
    </Layout>
  );
};

export default Projekti;

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
