import { css, Global } from '@emotion/core';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Banner } from './banner';
import { Header } from './header/header';
import Hero from './hero';

const Layout = ({ children }) => {
  const { heroImage } = useStaticQuery(graphql`
    {
      heroImage: file(relativePath: { eq: "hero.png" }) {
        name
        childImageSharp {
          fluid(maxWidth: 4160, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <>
      <Global
        styles={css`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          html {
            font-size: 10px;
          }
          body,
          html,
          #___gatsby {
            height: 100%;
          }
          a {
            text-decoration: none;
          }
        `}
        sx={{ fontFamily: 'body' }}
      />
      <Header />
      <Hero
        img={heroImage.childImageSharp.fluid}
        alt={heroImage.name}
        hero={true}
      >
        <Banner />
      </Hero>
      <main>{children}</main>
    </>
  );
};

export default Layout;
