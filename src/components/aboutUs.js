/** @jsx jsx */
import styled from '@emotion/styled';
import { jsx, useThemeUI } from 'theme-ui';
import { SectionTitle } from './sectionTitle';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

export const AboutUs = () => {
  const { aboutUsImg } = useStaticQuery(graphql`
    {
      aboutUsImg: file(relativePath: { eq: "about-us.png" }) {
        name
        childImageSharp {
          fluid(maxWidth: 4000, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const {
    theme: { colors },
  } = useThemeUI();
  return (
    <AboutUsSection {...{ colors }}>
      <SectionTitle>o nama</SectionTitle>
      <AboutUsContent>
        <Figure>
          <Img fluid={aboutUsImg.childImageSharp.fluid} alt={aboutUsImg.name} />
        </Figure>
        <AboutUsInfo {...{ colors }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Sed ut
          perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
          inventore veritatis et quasi architecto beatae vitae
        </AboutUsInfo>
      </AboutUsContent>
    </AboutUsSection>
  );
};

const AboutUsSection = styled.section`
  padding: 5rem 0;
  background: ${props => props.colors.muted};
  text-align: center;
  @media (min-width: 1200px) {
    padding: 7rem 0;
  }
`;

const AboutUsContent = styled.div`
  @media (min-width: 1200px) {
    display: flex;
    align-items: center;
  }
`;

const Figure = styled.figure`
  margin-bottom: 2rem;
  @media (min-width: 1200px) {
    flex-basis: 50%;
    margin-right: 5%;
  }
  @media (min-width: 1600px) {
    flex-basis: 50%;
    margin-right: 3%;
  }
`;

const AboutUsInfo = styled.p`
  padding: 0 1.6rem;
  letter-spacing: 2px;
  font-size: 2rem;
  line-height: 3rem;
  font-weight: 300;
  color: ${props => props.colors.primary};
  @media (min-width: 1200px) {
    flex-basis: 40%;
    text-align: left;
    padding: 0 4rem;
  }
  @media (min-width: 1600px) {
    flex-basis: 43%;
    font-size: 2.5rem;
    line-height: 3.5rem;
  }
  @media (min-width: 1800px) {
    flex-basis: 35%;
  }
`;
