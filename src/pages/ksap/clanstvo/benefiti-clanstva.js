/** @jsx jsx */
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import { jsx, useThemeUI } from 'theme-ui';
import { Banner } from '../../../components/banner';
import Hero from '../../../components/hero';
import Layout from '../../../components/layout';
import { SectionContainer } from '../../../components/sectionContainer';
import SEO from '../../../components/seo';
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

  const Bold = ({ children }) => (
    <span sx={{ fontWeight: 'bold' }}>{children}</span>
  );
  const Text = ({ children }) => <p sx={{ marginBottom: 16 }}>{children}</p>;
  const Heading5 = ({ children }) => (
    <h5
      sx={{
        fontSize: ['2.5rem', '3rem'],
        fontFamily: 'body',
        mb: 16,
        mt: 32,
        textTransform: 'uppercase',
      }}
    >
      {children}
    </h5>
  );
  const UlList = ({ children }) => (
    <ul sx={{ pl: ['4rem', '10rem'], textAlign: ['left'] }}>{children}</ul>
  );
  const OlList = ({ children }) => (
    <ol sx={{ pl: ['4rem', '10rem'], textAlign: ['left'] }}>{children}</ol>
  );
  const ListItem = ({ children }) => <li sx={{}}>{children}</li>;

  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <Bold>{text}</Bold>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
      [BLOCKS.HEADING_5]: (node, children) => <Heading5>{children}</Heading5>,
      [BLOCKS.UL_LIST]: (node, children) => <UlList>{children}</UlList>,
      [BLOCKS.OL_LIST]: (node, children) => <OlList>{children}</OlList>,
      [BLOCKS.LIST_ITEM]: (node, children) => <ListItem>{children}</ListItem>,
    },
  };

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
