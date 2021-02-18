import { useStaticQuery, graphql } from 'gatsby';

export const useHeroImage = () => {
  const { heroImage } = useStaticQuery(
    graphql`
      {
        heroImage: file(relativePath: { eq: "ksap.jpg" }) {
          name
          childImageSharp {
            fluid(maxWidth: 4160, quality: 90, toFormat: WEBP) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );
  return heroImage;
};
