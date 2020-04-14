require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Kongres srpsko-američkog prijateljstva`,
    description: `KSAP je organizacija uticajnih pojedinica iz svih sfera društvenog i političkog života koji žele da Srbiju predstave SAD na jedan potpuno novi način, ali i da upoznaju Srbiju i njene građane sa istinskim vrednostima SAD`,
    keywords: `Srbija, Sjedinjene Americke drzave, Kongres srpsko-američkog prijateljstva, Vudro Vilson, akademija, regionalna bezbednost`,
    author: `@AleksandarM986`,
    VudroVilson: `Centar za američke studije Vudro Vilson`,
    regionSafety: `Centar za regionalnu bezbednost i transatlantske integracije Ronald Regan`,
    siteUrl: `https://ksap.org.rs`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: `https://ksap.org.rs`,
        sitemap: `https://ksap.org.rs/sitemap.xml`,
        policy: [{ userAgent: '*', allow: '/' }],
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
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
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
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: 'Gotu',
              variants: ['400'],
              subsets: ['latin'],
              fontDisplay: 'swap',
            },
          ],
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
