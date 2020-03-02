/** @jsx jsx */
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { jsx, useThemeUI } from 'theme-ui';

export const Members = () => {
  const {
    theme: { colors },
  } = useThemeUI();
  const images = useStaticQuery(graphql`
    {
      ncr: file(relativePath: { eq: "ncr.png" }) {
        name
        childImageSharp {
          fixed(width: 279, height: 279) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      pm: file(relativePath: { eq: "philip-morris.png" }) {
        name
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <Section>
      <Title
        {...{ colors }}
        sx={{
          fontFamily: 'heading',
          color: 'primary',
        }}
      >
        premijum članovi i sponzori godine 2020.
      </Title>
      <SectionContent>
        <Figure>
          <Img fixed={images.ncr.childImageSharp.fixed} alt={images.ncr.name} />
        </Figure>
        <figure>
          <Img fluid={images.pm.childImageSharp.fluid} alt={images.pm.name} />
        </figure>
      </SectionContent>
    </Section>
  );
};

const Section = styled.section`
  padding: 5rem 1.6rem;
  text-align: center;
  @media (min-width: 992px) {
    padding: 5rem 8.6rem;
  }
  @media (min-width: 1200px) {
    padding: 7rem 0;
  }
`;

const Title = styled.h2`
  display: inline-block;
  font-size: 3.5rem;
  text-transform: uppercase;
  margin-bottom: 4rem;
  font-weight: 500;
  &:after {
    content: '';
    height: 1px;
    width: 100%;
    display: block;
    margin: 2rem auto 0;
    background: ${props => props.colors.secondary};
  }
  @media (min-width: 992px) {
    font-size: 4.5rem;
  }
  @media (min-width: 1200px) {
    margin: 0 auto 8rem;
    font-size: 6rem;
    max-width: 100rem;
  }
  @media (min-width: 1600px) {
    max-width: 100%;
  }
`;

const SectionContent = styled.div`
  @media (min-width: 576px) {
    max-width: 60rem;
    margin: 0 auto;
  }
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    figure {
      &:last-child {
        flex-basis: 50%;
      }
    }
  }
  @media (min-width: 992px) {
    max-width: 90rem;
    figure {
      &:last-child {
        max-width: 600px;
      }
    }
  }
  @media (min-width: 1200px) {
    max-width: 100rem;
    figure {
      &:last-child {
        max-width: 600px;
      }
    }
  }
  @media (min-width: 1600px) {
    max-width: 120rem;
    figure {
      &:last-child {
        max-width: 600px;
      }
    }
  }
`;

const Figure = styled.figure`
  @media (min-width: 576px) {
  }
`;
