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
import galleries from '../../static-data/gallery-config';

const Dogadjaji = () => {
  const { name, childImageSharp } = useHeroImage();
  const {
    theme: { colors },
  } = useThemeUI();
  return (
    <Layout>
      <SEO title="Događaji" />
      <Hero img={childImageSharp.fluid} alt={name} hero={true}>
        <Banner>događaji</Banner>
      </Hero>
      <SectionContainer sectionBgColor={colors.muted}>
        <Container>
          <Grid columns={[1, '1fr 1fr', null, '1fr 1fr 1fr']} gap={'20px'}>
            {galleries.map(({ path, label }, i) => (
              <div
                sx={{
                  position: 'relative',
                  overflow: 'hidden',
                }}
                key={i}
              >
                <Link
                  to={path}
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
                      fontSize: ['1.5rem', null, '2rem'],
                      fontFamily: 'body',
                      color: 'background',
                      zIndex: 10,
                    }}
                  >
                    {label}
                  </GalleryLabel>
                  <Image fluid={childImageSharp.fluid} alt={name} />
                </Link>
              </div>
            ))}
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
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
`;
