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
              <SocialLink
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                {...{ colors }}
              >
                <IconContainer {...{ colors }}>{link.icon}</IconContainer>
                {/* <SocialLinkLabel
                  sx={{
                    fontFamily: 'body',
                    fontWeight: 'body',
                    color: 'muted',
                  }}
                >
                  {link.label}
                </SocialLinkLabel> */}
              </SocialLink>
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
  display: flex;
  align-items: center;
  justify-content: center;
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
  &:hover {
    div {
      background: ${props => props.colors.secondary};
    }
    span {
      color: ${props => props.colors.secondary};
    }
  }
`;

// const SocialLinkLabel = styled.span`
//   font-size: 3rem;
//   font-weight: 300;
//   transition: 0.3s linear;
//   @media (min-width: 992px) {
//     font-size: 4.8rem;
//   }
// `;
const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  line-height: 80px;
  border-radius: 50%;
  margin-right: 1rem;
  background: ${props => props.colors.primary};
  transition: 0.3s linear;
  svg {
    font-size: 4rem;
    color: ${props => props.colors.heading};
  }
  @media (min-width: 576px) {
    margin-right: 2rem;
  }
  @media (min-width: 992px) {
    margin-right: 5rem;
  }
`;
