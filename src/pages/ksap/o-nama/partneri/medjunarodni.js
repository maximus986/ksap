/** @jsx jsx */
import styled from '@emotion/styled';
import { jsx, useThemeUI } from 'theme-ui';
import { Banner } from '../../../../components/banner';
import Hero from '../../../../components/hero';
import Layout from '../../../../components/layout';
import { SectionContainer } from '../../../../components/sectionContainer';
import SEO from '../../../../components/seo';
import { useHeroImage } from '../../../../hooks/useHeroImage';

const Medjunarodni = () => {
  const { name, childImageSharp } = useHeroImage();

  const {
    theme: { colors },
  } = useThemeUI();
  return (
    <Layout>
      <SEO title="Medjunarodni partneri" />
      <Hero img={childImageSharp.fluid} alt={name} hero={true}>
        <Banner>Međunarodni partneri</Banner>
      </Hero>
      <SectionContainer sectionBgColor={colors.muted}>
        <Container>
          <Content sx={{ fontFamily: 'body', color: 'primary' }}>
            <p sx={{ marginBottom: 16 }}>Međunarodni partneri:</p>
            <p>1: NDI</p>
            <p>2: IRI</p>
          </Content>
        </Container>
      </SectionContainer>
    </Layout>
  );
};

export default Medjunarodni;

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
