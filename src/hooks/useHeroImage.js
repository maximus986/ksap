import { useStaticQuery, graphql } from 'gatsby';

export const useHeroImage = () => {
  const { heroImage } = useStaticQuery(
    graphql`
      {
        heroImage: file(relativePath: { eq: "hero.png" }) {
          name
          childImageSharp {
            fluid(maxWidth: 4160, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );
  return heroImage;
};
