/** @jsx jsx */
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import { jsx, useThemeUI } from 'theme-ui';
import Layout from '../components/layout';
import { SectionContainer } from '../components/sectionContainer';
import SEO from '../components/seo';
import { useSiteMetadata } from '../hooks/useSiteMetadata';
import Hero from '../components/hero';
import { Banner } from '../components/banner';
import { useHeroImage } from '../hooks/useHeroImage';

const CentarZaRegionalnuBezbednost = () => {
  const { name, childImageSharp } = useHeroImage();
  const {
    siteMetadata: { regionSafety },
  } = useSiteMetadata();

  const {
    theme: { colors },
  } = useThemeUI();

  const { center } = useStaticQuery(graphql`
    {
      center: allContentfulCenter {
        edges {
          node {
            aboutCenter {
              json
            }
          }
        }
      }
    }
  `);

  const regionSafetyContent = center.edges[0].node.aboutCenter.json;

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
  // TODO Check font size
  const Heading6 = ({ children }) => (
    <h6
      sx={{
        fontSize: ['2rem', '2.5rem'],
        fontFamily: 'body',
        mb: 16,
        mt: 32,
        textTransform: 'uppercase',
      }}
    >
      {children}
    </h6>
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
      [BLOCKS.HEADING_6]: (node, children) => <Heading6>{children}</Heading6>,
      [BLOCKS.UL_LIST]: (node, children) => <UlList>{children}</UlList>,
      [BLOCKS.OL_LIST]: (node, children) => <OlList>{children}</OlList>,
      [BLOCKS.LIST_ITEM]: (node, children) => <ListItem>{children}</ListItem>,
    },
  };
  return (
    <Layout>
      <SEO title={regionSafety} />
      <Hero img={childImageSharp.fluid} alt={name} hero={true}>
        <Banner>{regionSafety}</Banner>
      </Hero>
      <SectionContainer sectionTitle="o centru" sectionBgColor={colors.muted}>
        <Container>
          <Content sx={{ fontFamily: 'body', color: 'primary' }}>
            {documentToReactComponents(regionSafetyContent, options)}
          </Content>
        </Container>
      </SectionContainer>
    </Layout>
  );
};

export default CentarZaRegionalnuBezbednost;

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
  h5 {
    font-size: 3rem;
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
