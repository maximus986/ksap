/** @jsx jsx */
import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { jsx, useThemeUI, Grid } from 'theme-ui';
import { Banner } from '../../../components/banner';
import Hero from '../../../components/hero';
import Layout from '../../../components/layout';
import { SectionContainer } from '../../../components/sectionContainer';
import SEO from '../../../components/seo';
import { useHeroImage } from '../../../hooks/useHeroImage';

export const PAGE_QUERY = graphql`
  {
    boardMembers: allContentfulBoard {
      nodes {
        id
        name
        order
        image {
          fluid {
            ...GatsbyContentfulFluid_withWebp
          }
        }
        memberPositions: positiona {
          positions {
            position
          }
        }
      }
    }
  }
`;

const SavetodavniOdbor = ({ data }) => {
  const { boardMembers } = data;
  const { name, childImageSharp } = useHeroImage();
  const sortedBoardMembers = boardMembers.nodes.sort(
    (boardMember1, boardMember2) => boardMember1.order - boardMember2.order
  );
  const {
    theme: { colors },
  } = useThemeUI();
  return (
    <Layout>
      <SEO title="Savetodavni odbor" />
      <Hero img={childImageSharp.fluid} alt={name} hero={true}>
        <Banner>Savetodavni odbor</Banner>
      </Hero>
      <SectionContainer sectionBgColor={colors.muted}>
        <Container>
          <Grid
            columns={[
              [1, '1fr'],
              [2, '1fr 1fr'],
              [3, '1fr 1fr 1fr'],
            ]}
          >
            {sortedBoardMembers.map(boardMember => {
              return (
                <div key={boardMember.id}>
                  {boardMember.image && (
                    <BoardMemberImg
                      fluid={boardMember.image.fluid}
                      alt={boardMember.name}
                    />
                  )}
                  <figcaption>
                    <BoardMemberName
                      sx={{ color: 'heading', fontFamily: 'body' }}
                    >
                      {boardMember.name}
                    </BoardMemberName>
                    {boardMember.memberPositions.positions.map(
                      (position, index) => (
                        <BoardMemberPosition
                          sx={{
                            color: 'rgba(255,255,255,0.7)',
                            fontFamily: 'body',
                          }}
                          key={index}
                        >
                          {position.position}
                        </BoardMemberPosition>
                      )
                    )}
                  </figcaption>
                </div>
              );
            })}
          </Grid>
        </Container>
      </SectionContainer>
    </Layout>
  );
};

export default SavetodavniOdbor;

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

const BoardMemberImg = styled(Img)`
  aspect-ratio: 1.2;
  margin-bottom: 2rem;
`;

const BoardMemberName = styled.span`
  font-size: 3rem;
  font-weight: 300;
  font-style: italic;
  text-transform: capitalize;
  display: block;
`;

const BoardMemberPosition = styled.span`
  font-weight: 300;
  display: block;
  font-size: 1.5rem;
`;
