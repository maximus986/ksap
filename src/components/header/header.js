/** @jsx jsx */
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { useState } from 'react';
import { GoThreeBars, GoX } from 'react-icons/go';
import { jsx, useThemeUI } from 'theme-ui';
import logo from '../../images/logo.png';
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
      <HeaderActionWrapper>
        <Link to="/">
          <Img src={logo} alt="Site logo" />
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
        <Navigation showMenu={showMenu} onNavigate={() => setShowMenu(false)} />
      </NavContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  background: ${props => props.colors.primary};
  opacity: 0.7;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1030;
  padding: 1.2rem 1.6rem 0;
  box-shadow: 0 0.0625rem 0.375rem 0 rgba(0, 0, 0, 0.1);
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
  @media (min-width: 1200px) {
    padding: 8rem 8rem;
    /* padding: ${props => (props.animate ? '1rem 8rem' : '3.4rem 8rem')}; */
  }
  @media (min-width: 1600px) {
    padding: 8rem 15rem;
    /* padding: ${props =>
      props.animate ? '1rem 19.2rem' : '3.4rem 19.2rem'}; */
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
