/** @jsx jsx */
import styled from '@emotion/styled';
import { jsx } from 'theme-ui';
import { Banner } from '../../../components/banner';
import Hero from '../../../components/hero';
import Layout from '../../../components/layout';
import SEO from '../../../components/seo';
import { useHeroImage } from '../../../hooks/useHeroImage';

const Predavaci = ({ data }) => {
  const { name, childImageSharp } = useHeroImage();

  return (
    <Layout>
      <SEO title="Predavači" />
      <Hero img={childImageSharp.fluid} alt={name} hero={true}>
        <Banner>predavači</Banner>
      </Hero>
      <Container>
        <Content sx={{ fontFamily: 'body', color: 'primary' }}></Content>
      </Container>
    </Layout>
  );
};

export default Predavaci;

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
    text-align: left;
  }
  @media (min-width: 1800px) {
    font-size: 2.5rem;
  }
`;

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
