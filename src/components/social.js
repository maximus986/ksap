/** @jsx jsx */
import styled from '@emotion/styled';
import { Fragment } from 'react';
import { jsx, useThemeUI } from 'theme-ui';
import socialLinks from '../static-data/social-links';

export const Social = () => {
  const {
    theme: { colors },
  } = useThemeUI();

  return (
    <SocialContainer>
      {socialLinks.map((link, i) => {
        return (
          <Fragment key={i}>
            <SocialLink
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              {...{ colors }}
            >
              <IconContainer {...{ colors }}>{link.icon}</IconContainer>
            </SocialLink>
          </Fragment>
        );
      })}
    </SocialContainer>
  );
};

const SocialContainer = styled.div`
  display: flex;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    div {
      background: ${props => props.colors.secondary};
    }
    span {
      color: ${props => props.colors.secondary};
    }
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  line-height: 40px;
  border-radius: 50%;
  margin-right: 10px;
  background: ${props => props.colors.primary};
  transition: 0.3s linear;
  svg {
    font-size: 2rem;
    color: ${props => props.colors.heading};
  }
`;
