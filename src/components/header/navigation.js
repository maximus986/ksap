/** @jsx jsx */
import styled from '@emotion/styled';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Scrollspy from 'react-scrollspy';
import { jsx, useThemeUI } from 'theme-ui';
import navLinks from '../../static-data/nav-links';

export const Navigation = ({ showMenu, onNavigate }) => {
  const {
    theme: { colors },
  } = useThemeUI();

  return (
    <NavigationContainer>
      <NavLinks
        open={showMenu}
        items={navLinks.map(link => link.text)}
        currentClassName="active"
      >
        {navLinks.map((link, i) => (
          <ListItem key={i} {...{ colors }}>
            <Link
              href={link.path}
              sx={{
                fontFamily: 'body',
                fontWeight: 'links',
                transition: 'link',
                '&:hover': {
                  color: 'primary',
                },
              }}
              onClick={onNavigate}
            >
              {link.text}
            </Link>
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

const NavLinks = styled(Scrollspy)`
  overflow: hidden;
  transition: height 0.35s ease;
  height: ${props => (props.open ? '258px' : '0')};
  @media (min-width: 992px) {
    height: auto;
    display: flex;
  }
`;

const ListItem = styled.li`
    list-style-type: none;
    color: #fff;
    &.active {
      color: ${props => props.colors.primary};
    }
  }
`;

const Link = styled(AnchorLink)`
  display: block;
  font-size: 1.4rem;
  text-transform: uppercase;
  padding: 1rem 1.2rem;
  color: inherit;
  @media (min-width: 992px) {
    padding: 0.4rem 1.2rem;
  }
`;
