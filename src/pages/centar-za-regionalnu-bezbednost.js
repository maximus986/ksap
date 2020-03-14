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

const CentarZaRegionalnuBezbednost = () => {
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

  const Bold = ({ children }) => <span className="bold">{children}</span>;
  const Text = ({ children }) => <p className="align-center">{children}</p>;

  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <Bold>{text}</Bold>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    },
  };
  return (
    <Layout>
      <SEO title={regionSafety} />
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
