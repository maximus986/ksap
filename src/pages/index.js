/** @jsx jsx */
import { graphql, useStaticQuery } from 'gatsby';
import { Col, Container, Row } from 'react-grid-system';
import { jsx } from 'theme-ui';
import { Banner } from '../components/banner';
import Hero from '../components/hero';
import { Intro } from '../components/intro';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { useSiteMetadata } from '../hooks/useSiteMetadata';

const IndexPage = () => {
  const {
    siteMetadata: { title },
  } = useSiteMetadata();

  const { bgImage } = useStaticQuery(graphql`
    {
      bgImage: file(relativePath: { eq: "header-background.jpg" }) {
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
    <Layout>
      <SEO title={title} />
      <Hero img={bgImage.childImageSharp.fluid} alt={bgImage.name} hero={true}>
        <Container>
          <Row>
            <Col lg={12}>
              <Banner />
            </Col>
          </Row>
        </Container>
      </Hero>
      <Intro />
    </Layout>
  );
};

export default IndexPage;
