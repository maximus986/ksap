import { css, Global } from '@emotion/core';
import React from 'react';
import { Header } from './header/header';

const Layout = ({ children }) => {
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
          ::-webkit-scrollbar {
            width: 4px;
            background-color: #1e2548;
            opacity: 0.7;
          }

          ::-webkit-scrollbar-thumb {
            background-color: #1e2548;
          }
        `}
      />
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
