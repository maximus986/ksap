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
    membership: contentfulMembership(
      id: { eq: "a1887942-6428-556b-8012-43ae2f65f631" }
    ) {
      content {
        json
      }
    }
  }
`;

const Sponzorstvo = ({ data }) => {
  const { membership } = data;

  const { name, childImageSharp } = useHeroImage();
  const {
    theme: { colors },
  } = useThemeUI();

  const options = useContentfulContent();

  return (
    <Layout>
      <SEO title="Sponzorstvo" />
      <Hero img={childImageSharp.fluid} alt={name} hero={true}>
        <Banner>sponzorstvo</Banner>
      </Hero>
      <SectionContainer sectionBgColor={colors.muted}>
        <MembershipContainer sx={{ fontFamily: 'body', textAlign: 'left' }}>
          {documentToReactComponents(membership.content.json, options)}
        </MembershipContainer>
      </SectionContainer>
    </Layout>
  );
};

export default Sponzorstvo;

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
