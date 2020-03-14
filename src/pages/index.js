import styled from '@emotion/styled';
import React from 'react';
import { useThemeUI } from 'theme-ui';
import { AboutUs } from '../components/aboutUs';
import { Academy } from '../components/academy';
import { Contact } from '../components/contact';
import { Founders } from '../components/founders/founders';
import Layout from '../components/layout';
import Map from '../components/map';
import { Members } from '../components/members';
import { News } from '../components/news/news';
import SEO from '../components/seo';
import { useSiteMetadata } from '../hooks/useSiteMetadata';
import membersContactSectionImg from '../images/postanite-clan-bg.png';
import foundersMembersSectionImg from '../images/section-bg.png';

const IndexPage = () => {
  const {
    theme: { colors },
  } = useThemeUI();

  const {
    siteMetadata: { title },
  } = useSiteMetadata();

  return (
    <Layout>
      <SEO title={title} />
      <AboutUs />
      <FoundersNewsBackgroundSection {...{ colors }}>
        <Founders />
        <News />
      </FoundersNewsBackgroundSection>
      <Academy />
      <MembersContactBackgroundSection>
        <Members />
        <Contact />
      </MembersContactBackgroundSection>
      <Map />
    </Layout>
  );
};

export default IndexPage;

const FoundersNewsBackgroundSection = styled.div`
  background-image: url(${foundersMembersSectionImg});
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

const MembersContactBackgroundSection = styled.div`
  @media (min-width: 992px) {
    background-image: url(${membersContactSectionImg});
    background-repeat: no-repeat;
    background-position: 132% 131%;
  }
  @media (min-width: 1200px) {
    background-position: 98% 117%;
  }
  @media (min-width: 1600px) {
    background-position: 100% 100%;
  }
`;
