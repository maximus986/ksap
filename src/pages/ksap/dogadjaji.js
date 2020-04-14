/** @jsx jsx */
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import { Grid, jsx, useThemeUI } from 'theme-ui';
import { Banner } from '../../components/banner';
import Hero from '../../components/hero';
import Layout from '../../components/layout';
import { SectionContainer } from '../../components/sectionContainer';
import SEO from '../../components/seo';
import { useHeroImage } from '../../hooks/useHeroImage';
import { useSiteMetadata } from '../../hooks/useSiteMetadata';

const Dogadjaji = () => {
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
        <Banner>događaji</Banner>
      </Hero>
      <SectionContainer sectionBgColor={colors.muted}>
        <Container>
          <Grid columns={[1, '1fr 1fr', null, '1fr 1fr 1fr']} gap={'20px'}>
            <div
              sx={{
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <Link
                to="/ksap/dogadjaji/ksap-koktel"
                sx={{
                  div: {
                    transition: 'link',
                  },
                  '&:hover': {
                    div: {
                      transform: 'scale(1.2)',
                      opacity: '0.8',
                    },
                  },
                }}
              >
                <GalleryLabel
                  sx={{
                    fontSize: '3rem',
                    fontFamily: 'body',
                    color: 'background',
                    zIndex: 10,
                  }}
                >
                  KSAP Koktel
                </GalleryLabel>

                <Image fluid={childImageSharp.fluid} alt={name} />
              </Link>
            </div>
          </Grid>
        </Container>
      </SectionContainer>
    </Layout>
  );
};

export default Dogadjaji;

const Container = styled.div`
  padding: 0 1.6rem;
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

const GalleryLabel = styled.h4`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
