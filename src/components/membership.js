/** @jsx jsx */
import styled from '@emotion/styled';
import { jsx, useThemeUI } from 'theme-ui';
import sectionBg from '../images/postanite-clan-bg.png';
import { Button } from './button';
import { SectionContainer } from './sectionContainer';

export const Membership = () => {
  const {
    theme: { colors },
  } = useThemeUI();
  return (
    <Background {...{ colors }}>
      <SectionContainer sectionTitle="postanite član">
        <MembershipContainer sx={{ fontFamily: 'body' }}>
          <p
            sx={{
              mb: 3,
            }}
          >
            Postanite član Kongresa srpsko-američkog prijateljstva!
          </p>
          <p sx={{ marginBottom: 4 }}>
            Popunite zahtev, a mi ćemo  organizovati sastanak na kom ćemo dogovoriti
            dalje zajedničke aktivnosti i angažovanje u cilju jačanja srpsko-američkog prijateljstva.
          </p>
          <Button to="/ksap/clanstvo" variant="secondary">
            <span sx={{ fontFamily: 'body' }}>Članstvo</span>
          </Button>
        </MembershipContainer>
      </SectionContainer>
    </Background>
  );
};

const Background = styled.div`
  background-color: ${props => props.colors.muted};
  @media (min-width: 992px) {
    background-image: url(${sectionBg});
    background-repeat: no-repeat;
    background-position: 105% -66%;
  }
  @media (min-width: 1200px) {
    background-position: 100% 26%;
  }background-position: 100% 0;
  }
`;

const MembershipContainer = styled.div`
  padding: 0 1.6rem;
  letter-spacing: 2px;
  font-size: 2rem;
  line-height: 3rem;
  font-weight: 300;
  @media (min-width: 576px) {
    width: 60%;
    margin: 0 auto;
  }
  @media (min-width: 768px) {
    width: 100%;
  }
  @media (min-width: 1200px) {
    font-size: 2rem;
    line-height: 3.5rem;
    text-align: left;
    padding: 0 6rem;
    width: 67%;
    margin: 0 auto 0 0;
  }
  @media (min-width: 1600px) {
    padding: 0 29rem;
    width: 90%;
  }
  @media (min-width: 1800px) {
    font-size: 2.5rem;
  }
`;

