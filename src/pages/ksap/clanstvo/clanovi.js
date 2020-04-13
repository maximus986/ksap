/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Banner } from '../../../components/banner';
import Hero from '../../../components/hero';
import Layout from '../../../components/layout';
import SEO from '../../../components/seo';
import { useHeroImage } from '../../../hooks/useHeroImage';
import { useSiteMetadata } from '../../../hooks/useSiteMetadata';

const Clanovi = () => {
  const { name, childImageSharp } = useHeroImage();
  const {
    siteMetadata: { title },
  } = useSiteMetadata();

  return (
    <Layout>
      <SEO title={title} />
      <Hero img={childImageSharp.fluid} alt={name} hero={true}>
        <Banner>članstvo</Banner>
      </Hero>
    </Layout>
  );
};

export default Clanovi;
