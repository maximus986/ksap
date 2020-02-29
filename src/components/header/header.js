/** @jsx jsx */
import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { jsx, useThemeUI } from 'theme-ui';
import logo from '../../images/logo.svg';
import { Navigation } from './navigation';
import { SocialLinks } from './socialLinks';

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [animateNavbar, setAnimateNavbar] = useState(false);
  const {
    theme: { colors },
  } = useThemeUI();

  const handleShowMenu = () => {
    setShowMenu(showMenu => !showMenu);
  };

  const handleScroll = () => {
    const offset = window.pageYOffset;
    if (offset >= 50) {
      setAnimateNavbar(true);
    } else {
      setAnimateNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <HeaderContainer animate={animateNavbar} {...{ colors }}>
      <HeaderActionWrapper>
        <a href="#home">
          <Img src={logo} alt="Site logo" />
        </a>
        {!showMenu ? (
          <MenuBtn {...{ colors }} onClick={handleShowMenu}>
            <FaBars />
          </MenuBtn>
        ) : (
          <MenuBtn {...{ colors }} onClick={handleShowMenu}>
            <FaTimes />
          </MenuBtn>
        )}
      </HeaderActionWrapper>
      <NavContainer>
        <Navigation showMenu={showMenu} onNavigate={() => setShowMenu(false)} />
        <SocialLinksWrapper>
          <SocialLinks />
        </SocialLinksWrapper>
      </NavContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  background: ${props => props.colors.secondary};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1030;
  padding: 1.8rem 1.6rem 0.6rem;
  box-shadow: 0 0.0625rem 0.375rem 0 rgba(0, 0, 0, 0.1);
  @media (min-width: 992px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: 0.3s ease;
    box-shadow: ${props =>
      props.animate ? '0 0.0625rem 0.375rem 0 rgba(0, 0, 0, 0.1)' : 'none'};
    padding: ${props => (props.animate ? '1rem 3.2rem' : '3.4rem 3.2rem')};
    background: ${props =>
      props.animate ? props.colors.secondary : 'transparent'};
  }
  @media (min-width: 1200px) {
    padding: 3.4rem 8rem;
    padding: ${props => (props.animate ? '1rem 8rem' : '3.4rem 8rem')};
  }
  @media (min-width: 1600px) {
    padding: 3.4rem 19.2rem;
    padding: ${props => (props.animate ? '1rem 19.2rem' : '3.4rem 19.2rem')};
  }
`;

const Img = styled.img`
  width: 11.3rem;
  height: 3.2rem;
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SocialLinksWrapper = styled.div`
  display: none;
  @media (min-width: 992px) {
    display: block;
    margin-left: 2rem;
  }
`;

const HeaderActionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MenuBtn = styled.span`
  width: 3rem;
  height: 3rem;
  line-height: 3.2rem;
  cursor: pointer;
  font-size: 3.2rem;
  color: ${props => props.colors.background};
  @media (min-width: 992px) {
    display: none;
  }
`;
