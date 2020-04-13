/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Banner } from '../../components/banner';
import Hero from '../../components/hero';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import { useHeroImage } from '../../hooks/useHeroImage';

const AnalizeIIstrazivanja = () => {
  const { name, childImageSharp } = useHeroImage();

  return (
    <Layout>
      <SEO title="Analize i istrazivanja" />
      <Hero img={childImageSharp.fluid} alt={name} hero={true}>
        <Banner>Analize i istraživanja</Banner>
      </Hero>
    </Layout>
  );
};

export default AnalizeIIstrazivanja;
