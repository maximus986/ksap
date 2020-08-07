/** @jsx jsx */
import React, { Fragment } from 'react';
import navLinks from '../../static-data/nav-links';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { jsx, useThemeUI } from 'theme-ui';
import { Collapse } from './collapse';

const renderLink = (menuItem, onNavigate) => {
  return (
    <>
      {!menuItem.path ? (
        <FakeTopLink sx={{ fontFamily: 'body' }}>{menuItem.text}</FakeTopLink>
      ) : (
        <NavLink
          to={menuItem.path}
          sx={{
            fontFamily: 'body',
            transition: 'link',
            '&:hover': {
              color: 'secondary',
            },
            '&.active': {
              color: 'secondary',
            },
          }}
          activeClassName="active"
          onClick={onNavigate}
          // {...{ colors }}
        >
          {menuItem.text}
        </NavLink>
      )}
    </>
  );
};
const renderMenuItem = (menuItem, onNavigate) => {
  if (menuItem.submenu) {
    return renderSubmenu(menuItem, onNavigate);
  }
  return <ListItem>{renderLink(menuItem, onNavigate)}</ListItem>;
};

const renderSubmenu = (menuItem, onNavigate) => {
  return (
    <div sx={{ position: 'relative' }}>
      <ListItem>{renderLink(menuItem, onNavigate)}</ListItem>
      <WithCollapse menuItem={menuItem}>
        <ul>
          {menuItem.submenu.map((submenuItem, i) => {
            return (
              <Fragment key={i}>
                {renderMenuItem(submenuItem, onNavigate)}
              </Fragment>
            );
          })}
        </ul>
      </WithCollapse>
    </div>
  );
};

const WithCollapse = ({ children, menuItem }) => (
  <Collapse menuItem={menuItem}>{children}</Collapse>
);

export const NavigationRefactor = ({ onNavigate, showMenu }) => {
  return (
    <NavigationContainer>
      <NavLinks open={showMenu}>
        {navLinks.map((menuItem, i) => {
          if (menuItem.submenu && menuItem.submenu.length) {
            return (
              <Fragment key={i}>{renderSubmenu(menuItem, onNavigate)}</Fragment>
            );
          }
          return renderMenuItem(menuItem, onNavigate);
        })}
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
  text-align: left;
  overflow: scroll;
  overflow-x: hidden;
  transition: height 0.35s ease;
  height: ${props => (props.open ? '100vh' : '0')};
  padding-bottom: ${props => (props.open ? '40px' : '0')};
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
        display: flex;
      }
      &:hover > p {
      color: #db2c26;
      }
    }
  }
`;

const NavLink = styled(Link)`
  display: block;
  font-size: 1.9rem;
  text-transform: uppercase;
  padding: 1rem 0;
  color: inherit;
  width: 264px;
  margin: 0 auto;
  font-weight: 700;
  @media (min-width: 576px) {
    width: 320px;
    font-size: 2rem;
  }
  @media (min-width: 992px) {
    font-weight: 500;
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
`;

const FakeTopLink = styled.p`
  display: block;
  font-size: 1.9rem;
  text-transform: uppercase;
  padding: 1rem 0;
  color: inherit;
  width: 264px;
  margin: 0 auto;
  transition: 0.3s linear;
  cursor: pointer;
  font-weight: 700;
  @media (min-width: 576px) {
    width: 320px;
  }
  @media (min-width: 992px) {
    font-weight: 500;
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
`;
