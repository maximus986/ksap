/** @jsx jsx */
import styled from '@emotion/styled';
import { jsx, useThemeUI, Grid } from 'theme-ui';
import { Banner } from '../../components/banner';
import Hero from '../../components/hero';
import Layout from '../../components/layout';
import { SectionContainer } from '../../components/sectionContainer';
import SEO from '../../components/seo';
import { useHeroImage } from '../../hooks/useHeroImage';
import { useSiteMetadata } from '../../hooks/useSiteMetadata';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';

export const PAGE_QUERY = graphql`
{
  gallery: allFile(filter: {relativeDirectory: {eq: "gallery"}}) {
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
`

const Dogadjaji = ({ data }) => {
  const { gallery } = data;
  const { name, childImageSharp } = useHeroImage();
  const {
    siteMetadata: { title },
  } = useSiteMetadata();
  const {
    theme: { colors },
  } = useThemeUI();
  return (
    <Layout>
      <SEO title={title} />
      <Hero img={childImageSharp.fluid} alt={name} hero={true}>
        <Banner>o nama</Banner>
      </Hero>
      <SectionContainer sectionBgColor={colors.muted}>
        <Container>
          <Grid
            columns={[1, '1fr 1fr', '1fr 1fr 1fr']}
            gap={'20px'}>
            {
              gallery.edges.map(({ node }) => (
                <figure key={node.id}>
                  <Image fluid={node.childImageSharp.fluid} alt={node.name} />
                </figure>
              ))
            }
          </Grid>
        </Container>
      </SectionContainer>
    </Layout>
  );
}

export default Dogadjaji;

const Container = styled.div`
  @media (min-width: 576px) {
    margin: 0 auto;
    padding: 0 2.6rem;
  }
  @media (min-width: 768px) {

  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
  @media (min-width: 1600px) {
    max-width: 1410px;
  }
  @media (min-width: 1800px) {
    max-width: 1420px;
  }
`;
