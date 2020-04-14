/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Banner } from '../../components/banner';
import Hero from '../../components/hero';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import { useHeroImage } from '../../hooks/useHeroImage';
import { useSiteMetadata } from '../../hooks/useSiteMetadata';

const Predavaci = () => {
  const { name, childImageSharp } = useHeroImage();
  const {
    siteMetadata: { VudroVilson },
  } = useSiteMetadata();

  return (
    <Layout>
      <SEO title={VudroVilson} />
      <Hero img={childImageSharp.fluid} alt={name} hero={true}>
        <Banner>predavači</Banner>
      </Hero>
    </Layout>
  );
};

export default Predavaci;
