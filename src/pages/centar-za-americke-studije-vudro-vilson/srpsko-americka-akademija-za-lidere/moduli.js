/** @jsx jsx */
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import { jsx, useThemeUI } from 'theme-ui';
import { Banner } from '../../../components/banner';
import Hero from '../../../components/hero';
import Layout from '../../../components/layout';
import { SectionContainer } from '../../../components/sectionContainer';
import SEO from '../../../components/seo';
import { useContentfulContent } from '../../../hooks/useContentfulContent';
import { useHeroImage } from '../../../hooks/useHeroImage';

export const PAGE_QUERY = graphql`
  {
    moduls: contentfulSaAcademy(
      id: { eq: "c054d604-7a28-5105-9133-587319cab8d4" }
    ) {
      content {
        json
      }
    }
  }
`;

const Moduli = ({ data }) => {
  const { moduls } = data;
  const { name, childImageSharp } = useHeroImage();

  const {
    theme: { colors },
  } = useThemeUI();

  const options = useContentfulContent();

  return (
    <Layout>
      <SEO title="Moduli" />
      <Hero img={childImageSharp.fluid} alt={name} hero={true}>
        <Banner>moduli</Banner>
      </Hero>
      <SectionContainer sectionBgColor={colors.muted}>
        <Container>
          <Content sx={{ fontFamily: 'body', color: 'primary' }}>
            {documentToReactComponents(moduls.content.json, options)}
          </Content>
        </Container>
      </SectionContainer>
    </Layout>
  );
};

export default Moduli;

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
