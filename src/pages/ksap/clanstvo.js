/** @jsx jsx */
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import { Grid, jsx, useThemeUI } from 'theme-ui';
import { Banner } from '../../components/banner';
import { Form } from '../../components/form/form';
import Hero from '../../components/hero';
import Layout from '../../components/layout';
import { SectionContainer } from '../../components/sectionContainer';
import SEO from '../../components/seo';
import { useHeroImage } from '../../hooks/useHeroImage';
import { useSiteMetadata } from '../../hooks/useSiteMetadata';

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
  };

  return (
    <Layout>
      <SEO title={title} />
      <Hero img={childImageSharp.fluid} alt={name} hero={true}>
        <Banner>članstvo</Banner>
      </Hero>
      <SectionContainer sectionBgColor={colors.muted}>
        <MembershipContainer sx={{ fontFamily: 'body', textAlign: 'left' }}>
          <Grid columns={[1, '1fr 1fr', '1fr 2fr', 1]} gap={['30px']}>
            <div sx={{ textAlign: 'left' }}>
              <p
                sx={{
                  mb: 3,
                }}
              >
                Postanite član Kongresa srpsko-američkog prijateljstva!
              </p>
              <p sx={{ marginBottom: 4 }}>
                Popunite zahtev, a mi ćemo organizovati sastanak na kom ćemo
                dogovoriti dalje zajedničke aktivnosti i angažovanje u cilju
                jačanja srpsko-američkog prijateljstva.
              </p>
              <p>
                Zahtev možete preuzeti i u pdf formatu na sledećim linkovima:
              </p>
              <ul>
                {documents.edges.map((document, i) => (
                  <li key={i} sx={{ listStyle: 'none', my: '15px' }}>
                    <Link
                      href={document.node.document.file.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      {...{ colors }}
                    >
                      {document.node.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div sx={{ textAlign: 'center', width: [null, null, null, '60%'] }}>
              <Form />
            </div>
          </Grid>
          {documentToReactComponents(membership.content.json, options)}
        </MembershipContainer>
      </SectionContainer>
    </Layout>
  );
};

export default Clanstvo;

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

const Link = styled.a`
  color: ${props => props.colors.primary};
  border-bottom: 1px solid ${props => props.colors.primary};
  transition: 0.3s linear;
  &:hover {
    border-bottom: 1px solid ${props => props.colors.secondary};
  }
`;
