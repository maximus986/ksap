/** @jsx jsx */
import styled from '@emotion/styled';
import { jsx, useThemeUI } from 'theme-ui';
import { Banner } from '../../../components/banner';
import { Founders } from '../../../components/founders/founders';
import Hero from '../../../components/hero';
import Layout from '../../../components/layout';
import { SectionContainer } from '../../../components/sectionContainer';
import SEO from '../../../components/seo';
import { useHeroImage } from '../../../hooks/useHeroImage';

const Osnivaci = () => {
  const { name, childImageSharp } = useHeroImage();

  const {
    theme: { colors },
  } = useThemeUI();
  return (
    <Layout>
      <SEO title="Osnivači" />
      <Hero img={childImageSharp.fluid} alt={name} hero={true}>
        <Banner>osnivači</Banner>
      </Hero>
      <SectionContainer sectionBgColor={colors.muted}>
        <Container>
          <Founders />
        </Container>
      </SectionContainer>
    </Layout>
  );
};

export default Osnivaci;

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
