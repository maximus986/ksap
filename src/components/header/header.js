/** @jsx jsx */
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { useState } from 'react';
import { GoThreeBars, GoX } from 'react-icons/go';
import { jsx, useThemeUI } from 'theme-ui';
import logo from '../../images/logo.png';
import { Social } from '../social';
import { Navigation } from './navigation';

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const {
    theme: { colors },
  } = useThemeUI();

  const handleShowMenu = () => {
    setShowMenu(showMenu => !showMenu);
  };

  return (
    <HeaderContainer {...{ colors }}>
      <div>
        <SocialContainer sx={{ mb: 5 }}>
          <Social />
        </SocialContainer>
        <BottomHeader>
          <HeaderActionWrapper>
            <Link to="/">
              <Img src={logo} alt="Logo" />
            </Link>
            {!showMenu ? (
              <MenuBtn {...{ colors }} onClick={handleShowMenu}>
                <GoThreeBars />
              </MenuBtn>
            ) : (
              <MenuBtn {...{ colors }} onClick={handleShowMenu}>
                <GoX />
              </MenuBtn>
            )}
          </HeaderActionWrapper>
          <NavContainer>
            <Navigation
              showMenu={showMenu}
              onNavigate={() => setShowMenu(false)}
            />
          </NavContainer>
        </BottomHeader>
      </div>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  background: ${props => props.colors.primary};
  opacity: 1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1030;
  padding: 1.2rem 1.6rem 0;
  box-shadow: -5px 0rem 0rem 3px rgba(0,0,0,0.1);
  @media (min-width: 576px) {
    padding: 1.8rem 2.6rem 0.6rem;
  }
  @media (min-width: 992px) {
    position: absolute;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4rem;
    box-shadow: none;
  @media (min-width: 1200px) {
    padding: 2rem 8rem;
  }
  @media (min-width: 1600px) {
    padding: 4rem 15rem;
  }
`;

const Img = styled.img`
  height: 5rem;
  @media (min-width: 992px) {
    height: 7rem;
  }
  @media (min-width: 1600px) {
    height: 11rem;
  }
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderActionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 992px) {
    margin-right: 2rem;
  }
  @media (min-width: 1600px) {
    margin-right: 7rem;
  }
`;

const MenuBtn = styled.span`
  width: 3rem;
  height: 3rem;
  line-height: 3.2rem;
  cursor: pointer;
  font-size: 3.2rem;
  color: ${props => props.colors.secondary};
  @media (min-width: 992px) {
    display: none;
  }
`;

const SocialContainer = styled.div`
  display: none;
  @media (min-width: 992px) {
    display: flex;
    justify-content: flex-end;
  }
`;

const BottomHeader = styled.div`
  @media (min-width: 992px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;
