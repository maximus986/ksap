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
import { useContentfulContent } from '../../../hooks/useContentfulContent';
import { useHeroImage } from '../../../hooks/useHeroImage';

export const PAGE_QUERY = graphql`
  {
    gallery: allFile(
      filter: {
        relativeDirectory: {
          eq: "gallery/potvrdjeno-prijateljstvo-srbije-i-sad-i-za-vreme-pandemije-virusa-covid-19"
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
      id: { eq: "a3478bf5-9f4f-59cb-ab04-388e215b88be" }
    ) {
      content {
        json
      }
    }
  }
`;

const PorvrdenoPrijateljstvoSrbijeISAD = ({ data }) => {
  const { conference, gallery } = data;

  const { name, childImageSharp } = useHeroImage();
  const {
    theme: { colors },
  } = useThemeUI();
  const options = useContentfulContent();

  return (
    <Layout>
      <SEO title="Potvrđeno prijateljstvo Srbije i SAD i za vreme pandemije virusa COVID-19" />
      <Hero img={childImageSharp.fluid} alt={name} hero={true}>
        <Banner>
          Potvrđeno prijateljstvo Srbije i SAD i za vreme pandemije virusa
          COVID-19
        </Banner>
      </Hero>
      <SectionContainer sectionBgColor={colors.muted}>
        <ConferenceContainer sx={{ fontFamily: 'body', textAlign: 'left' }}>
          {documentToReactComponents(conference.content.json, options)}
          <Grid columns={[1, '1fr 1fr', '1fr 1fr 1fr']} gap={'20px'}>
            {gallery.edges.map(({ node }) => (
              <figure key={node.id}>
                <Image fluid={node.childImageSharp.fluid} alt={node.name} />
              </figure>
            ))}
          </Grid>
        </ConferenceContainer>
      </SectionContainer>
    </Layout>
  );
};

export default PorvrdenoPrijateljstvoSrbijeISAD;

const ConferenceContainer = styled.div`
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
