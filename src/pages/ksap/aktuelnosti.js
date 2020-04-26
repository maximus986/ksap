/** @jsx jsx */
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import { jsx, useThemeUI } from 'theme-ui';
import { Banner } from '../../components/banner';
import Hero from '../../components/hero';
import Layout from '../../components/layout';
import { SectionContainer } from '../../components/sectionContainer';
import SEO from '../../components/seo';
import { useContentfulContent } from '../../hooks/useContentfulContent';
import { useHeroImage } from '../../hooks/useHeroImage';

export const PAGE_QUERY = graphql`
  {
    news: contentfulNews {
      title
      image {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      content {
        json
      }
    }
  }
`;

const Aktuelnosti = ({ data }) => {
  const { news } = data;
  const { name, childImageSharp } = useHeroImage();

  const {
    theme: { colors },
  } = useThemeUI();

  const options = useContentfulContent();

  return (
    <Layout>
      <SEO title="Aktuelnosti" />
      <Hero img={childImageSharp.fluid} alt={name} hero={true}>
        <Banner>Aktuelnosti</Banner>
      </Hero>
      <SectionContainer sectionBgColor={colors.muted}>
        <NewsContainer
          sx={{
            fontFamily: 'body',
            textAlign: 'left',
            a: {
              fontSize: ['1.4rem', '2rem'],
            },
          }}
        >
          <figure
            sx={{
              maxWidth: ['400px', '600px'],
              mx: ['auto'],
              mb: ['3rem', null, '5rem'],
              div: {
                transition: 'link',
              },
              '&:hover': {
                div: {
                  transform: 'scale(1.2)',
                  opacity: '0.8',
                },
              },
            }}
          >
            <Image fluid={news.image.fluid} alt={news.title} />
          </figure>
          {documentToReactComponents(news.content.json, options)}
        </NewsContainer>
      </SectionContainer>
    </Layout>
  );
};

export default Aktuelnosti;

const NewsContainer = styled.div`
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
