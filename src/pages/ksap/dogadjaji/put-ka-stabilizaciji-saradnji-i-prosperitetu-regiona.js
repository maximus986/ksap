/** @jsx jsx */
import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import { Grid, jsx, useThemeUI } from 'theme-ui';
import { Banner } from '../../../components/banner';
import Hero from '../../../components/hero';
import Layout from '../../../components/layout';
import { SectionContainer } from '../../../components/sectionContainer';
import SEO from '../../../components/seo';
import { useHeroImage } from '../../../hooks/useHeroImage';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useContentfulContent } from '../../../hooks/useContentfulContent';

export const PAGE_QUERY = graphql`
  {
    conference: contentfulHappening(
      id: { eq: "8d041d0a-2817-5a6f-880b-2594bf3e37f4" }
    ) {
      content {
        json
      }
    }
  }
`;

const PutKaStabilizacijiSaradnjiIProsperitetuRegiona = ({ data }) => {
  const { conference } = data;

  const { name, childImageSharp } = useHeroImage();
  const {
    theme: { colors },
  } = useThemeUI();

  const options = useContentfulContent();

  return (
    <Layout>
      <SEO title="OTVORENI BALKAN – Put ka stabilizaciji, saradnji i prosperitetu regiona" />
      <Hero img={childImageSharp.fluid} alt={name} hero={true}>
        <Banner>
          OTVORENI BALKAN – Put ka stabilizaciji, saradnji i prosperitetu
          regiona
        </Banner>
      </Hero>
      <SectionContainer sectionBgColor={colors.muted}>
        <CoctailContainer sx={{ fontFamily: 'body', textAlign: 'left' }}>
          {documentToReactComponents(conference.content.json, options)}
        </CoctailContainer>
      </SectionContainer>
    </Layout>
  );
};

export default PutKaStabilizacijiSaradnjiIProsperitetuRegiona;

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
