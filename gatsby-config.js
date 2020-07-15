const { resolve } = require(`path`)
const { platform } = require(`os`)

module.exports = {
  siteMetadata: {
    title: `Play Marin`,
    description: `Find Everything you need to know about PlayMarin here at PlayMarin.org`,
    author: `@OFFTHELANDSOFTWARE`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-theme-ui`,
    {
      resolve: "gatsby-plugin-jss",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "video",
        path: `${__dirname}/src/video/`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 75,
        path: `${__dirname}/src/gallery-images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `gallery-images`,
        path: `${__dirname}/src/gallery-images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-breakpoints`,
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
        height: `auto`,
        preload: "auto",
      },
    },
    // {
    //   resolve: `gatsby-source-stripe`,
    //   options: {
    //     objects: ["Sku", "Product"],
    //     secretKey: `sk_test_1nbmLkBnfJg4TPyPSNqpEF1x00kwXWftcw`,
    //     downloadFiles: false,
    //   },
    // },

    {
      resolve: `gatsby-transformer-video`,
      options: {
        profiles: {
          sepia: {
            extension: `mp4`,
            converter: function ({ ffmpegSession, videoStreamMetadata }) {
              const { currentFps } = videoStreamMetadata

              const outputOptions = [
                `-crf 31`,
                `-preset slow`,
                `-movflags +faststart`,
                `-profile:v high`,
                `-bf 2	`,
                `-g ${Math.floor(currentFps / 2)}`,
                `-coder 1`,
                `-pix_fmt yuv420p`,
              ].filter(Boolean)

              return ffmpegSession
                .videoCodec(`libx264`)
                .videoFilters(
                  `colorchannelmixer=.393:.769:.189:0:.349:.686:.168:0:.272:.534:.131`
                )
                .outputOptions(outputOptions)
                .noAudio()
            },
          },
        },
      },
    },
    {
      resolve: "gatsby-source-youtube-v2",
      options: {
        channelId: ["UCbZU0txF6qwXH5U6hp8LNPA"],
        apiKey: ["AIzaSyA_TvUw9s84lLAvdozO9FX88A5gnr6m0xQ"],
        maxVideos: 1,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
