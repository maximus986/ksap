/** @jsx jsx */
import styled from '@emotion/styled';
import { Grid, jsx, useThemeUI } from 'theme-ui';
import { Banner } from '../../components/banner';
import { Contact } from '../../components/contact';
import Hero from '../../components/hero';
import Layout from '../../components/layout';
import Map from '../../components/map';
import { SectionContainer } from '../../components/sectionContainer';
import SEO from '../../components/seo';
import { useHeroImage } from '../../hooks/useHeroImage';
import { useSiteMetadata } from '../../hooks/useSiteMetadata';


const Kontakt = () => {
  const { name, childImageSharp } = useHeroImage();
  const {
    siteMetadata: { title },
  } = useSiteMetadata();
  const {
    theme: { colors },
  } = useThemeUI();
  return (
    <Layout>
      <SEO title={title} />
      <Hero img={childImageSharp.fluid} alt={name} hero={true}>
        <Banner>kontakt</Banner>
      </Hero>
      <SectionContainer sectionBgColor={colors.muted}>
        <Container>
          <Content sx={{
            fontFamily: 'body', color: 'primary'
          }}>
            <Contact />
            <Grid columns={[1, null, '1fr 1fr 1fr']} gap={['30px']} sx={{ alignItems: 'center' }}>
              <div>
                <p sx={{ fontWeight: '700' }}>Adresa:</p>
                <p>Njegoseva bb Beograd</p>
              </div>
              <div>
                <p sx={{ fontWeight: '700' }}>Email adresa:</p>
                <Link href="mailto: " {...{ colors }}>ksap@gmail.com</Link>
              </div>
              <div>
                <p sx={{ fontWeight: '700' }}>Telefon:</p>
                <Link href="tel: " {...{ colors }}> 0110110011</Link>
              </div>
            </Grid>
          </Content>
        </Container>
      </SectionContainer>
      <Map />
    </Layout>
  );
}

export default Kontakt;

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

const Content = styled.div`
  padding: 0 1.6rem;
  letter-spacing: 2px;
  font-size: 2rem;
  line-height: 3rem;
  font-weight: 300;
  @media (min-width: 1200px) {
    padding: 0;
    font-size: 2rem;
    line-height: 3.5rem;
  }
  @media (min-width: 1800px) {
    font-size: 2.5rem;
  }
`;

const Link = styled.a`
  color: ${props => props.colors.primary};
  border-bottom: 1px solid ${ props => props.colors.primary};
  transition: 0.3s linear;
    &:hover {
    border-bottom: 1px solid ${ props => props.colors.secondary};
  }
`;
