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
import { useSiteMetadata } from '../../../hooks/useSiteMetadata';

export const PAGE_QUERY = graphql`
  {
    membership: contentfulMembership(
      id: { eq: "508d398b-37b0-5aae-a162-c30393428f6f" }
    ) {
      content {
        json
      }
    }
  }
`;

const BenefitiClanstva = ({ data }) => {
  const { membership } = data;

  const { name, childImageSharp } = useHeroImage();
  const {
    siteMetadata: { title },
  } = useSiteMetadata();
  const {
    theme: { colors },
  } = useThemeUI();

  const options = useContentfulContent();

  return (
    <Layout>
      <SEO title={title} />
      <Hero img={childImageSharp.fluid} alt={name} hero={true}>
        <Banner>benefiti članstva</Banner>
      </Hero>
      <SectionContainer sectionBgColor={colors.muted}>
        <MembershipContainer sx={{ fontFamily: 'body', textAlign: 'left' }}>
          {documentToReactComponents(membership.content.json, options)}
        </MembershipContainer>
      </SectionContainer>
    </Layout>
  );
};

export default BenefitiClanstva;

const MembershipContainer = styled.div`
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
