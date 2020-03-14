/** @jsx jsx */
import styled from '@emotion/styled';
import { jsx, useThemeUI } from 'theme-ui';
import navLinks from '../../static-data/nav-links';
import { Link } from 'gatsby';

export const Navigation = ({ showMenu, onNavigate }) => {
  const {
    theme: { colors },
  } = useThemeUI();

  return (
    <NavigationContainer>
      <NavLinks open={showMenu}>
        {navLinks.map((link, i) => (
          <ListItem key={i}>
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
  height: ${props => (props.open ? '258px' : '0')};
  @media (min-width: 576px) {
    height: ${props => (props.open ? '280px' : '0')};
  }
  @media (min-width: 992px) {
    height: auto;
    display: flex;
    justify-content: space-between;
    text-align: left;
  }
`;

const ListItem = styled.li`
    list-style-type: none;
    color: #fff;
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
