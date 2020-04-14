/** @jsx jsx */
import styled from '@emotion/styled';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Image from 'gatsby-image';
import { jsx, useThemeUI } from 'theme-ui';
import { SectionContainer } from './sectionContainer';

export const Conference = () => {
  const { news } = useStaticQuery(graphql`
    {
      news: contentfulNews {
        title
        image {
          fluid {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
  `);

  const {
    theme: { colors },
  } = useThemeUI();

  return (
    <SectionContainer
      sectionTitle="međunarodna online konferencija"
      sectionBgColor={colors.muted}
    >
      <NewsContainer>
        <div
          sx={{
            overflow: 'hidden',
            maxWidth: ['400px', '600px'],
            mx: ['auto'],
          }}
        >
          <Link
            to="/ksap/aktuelnosti"
            sx={{
              display: 'block',
              div: {
                transition: 'link',
                overflow: 'hidden',
              },
              '&:hover': {
                div: {
                  transform: 'scale(1.05)',
                  opacity: '0.8',
                },
              },
            }}
          >
            <Image fluid={news.image.fluid} alt={news.title} />
          </Link>
        </div>
      </NewsContainer>
    </SectionContainer>
  );
};

const NewsContainer = styled.div`
  padding: 0 1.6rem;
  letter-spacing: 2px;
  font-size: 2rem;
  line-height: 3rem;
  font-weight: 300;
  overflow: hidden;
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
