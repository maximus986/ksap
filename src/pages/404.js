/** @jsx jsx */
import styled from '@emotion/styled';
import { jsx, useThemeUI } from 'theme-ui';
import { Button } from '../components/button';
import { SectionContainer } from '../components/sectionContainer';
import SEO from '../components/seo';
import sectionImg from '../images/section-bg.png';

const NotFoundPage = () => {
  const {
    theme: { colors },
  } = useThemeUI();
  return (
    <Background {...{ colors }}>
      <SectionContainer sectionTitle="stranica ne postoji">
        <SEO title="Stranica ne postoji" />
        <SubTitle sx={{ color: 'heading', fontFamily: 'body' }}>
          Zahtevana stranica nije pronađena.
        </SubTitle>
        <Button to="/">
          <span sx={{ fontFamily: 'body' }}>Početna strana</span>
        </Button>
      </SectionContainer>
    </Background>
  );
};

export default NotFoundPage;

const SubTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 7rem;
`;

const Background = styled.div`
  background-image: url(${sectionImg});
  background-color: ${props => props.colors.primary};
  background-position: center bottom;
  background-repeat: no-repeat;
  height: 100vh;
  @media (min-width: 1200px) {
    background-position: top right;
  }
`;
