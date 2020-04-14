import styled from '@emotion/styled';
import React from 'react';
import { useThemeUI } from 'theme-ui';
import { AboutUs } from '../components/aboutUs';
import { Academy } from '../components/Academy';
import { Banner } from '../components/banner';
import { Contact } from '../components/contact';
import Hero from '../components/hero';
import Layout from '../components/layout';
import Map from '../components/map';
import { Membership } from '../components/membership';
import { News } from '../components/news';
import SEO from '../components/seo';
import { SliderItems } from '../components/slider/sliderItems';
import { useHeroImage } from '../hooks/useHeroImage';
import { useSiteMetadata } from '../hooks/useSiteMetadata';
import sliderMembersSectionImg from '../images/section-bg.png';
import { Conference } from '../components/conference';

const IndexPage = () => {
  const { name, childImageSharp } = useHeroImage();
  const {
    theme: { colors },
  } = useThemeUI();

  const {
    siteMetadata: { title },
  } = useSiteMetadata();

  return (
    <Layout>
      <SEO title={title} />
      <Hero img={childImageSharp.fluid} alt={name} hero={true}>
        <Banner hero>dobro došli u ksap</Banner>
      </Hero>
      <AboutUs />
      <SliderNewsBackgroundSection {...{ colors }}>
        <SliderItems />
        <News />
        <Conference />
      </SliderNewsBackgroundSection>
      <Membership />
      <Academy />
      <Contact />
      <Map />
    </Layout>
  );
};

export default IndexPage;

const SliderNewsBackgroundSection = styled.div`
  background-image: url(${sliderMembersSectionImg});
  background-color: ${props => props.colors.primary};
  background-position: 12% 67%;
  background-repeat: no-repeat;
  @media (min-width: 576px) {
    background-position: 12% 75%;
  }
  @media (min-width: 768px) {
    background-position: 12% 41%;
  }
  @media (min-width: 1200px) {
    background-position: 12% 46%;
  }
  @media (min-width: 1600px) {
    background-position: 9px 62%;
  }
`;
