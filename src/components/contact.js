/** @jsx jsx */
import styled from '@emotion/styled';
import { jsx, useThemeUI } from 'theme-ui';
import socialLinks from '../static-data/social-links';

export const Contact = () => {
  const {
    theme: { colors },
  } = useThemeUI();

  return (
    <Section>
      <Title
        {...{ colors }}
        sx={{
          fontFamily: 'body',
          color: 'primary',
          fontWeight: 'medium',
        }}
      >
        kontaktirajte ksap
      </Title>
      <SectionContent>
        {socialLinks.map((link, i) => {
          return (
            <SocialLinkContainer key={i}>
              <SocialLink href={link.url} {...{ colors }}>
                {link.icon}
              </SocialLink>
              <SocialLinkLabel
                sx={{
                  fontFamily: 'body',
                  fontWeight: 'body',
                  color: 'muted',
                }}
              >
                {link.label}
              </SocialLinkLabel>
            </SocialLinkContainer>
          );
        })}
      </SectionContent>
    </Section>
  );
};

const Section = styled.section`
  padding: 5rem 1.6rem;
  text-align: center;
  @media (min-width: 992px) {
    padding: 5rem 8.6rem;
  }
  @media (min-width: 1200px) {
    padding: 7rem 0;
  }
`;

const Title = styled.h2`
  font-size: 3rem;
  text-transform: uppercase;
  margin-bottom: 4rem;
  font-weight: 500;
  @media (min-width: 992px) {
    font-size: 4rem;
  }
  @media (min-width: 1200px) {
    margin: 0 0 8rem;
    font-size: 4.8rem;
  }
  @media (min-width: 1600px) {
  }
`;

const SectionContent = styled.div`
  max-width: 60rem;
  margin: 0 auto;
  @media (min-width: 992px) {
    max-width: 90rem;
  }
  @media (min-width: 1200px) {
    max-width: 100rem;
  }
  @media (min-width: 1600px) {
    max-width: 123rem;
  }
  @media (min-width: 1800px) {
    max-width: 158rem;
  }
`;

const SocialLinkContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  width: 80px;
  height: 80px;
  line-height: 80px;
  border-radius: 50%;

  margin-right: 2rem;
  color: ${props => props.colors.heading};
  background: ${props => props.colors.primary};
  transition: 0.3s linear;
  &:hover {
    background: ${props => props.colors.secondary};
  }
  @media (min-width: 992px) {
    margin-right: 5rem;
    font-size: 8rem;
    width: 140px;
    height: 140px;
    line-height: 140px;
  }
`;

const SocialLinkLabel = styled.span`
  font-size: 3rem;
  font-weight: 300;
  @media (min-width: 992px) {
    font-size: 4.8rem;
  }
`;
