/** @jsx jsx */
import styled from '@emotion/styled';
import { jsx } from 'theme-ui';
import socialLinks from '../../static-data/social-links';

export const SocialLinks = () => {
  return (
    <SocialLinksContainer>
      {socialLinks.map((link, i) => (
        <Link
          href={link.url}
          key={i}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            transition: 'link',
            '&:hover': {
              color: 'primary',
            },
          }}
        >
          {link.icon}
        </Link>
      ))}
    </SocialLinksContainer>
  );
};

const SocialLinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Link = styled.a`
  font-size: 1.6rem;
  line-height: 2.6rem;
  width: 2.6rem;
  color: #fff;
`;
