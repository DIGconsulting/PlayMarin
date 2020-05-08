module.exports = {
  siteMetadata: {
    title: `Play Marin`,
    description: `Find Eeerything you need to know about PlayMarin here at PlayMarin.org`,
    author: `@OFFTHELANDSOFTWARE`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //     options: {
    //       name: `images`,
    //       path: `images`
    //     },
    //   },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: "play.marin",
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      resolve: "gatsby-remark-embed-youtube",
      options: {
        width: 800,
        height: 400,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
