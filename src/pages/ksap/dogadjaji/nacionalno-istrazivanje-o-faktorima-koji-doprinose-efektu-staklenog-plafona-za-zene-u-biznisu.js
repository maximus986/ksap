/** @jsx jsx */
import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import { Grid, jsx, useThemeUI } from 'theme-ui';
import { Banner } from '../../../components/banner';
import Hero from '../../../components/hero';
import Layout from '../../../components/layout';
import { SectionContainer } from '../../../components/sectionContainer';
import SEO from '../../../components/seo';
import { useHeroImage } from '../../../hooks/useHeroImage';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useContentfulContent } from '../../../hooks/useContentfulContent';
import { StyledGalleryImage } from '../../../components/StyledGalleryImage';

export const PAGE_QUERY = graphql`
  {
    gallery: allFile(
      filter: {
        relativeDirectory: {
          eq: "gallery/nacionalno-istrazivanje-o-faktorima-koji-doprinose-efektu-staklenog-plafona-za-zene-u-biznisu"
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
    conference: contentfulHappening(
      id: { eq: "1c9cda2a-b5de-5bc1-a545-2a4be96c177d" }
    ) {
      content {
        json
      }
    }
  }
`;

const NacionalnoIstrazivanjeOFaktorimaKojiDoprinoseEfektuStaklenogPlafonaZaZeneUBiznisu = ({
  data,
}) => {
  const { conference, gallery } = data;

  const { name, childImageSharp } = useHeroImage();
  const {
    theme: { colors },
  } = useThemeUI();

  const options = useContentfulContent();

  return (
    <Layout>
      <SEO title="Nacionalno istraživanje o faktorima koji doprinose efektu 'staklenog plafona' za žene u biznisu" />
      <Hero img={childImageSharp.fluid} alt={name} hero={true}>
        <Banner>
          Nacionalno istraživanje o faktorima koji doprinose efektu "staklenog
          plafona" za žene u biznisu
        </Banner>
      </Hero>
      <SectionContainer sectionBgColor={colors.muted}>
        <CoctailContainer sx={{ fontFamily: 'body', textAlign: 'left' }}>
          {documentToReactComponents(conference.content.json, options)}
          <Grid columns={[1, '1fr 1fr', '1fr 1fr 1fr']} gap={'20px'}>
            {gallery.edges.map(({ node }) => (
              <StyledGalleryImage
                fluid={node.childImageSharp.fluid}
                alt={node.name}
              />
            ))}
          </Grid>
        </CoctailContainer>
      </SectionContainer>
    </Layout>
  );
};

export default NacionalnoIstrazivanjeOFaktorimaKojiDoprinoseEfektuStaklenogPlafonaZaZeneUBiznisu;

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
