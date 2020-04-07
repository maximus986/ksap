/** @jsx jsx */
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { jsx, useThemeUI } from 'theme-ui';
import { SectionContainer } from './sectionContainer';

export const AboutUs = () => {
  const data = useStaticQuery(graphql`
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

  const { aboutUsImg } = data;
  const {
    theme: { colors },
  } = useThemeUI();

  return (
    <SectionContainer sectionTitle="o nama" sectionBgColor={colors.muted}>
      <Container>
        <AboutUsContent>
          <Figure>
            <Img
              fluid={aboutUsImg.childImageSharp.fluid}
              alt={aboutUsImg.name}
            />
          </Figure>
          <AboutUsInfo sx={{ fontFamily: 'body', color: 'primary' }}>
            <p sx={{ marginBottom: 16 }}>
              Inicijativa za osnivanje Kongresa srpsko-američkog prijateljstva
              (KSAP) je logično i očekivano ishodište istorijske saradnje i
              društvenih procesa i odnosa, koji su u proteklom periodu
              uspostavljeni između Sjedinjenih Američkih Država i Republike
              Srbije.
            </p>
            <p sx={{ marginBottom: 32 }}>
              Pokretači ove inicijative, kako sa američke, tako i sa srpske
              strane, samo su integrisali čitav niz pozitivnih procesa u
              srpsko-američkim odnosima, pretvarajući ih u vidljivu i
              prepoznatljivu inicijativu, koja će dati snagu i otvoriti prostor
              za nove inicijative i sadržaje prijateljstva dve zemlje i dva
              naroda.
            </p>
          </AboutUsInfo>
        </AboutUsContent>
      </Container>
    </SectionContainer>
  );
};

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

const AboutUsContent = styled.div``;

const Figure = styled.figure`
  margin-bottom: 2rem;
  @media (min-width: 1200px) {
    margin-bottom: 4rem;
    width: 50%;
    float: left;
    margin-right: 3rem;
    margin-bottom: 0;
  }
`;

const AboutUsInfo = styled.div`
  padding: 0 1.6rem;
  letter-spacing: 2px;
  font-size: 2rem;
  line-height: 3rem;
  font-weight: 300;
  @media (min-width: 1200px) {
    padding: 0;
    font-size: 2rem;
    line-height: 3.5rem;
    text-align: left;
  }
  @media (min-width: 1800px) {
    font-size: 2.5rem;
  }
`;

