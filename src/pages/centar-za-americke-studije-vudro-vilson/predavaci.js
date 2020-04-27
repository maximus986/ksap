/** @jsx jsx */
import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { jsx, useThemeUI } from 'theme-ui';
import { Banner } from '../../components/banner';
import Hero from '../../components/hero';
import Layout from '../../components/layout';
import { SectionContainer } from '../../components/sectionContainer';
import SEO from '../../components/seo';
import { useHeroImage } from '../../hooks/useHeroImage';
import { useSiteMetadata } from '../../hooks/useSiteMetadata';

export const PAGE_QUERY = graphql`
  {
    teachers: allContentfulTeachers {
      nodes {
        id
        name
        order
        image {
          fluid {
            ...GatsbyContentfulFluid_withWebp
          }
        }
        teacherPositions: positiona {
          positions {
            position
          }
        }
      }
    }
  }
`;

const Predavaci = ({ data }) => {
  const { teachers } = data;
  const { name, childImageSharp } = useHeroImage();
  const {
    siteMetadata: { regionSafety },
  } = useSiteMetadata();
  const sortedTeachers = teachers.nodes.sort(
    (teacher1, teacher2) => teacher1.order - teacher2.order
  );
  const {
    theme: { colors },
  } = useThemeUI();

  return (
    <Layout>
      <SEO title={regionSafety} />
      <Hero img={childImageSharp.fluid} alt={name} hero={true}>
        <Banner>predavači</Banner>
      </Hero>
      <SectionContainer sectionBgColor={colors.muted}>
        <Container>
          <TeachersContainer>
            {sortedTeachers.map(teacher => {
              return (
                <TeacherContainer key={teacher.id}>
                  {teacher.image && (
                    <TeacherImg
                      fluid={teacher.image.fluid}
                      alt={teacher.name}
                    />
                  )}
                  <figcaption>
                    <TeacherName sx={{ color: 'heading', fontFamily: 'body' }}>
                      {teacher.name}
                    </TeacherName>
                    {teacher.teacherPositions.positions.map(
                      (position, index) => (
                        <TeacherPosition
                          sx={{
                            color: 'rgba(255,255,255,0.7)',
                            fontFamily: 'body',
                          }}
                          key={index}
                        >
                          {position.position}
                        </TeacherPosition>
                      )
                    )}
                  </figcaption>
                </TeacherContainer>
              );
            })}
          </TeachersContainer>
        </Container>
      </SectionContainer>
    </Layout>
  );
};

export default Predavaci;

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

const TeachersContainer = styled.div`
  overflow-x: hidden;
  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    align-items: start;
    justify-content: space-between;
  }
`;

const TeacherContainer = styled.figure`
  text-align: center;
  letter-spacing: 2px;
  line-height: 4rem;
  margin-bottom: 4rem;
  align-self: baseline;
  @media (min-width: 576px) {
    width: 450px;
    margin: 4rem auto 0;
  }
  @media (min-width: 992px) {
    margin: 0;
  }
`;

const TeacherImg = styled(Img)`
  line-height: 4rem;
  letter-spacing: 2px;
  margin-bottom: 2rem;
`;

const TeacherName = styled.span`
  font-size: 3rem;
  font-weight: 300;
  font-style: italic;
  text-transform: capitalize;
  display: block;
`;

const TeacherPosition = styled.span`
  font-weight: 300;
  display: block;
  font-size: 1.5rem;
`;
