/** @jsx jsx */
import { useState } from 'react';
import styled from '@emotion/styled';
import { jsx, useThemeUI } from 'theme-ui';
import navLinks from '../../static-data/nav-links';
import { Link } from 'gatsby';
import { GoPlus, GoDash } from 'react-icons/go';

export const Navigation = ({ showMenu, onNavigate }) => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const {
    theme: { colors },
  } = useThemeUI();

  const handleShowSubMenu = () => {
    setShowSubMenu(showSubMenu => !showSubMenu);
  };

  return (
    <NavigationContainer>
      <NavLinks open={showMenu}>
        {navLinks.map((link, i) => (
          <ListItem key={i}>
            {
              link.submenu && (
                showSubMenu ? (
                  <MenuBtn {...{ colors }} onClick={handleShowSubMenu}>
                    <GoDash />
                  </MenuBtn>
                ) : (
                    <MenuBtn {...{ colors }} onClick={handleShowSubMenu}>
                      <GoPlus />
                    </MenuBtn>)
              )
            }
            <NavLink
              to={link.path}
              sx={{
                fontFamily: 'body',
                fontWeight: 'medium',
                transition: 'link',
                '&:hover': {
                  color: 'secondary',
                },
              }}
              activeClassName="active"
              onClick={onNavigate}
              {...{ colors }}
            >
              {link.text}
            </NavLink>
            {
              link.submenu &&
              <SubMenuLinks openSubmenu={showSubMenu} {...{ colors }}>
                {
                  link.submenu.map((subMenuLink, i) => (
                    <ListItem key={i}>
                      <SubMenuNavLink
                        to={subMenuLink.path}
                        sx={{
                          fontFamily: 'body',
                          fontWeight: 'medium',
                          transition: 'link',
                          '&:hover': {
                            color: 'secondary',
                          },
                        }}
                        activeClassName="active"
                        onClick={onNavigate}
                        {...{ colors }}
                      >{subMenuLink.text}
                      </SubMenuNavLink>
                    </ListItem>
                  ))
                }
              </SubMenuLinks>
            }
          </ListItem>
        ))}
      </NavLinks>
    </NavigationContainer>
  );
};

const NavigationContainer = styled.nav`
  flex: 1;
  margin-top: 1.2rem;
  @media (min-width: 992px) {
    margin-top: 0;
  }
`;

const NavLinks = styled.ul`
  text-align: center;
  overflow: hidden;
  transition: height 0.35s ease;
  height: ${props => (props.open ? '100vh' : '0')};
  @media (min-width: 576px) {
    height: ${props => (props.open ? '100vh' : '0')};
  }
  @media (min-width: 992px) {
    height: auto;
    display: flex;
    justify-content: space-between;
    text-align: left;
    overflow: visible;
  }
`;

const ListItem = styled.li`
    list-style-type: none;
    color: #fff;
    position: relative;
    @media(min-width: 992px) {
      &:hover > ul {
        height: 457px;
    }
    }
  }
`;

const NavLink = styled(Link)`
  display: block;
  font-size: 1.7rem;
  text-transform: uppercase;
  padding: 2rem 1.2rem;
  color: inherit;
  width: 264px;
  margin: 0 auto;
  @media (min-width: 576px) {
    width: 320px;
    font-size: 2rem;
  }
  @media (min-width: 992px) {
    width: auto;
    padding: 0 1rem;
    font-size: 1.9rem;
  }
  @media (min-width: 1200px) {
    font-size: 2.2rem;
  }
  @media (min-width: 1600px) {
    font-size: 2.6rem;
  }
  @media (min-width: 1800px) {
    font-size: 3rem;
  }
  &.active {
    color: ${props => props.colors.secondary};
  }
`;

const MenuBtn = styled.span`
position: absolute;
  top: 25px;
  right: 0;
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

const SubMenuLinks = styled.ul`
text-align: center;
overflow: hidden;
transition: height 0.35s ease;
height: ${ props => (props.openSubmenu ? '230px' : '0')};
@media(min-width: 576px) {
  height: ${ props => (props.openSubmenu ? '280px' : '0')};
}
@media(min-width: 992px) {
  position: absolute;
  top: 100%;
  left: 9px;
  width: 90%;
  padding: 1rem 0;
  height: auto;
  display: flex;
  height: 0;
  flex-direction: column;
  text-align: left;
}
`;

const SubMenuNavLink = styled(Link)`
  display: block;
  font-size: 1.7rem;
  text-transform: uppercase;
  padding: 2rem 1.2rem;
  color: inherit;
  width: 264px;
  margin: 0 auto;
  @media (min-width: 576px) {
    width: 320px;
    font-size: 2rem;
  }
  @media (min-width: 992px) {
    width: auto;
    padding: 0.5rem 0;
    font-size: 1.9rem;
  }
  @media (min-width: 1200px) {
    font-size: 2.2rem;
  }
  @media (min-width: 1600px) {
    font-size: 2.6rem;
  }
  @media (min-width: 1800px) {
    font-size: 3rem;
  }
  &.active {
    color: ${props => props.colors.secondary};
  }
`;