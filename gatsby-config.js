module.exports = {
  siteMetadata: {
    title: `Brand Strategy and Visual Identity || Koda Studio `,
    siteUrl: `https://kodastudio.co`,
    defaultDescription: `Koda is a brand strategy and visual identity design studio focused on humbly helping build better brands.`,
    defaultImage: `/images/kodastudio.jpg`,
    author: `@jaobrown`,
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1776,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
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
    // `gatsby-plugin-offline`,
  ],
}
