/** @jsx jsx */
import styled from '@emotion/styled';
import { graphql, Link, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { jsx } from 'theme-ui';

export const Academy = () => {
  const { academyImage } = useStaticQuery(graphql`
    {
      academyImage: file(relativePath: { eq: "sa-academy.jpg" }) {
        name
        childImageSharp {
          fluid(maxWidth: 4160, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <BgImage fluid={academyImage.childImageSharp.fluid} alt={academyImage.name}>
      <h1 sx={{ textAlign: 'center', width: ['95%', '88%'], mx: 'auto' }}>
        <Link
          to="/centar-za-americke-studije-vudro-vilson"
          sx={{
            color: 'background',
            fontSize: ['3rem', '5rem', null, '9rem'],
            textTransform: 'uppercase',
            transition: '0.3s',
            '&:hover': {
              color: 'primary',
            },
          }}
        >
          Srpsko-Američka akademija za lidere
        </Link>
      </h1>
    </BgImage>
  );
};

const BgImage = styled(BackgroundImage)`
  min-height: 60vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 1 !important;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  &,
  &::before,
  &::after {
    background-attachment: fixed;
  }
  @media (min-width: 1200px) {
    min-height: 87vh;
  }
  @media (min-width: 1600px) {
    min-height: 100vh;
  }
`;
