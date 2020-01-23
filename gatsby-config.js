module.exports = {
  siteMetadata: {
    title: `Brand Strategy and Visual Identity || Koda Studio `,
    description: `Koda is a brand strategy and visual identity design studio focused on humbly helping build better brands.`,
    author: `@jaobrown`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `koda-studio`,
        short_name: `koda`,
        start_url: `/`,
        background_color: `#3A3A3A`,
        theme_color: `#3A3A3A`,
        display: `minimal-ui`,
        icon: `src/assets/png/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
