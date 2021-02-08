/** @jsx jsx */
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { jsx, useThemeUI } from 'theme-ui';
import navLinks from '../../static-data/nav-links';
import { Social } from '../social';

export const Navigation = ({ showMenu, onNavigate }) => {
  const {
    theme: { colors },
  } = useThemeUI();

  return (
    <NavigationContainer>
      <NavLinks open={showMenu}>
        {navLinks.map((link, i) => (
          <ListItem key={i}>
            {!link.path ? (
              <FakeTopLink sx={{ fontFamily: 'body' }} key={`${i}-fake`}>
                {link.text}
              </FakeTopLink>
            ) : (
              <NavLink
                to={link.path}
                sx={{
                  fontFamily: 'body',
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
            )}

            {link.submenu && (
              <NavLinksLevel1
                {...{ colors }}
                sx={{
                  bg: `rgba(30, 37, 72, 0.7)`,
                }}
              >
                {link.submenu.map((subMenuLink, i) => (
                  <ListItemLevel1 key={i}>
                    {subMenuLink.path ? (
                      <NavLinkLevel1
                        to={subMenuLink.path}
                        sx={{
                          fontFamily: 'body',
                          transition: 'link',
                          '&:hover': {
                            color: 'secondary',
                          },
                        }}
                        activeClassName="active"
                        onClick={onNavigate}
                        {...{ colors }}
                      >
                        {subMenuLink.text}
                      </NavLinkLevel1>
                    ) : (
                      <FakeLink sx={{ fontFamily: 'body' }}>
                        {subMenuLink.text}
                      </FakeLink>
                    )}
                    {subMenuLink.submenu && (
                      <NavLinksLevel2
                        sx={{
                          bg: `rgba(30, 37, 72, 0.7)`,
                          backdropFilter: 'blur(10px)',
                        }}
                      >
                        {subMenuLink.submenu.map((subMenuLink, i) => (
                          <ListItemLevel2 key={i}>
                            {subMenuLink.path ? (
                              <NavLinkLevel2
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
                              >
                                {subMenuLink.text}
                              </NavLinkLevel2>
                            ) : (
                              <FakeLink sx={{ fontFamily: 'body' }}>
                                {subMenuLink.text}
                              </FakeLink>
                            )}
                            {subMenuLink.submenu && (
                              <NavLinksLevel3
                                sx={{
                                  bg: `rgba(30, 37, 72, 0.9)`,
                                }}
                              >
                                {subMenuLink.submenu.map((subMenuLink, i) => (
                                  <ListItemLevel3 key={i}>
                                    <NavLinkLevel3
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
                                    >
                                      {subMenuLink.text}
                                    </NavLinkLevel3>
                                  </ListItemLevel3>
                                ))}
                              </NavLinksLevel3>
                            )}
                          </ListItemLevel2>
                        ))}
                      </NavLinksLevel2>
                    )}
                  </ListItemLevel1>
                ))}
              </NavLinksLevel1>
            )}
          </ListItem>
        ))}
        <SocialContainer>
          <Social />
        </SocialContainer>
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
  padding-bottom: ${props => (props.open ? '90px' : '0')};
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
  @media (min-width: 992px) {
    &:hover > ul {
      display: flex;
    }
    &:hover > p {
      color: #db2c26;
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
  &.active {
    color: ${props => props.colors.secondary};
  }
`;

// const MenuBtn = styled.span`
//   position: absolute;
//   top: 25px;
//   right: 0;
//   width: 3rem;
//   height: 3rem;
//   line-height: 3.2rem;
//   cursor: pointer;
//   font-size: 3.2rem;
//   color: ${props => props.colors.secondary};
//   @media (min-width: 992px) {
//     display: none;
//   }
// `;

const NavLinksLevel1 = styled.ul`
  text-align: left;
  transition: height 0.35s ease;
  @media (min-width: 576px) {
  }
  @media (min-width: 992px) {
    position: absolute;
    top: 100%;
    left: 9px;
    width: auto;
    min-width: 200px;
    padding: 1.5rem 0 1.5rem 1rem;
    display: none;
    height: auto;
    flex-direction: column;
    text-align: left;
  }
`;

const NavLinkLevel1 = styled(Link)`
  display: block;
  font-size: 1.7rem;
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
    padding: 0.5rem 0;
    font-size: 1.7rem;
  }
  @media (min-width: 1200px) {
    font-size: 1.9rem;
  }
  @media (min-width: 1600px) {
    font-size: 2.3rem;
  }
  @media (min-width: 1800px) {
    font-size: 2.5rem;
  }
  &.active {
    color: ${props => props.colors.secondary};
  }
`;

const NavLinksLevel2 = styled.ul`
  text-align: left;
  overflow: hidden;
  transition: height 0.35s ease;
  height: auto;
  /* height: ${props => (props.openSubmenu ? '230px' : '0')}; */
  @media (min-width: 576px) {
    /* height: ${props => (props.openSubmenu ? '280px' : '0')}; */
  }
  @media (min-width: 992px) {
    position: absolute;
    overflow: visible;
    left: 100%;
    top: -43%;
    width: 300px;
    padding: 1.5rem 0 1.5rem 1rem;
    display: none;
    height: auto;
    flex-direction: column;
    text-align: left;
  }
  @media (min-width: 1200px) {
    top: -47%;
  }
  @media (min-width: 1600px) {
    top: -40%;
  }
  @media (min-width: 1800px) {
    top: -37%;
  }
`;

const ListItemLevel1 = styled.li`
  padding-left: 40px;
  list-style-type: none;
  color: #fff;
  position: relative;
  @media (min-width: 992px) {
    padding-left: 0;
    &:hover > ul {
      display: flex;
    }
    &:hover > p {
      color: #db2c26;
    }
  }
`;

const ListItemLevel2 = styled.li`
  list-style-type: none;
  color: #fff;
  position: relative;
  @media (min-width: 992px) {
    &:hover > ul {
      display: flex;
    }
    &:hover > p {
      color: #db2c26;
    }
  }
`;
const NavLinkLevel2 = styled(Link)`
  display: block;
  font-size: 1.7rem;
  text-transform: uppercase;
  padding: 1rem 3.2rem;
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
    font-size: 1.5rem;
  }
  @media (min-width: 1200px) {
    font-size: 1.8rem;
  }
  @media (min-width: 1600px) {
    font-size: 2rem;
  }
  @media (min-width: 1800px) {
    font-size: 2.2rem;
  }
  &.active {
    color: ${props => props.colors.secondary};
  }
`;

const NavLinksLevel3 = styled.ul`
  text-align: left;
  overflow: hidden;
  transition: height 0.35s ease;
  height: auto;
  /* height: ${props => (props.openSubmenu ? '230px' : '0')}; */
  @media (min-width: 576px) {
    /* height: ${props => (props.openSubmenu ? '280px' : '0')}; */
  }
  @media (min-width: 992px) {
    position: absolute;
    left: 100%;
    top: -32%;
    width: 300px;
    padding: 1.5rem 0 1.5rem 1rem;
    display: none;
    height: auto;
    flex-direction: column;
    text-align: left;
  }
`;
const ListItemLevel3 = styled.li`
  list-style-type: none;
  color: #fff;
  position: relative;
  @media (min-width: 992px) {
    &:hover > ul {
      display: flex;
    }
  }
`;
const NavLinkLevel3 = styled(Link)`
  display: block;
  font-size: 1.7rem;
  text-transform: uppercase;
  padding: 1rem 3.2rem;
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
    font-size: 1.5rem;
  }
  @media (min-width: 1200px) {
    font-size: 1.8rem;
  }
  @media (min-width: 1600px) {
    font-size: 2rem;
  }
  @media (min-width: 1800px) {
    font-size: 2.2rem;
  }
  &.active {
    color: ${props => props.colors.secondary};
  }
`;

const FakeLink = styled.p`
  display: block;
  font-size: 1.7rem;
  text-transform: uppercase;
  padding: 0;
  color: inherit;
  width: 264px;
  margin: 0 auto;
  cursor: pointer;
  transition: 0.3s linear;
  font-weight: 700;
  @media (min-width: 576px) {
    width: 320px;
    font-size: 2rem;
  }
  @media (min-width: 992px) {
    font-weight: 500;
    width: auto;
    padding: 0.5rem 0;
    font-size: 1.5rem;
  }
  @media (min-width: 1200px) {
    font-size: 1.8rem;
  }
  @media (min-width: 1600px) {
    font-size: 2rem;
  }
  @media (min-width: 1800px) {
    font-size: 2.2rem;
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

const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-left: -1.6rem;
  @media (min-width: 992px) {
    display: none;
  }
`;
