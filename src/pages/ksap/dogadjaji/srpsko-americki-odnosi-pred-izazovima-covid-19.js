/** @jsx jsx */
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import { Grid, jsx, useThemeUI } from 'theme-ui';
import { Banner } from '../../../components/banner';
import Hero from '../../../components/hero';
import Layout from '../../../components/layout';
import { SectionContainer } from '../../../components/sectionContainer';
import SEO from '../../../components/seo';
import { StyledGalleryImage } from '../../../components/StyledGalleryImage';
import { useContentfulContent } from '../../../hooks/useContentfulContent';
import { useHeroImage } from '../../../hooks/useHeroImage';

export const PAGE_QUERY = graphql`
  {
    gallery: allFile(
      filter: {
        relativeDirectory: {
          eq: "gallery/spsko-americki-odnosi-pred-izazovima-covid-19"
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
    onlineConf: contentfulHappening(
      id: { eq: "744f2913-ecdc-5537-b28d-684a9e4c4012" }
    ) {
      title
      content {
        json
      }
    }
  }
`;

const SrpskoAmerickiOdnosiPredIzazovimaCovid19 = ({ data }) => {
  const { gallery, onlineConf } = data;
  const sortedGallery = gallery.edges.sort((galleryItem1, galleryItem2) =>
    galleryItem1.node.name > galleryItem2.node.name ? 1 : -1
  );
  const { name, childImageSharp } = useHeroImage();
  const {
    theme: { colors },
  } = useThemeUI();

  const options = useContentfulContent();

  return (
    <Layout>
      <SEO title="Srpsko-američki odnosi pred izazovima COVID-19" />
      <Hero img={childImageSharp.fluid} alt={name} hero={true}>
        <Banner>Srpsko-američki odnosi pred izazovima COVID-19</Banner>
      </Hero>
      <SectionContainer sectionBgColor={colors.muted}>
        <ConfContainer sx={{ fontFamily: 'body', textAlign: 'left' }}>
          {documentToReactComponents(onlineConf.content.json, options)}
          <Grid columns={[1, '1fr 1fr', '1fr 1fr 1fr']} gap={'20px'}>
            {sortedGallery.map(({ node }) => (
              <StyledGalleryImage
                fluid={node.childImageSharp.fluid}
                alt={node.name}
              />
            ))}
          </Grid>
        </ConfContainer>
      </SectionContainer>
    </Layout>
  );
};

export default SrpskoAmerickiOdnosiPredIzazovimaCovid19;

const ConfContainer = styled.div`
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
