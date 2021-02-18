/** @jsx jsx */
import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import { Grid, jsx, useThemeUI } from 'theme-ui';
import { Banner } from '../../../components/banner';
import Hero from '../../../components/hero';
import Layout from '../../../components/layout';
import { SectionContainer } from '../../../components/sectionContainer';
import SEO from '../../../components/seo';
import { useHeroImage } from '../../../hooks/useHeroImage';

export const PAGE_QUERY = graphql`
  {
    gallery: allFile(
      filter: {
        relativeDirectory: {
          eq: "gallery/treci-ciklus-srpsko-americke-akademije-za-lidere"
        }
      }
    ) {
      edges {
        node {
          id
          name
          childImageSharp {
            fluid(maxWidth: 4160, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;

const TreciCiklus = ({ data }) => {
  const { gallery } = data;

  const { name, childImageSharp } = useHeroImage();
  const {
    theme: { colors },
  } = useThemeUI();

  return (
    <Layout>
      <SEO title="Treći ciklus srpsko-američke akademije za lidere" />
      <Hero img={childImageSharp.fluid} alt={name} hero={true}>
        <Banner>Treći ciklus srpsko-američke akademije za lidere</Banner>
      </Hero>
      <SectionContainer sectionBgColor={colors.muted}>
        <CoctailContainer sx={{ fontFamily: 'body', textAlign: 'left' }}>
          <Grid columns={[1, '1fr 1fr', '1fr 1fr 1fr']} gap={'20px'}>
            {gallery.edges.map(({ node }) => (
              <figure key={node.id}>
                <Image fluid={node.childImageSharp.fluid} alt={node.name} />
              </figure>
            ))}
          </Grid>
        </CoctailContainer>
      </SectionContainer>
    </Layout>
  );
};

export default TreciCiklus;

const CoctailContainer = styled.div`
  padding: 0 1.6rem;
  letter-spacing: 2px;
  font-size: 2rem;
  line-height: 3rem;
  font-weight: 300;
  @media (min-width: 576px) {
  }
  @media (min-width: 768px) {
    width: 100%;
  }
  @media (min-width: 1200px) {
    text-align: left;
    font-size: 2rem;
    line-height: 3.5rem;
    max-width: 1140px;
    margin: 0 auto;
  }
  @media (min-width: 1600px) {
    max-width: 1410px;
  }
  @media (min-width: 1800px) {
    max-width: 1420px;
    font-size: 2.5rem;
  }
`;
