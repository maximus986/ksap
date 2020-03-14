require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Kongres srpsko-američkog prijateljstva`,
    description: `Kongres srpsko-američkog prijateljstva`,
    author: `@AleksandarM986`,
    VudroVilson: `Centar za američke studije Vudro Vilson`,
    regionSafety: `Centar za regionalnu bezbednost`,
  },
  plugins: [
    // {
    //   resolve: 'gatsby-plugin-robots-txt',
    //   options: {
    //     host: `site-url`, // add site url
    //     sitemap: `site-url/sitemap.xml`, // add site url
    //     policy: [{ userAgent: '*', allow: '/' }],
    //   },
    // },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variants: [`300`, `300i`, `400`, `400i`, `700`],
            subsets: [`latin-ext`],
          },
          {
            family: `Montserrat`,
            variants: [`500`, `700`],
            subsets: [`latin-ext`],
          },
        ],
      },
    },

    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-theme-ui`,
    // `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `fonts`,
        path: `${__dirname}/src/fonts`,
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-playground`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kongres srpsko-američkog prijateljstva`,
        short_name: `KSAP`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
