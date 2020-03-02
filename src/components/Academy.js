import React from 'react';
import Hero from './hero';
import { graphql, useStaticQuery } from 'gatsby';

export const Academy = () => {
  const { academyImage } = useStaticQuery(graphql`
    {
      academyImage: file(relativePath: { eq: "sa-academy.png" }) {
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
    <Hero img={academyImage.childImageSharp.fluid} alt={academyImage.name} />
  );
};
