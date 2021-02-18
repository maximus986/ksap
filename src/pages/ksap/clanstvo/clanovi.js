/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Banner } from '../../../components/banner';
import Hero from '../../../components/hero';
import Layout from '../../../components/layout';
import SEO from '../../../components/seo';
import { useHeroImage } from '../../../hooks/useHeroImage';

const Clanovi = () => {
  const { name, childImageSharp } = useHeroImage();

  return (
    <Layout>
      <SEO title="Članovi" />
      <Hero img={childImageSharp.fluid} alt={name} hero={true}>
        <Banner>članovi</Banner>
      </Hero>
    </Layout>
  );
};

export default Clanovi;
