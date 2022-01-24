/** @jsx jsx */
import styled from '@emotion/styled';
import { jsx, useThemeUI, Grid, Flex } from 'theme-ui';
import Img from 'gatsby-image';
import { Banner } from '../../../components/banner';
import Hero from '../../../components/hero';
import Layout from '../../../components/layout';
import { SectionContainer } from '../../../components/sectionContainer';
import SEO from '../../../components/seo';
import { useHeroImage } from '../../../hooks/useHeroImage';

export const PAGE_QUERY = graphql`
  {
    members: allContentfulMembers(sort: { fields: order }) {
      nodes {
        id
        name
        image {
          fluid {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
  }
`;

const Clanovi = ({ data: { members } }) => {
  const { name, childImageSharp } = useHeroImage();
  const {
    theme: { colors },
  } = useThemeUI();

  return (
    <Layout>
      <SEO title="Članovi" />
      <Hero img={childImageSharp.fluid} alt={name} hero={true}>
        <Banner>članovi</Banner>
      </Hero>
      <SectionContainer sectionBgColor={colors.muted}>
        <Container>
          <Grid
            gap={[4, 5, 6]}
            columns={[
              [1, '1fr'],
              null,
              [3, '1fr 1fr 1fr'],
              [4, '1fr 1fr 1fr 1fr'],
            ]}
          >
            {members.nodes.map(member => {
              return (
                <Flex
                  key={member.id}
                  sx={{
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: ['250px', '300px', 'auto'],
                    margin: ['0 auto', null, 0],
                    flexGrow: 1,
                    background: 'rgba(34,52,128,0.15)',
                    borderRadius: '10px',
                    height: ['240px', null, '180px', '240px'],
                    padding: '20px',
                  }}
                >
                  {member.image && (
                    <BoardMemberImg
                      fluid={member.image.fluid}
                      alt={member.name}
                    />
                  )}
                </Flex>
              );
            })}
          </Grid>
        </Container>
      </SectionContainer>
    </Layout>
  );
};

export default Clanovi;

const Container = styled.div`
  @media (min-width: 576px) {
    max-width: 516px;
    margin: 0 auto;
  }
  @media (min-width: 768px) {
    max-width: 708px;
    margin: 0 auto;
  }
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
  flex-grow: 1;
`;
