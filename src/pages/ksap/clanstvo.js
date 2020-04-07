/** @jsx jsx */
import styled from '@emotion/styled';
import { jsx, useThemeUI } from 'theme-ui';
import { Banner } from '../../components/banner';
import Hero from '../../components/hero';
import Layout from '../../components/layout';
import { SectionContainer } from '../../components/sectionContainer';
import SEO from '../../components/seo';
import { useHeroImage } from '../../hooks/useHeroImage';
import { useSiteMetadata } from '../../hooks/useSiteMetadata';
import { Form } from '../../components/form/form';
import sectionBg from '../../images/postanite-clan-bg.png';
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';

export const PAGE_QUERY = graphql`
  {
    documents: allContentfulDownload {
      edges {
        node {
          label
          document {
            file {
              url
            }
          }
        }
      }
    }
    membership: contentfulMembership {
      content {
        json
      }
    }
  }
  `;

const Clanstvo = ({ data }) => {
  const { documents, membership } = data;

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
  }

  return (
    <Layout>
      <SEO title={title} />
      <Hero img={childImageSharp.fluid} alt={name} hero={true}>
        <Banner>članstvo</Banner>
      </Hero>
      <Background {...{ colors }}>
        <SectionContainer>
          <MembershipContainer sx={{ fontFamily: 'body' }}>
            <p
              sx={{
                mb: 3,
              }}
            >
              Postanite član Kongresa srpsko-američkog prijateljstva!
          </p>
            <p sx={{ marginBottom: 4 }}>
              Popunite zahtev, a mi ćemo  organizovati sastanak na kom ćemo dogovoriti
              dalje zajedničke aktivnosti i angažovanje u cilju jačanja srpsko-američkog prijateljstva.
          </p>
            <p>
              Zahtev možete preuzeti i u pdf formatu na sledećim linkovima:
          </p>
            <ul>
              {
                documents.edges.map((document, i) => (
                  <li key={i}>
                    <a href={document.node.document.file.url} target="_blank" rel="noopener noreferrer">{document.node.label}</a>
                  </li>
                ))
              }
            </ul>
            <Form />
            {documentToReactComponents(membership.content.json, options)}
          </MembershipContainer>
        </SectionContainer>
      </Background>
    </Layout>
  );
}

export default Clanstvo;

const Background = styled.div`
  background-color: ${props => props.colors.muted};
  @media (min-width: 992px) {
    background-image: url(${sectionBg});
    background-repeat: no-repeat;
    background-position: 105% -66%;
  }
  @media (min-width: 1200px) {
    background-position: 100% 26%;
  }background-position: 100% 0;
  }
`;

const MembershipContainer = styled.div`
  padding: 0 1.6rem;
  letter-spacing: 2px;
  font-size: 2rem;
  line-height: 3rem;
  font-weight: 300;
  @media (min-width: 576px) {
    width: 60%;
    margin: 0 auto;
  }
  @media (min-width: 768px) {
    width: 100%;
  }
  @media (min-width: 1200px) {
    font-size: 2rem;
    line-height: 3.5rem;
    text-align: left;
    padding: 0 6rem;
    width: 67%;
    margin: 0 auto 0 0;
  }
  @media (min-width: 1600px) {
    padding: 0 29rem;
    width: 90%;
  }
  @media (min-width: 1800px) {
    font-size: 2.5rem;
  }
`;