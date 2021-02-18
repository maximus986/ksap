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
    application: contentfulSaAcademy(
      id: { eq: "f814837d-49d1-5adf-a014-73e58416f650" }
    ) {
      content {
        json
      }
    }
  }
`;

const PrijavaISelekcijaKandidata = ({ data }) => {
  const { application } = data;
  const { name, childImageSharp } = useHeroImage();

  const {
    theme: { colors },
  } = useThemeUI();

  const options = useContentfulContent();

  return (
    <Layout>
      <SEO title="Prijava i selekcija kandidata" />
      <Hero img={childImageSharp.fluid} alt={name} hero={true}>
        <Banner>prijava i selekcija kandidata</Banner>
      </Hero>
      <SectionContainer sectionBgColor={colors.muted}>
        <Container>
          <Content sx={{ fontFamily: 'body', color: 'primary' }}>
            {documentToReactComponents(application.content.json, options)}
          </Content>
        </Container>
      </SectionContainer>
    </Layout>
  );
};

export default PrijavaISelekcijaKandidata;

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
