module.exports = {
  pathPrefix: "/careconn",
  siteMetadata: {
    title: "Care Connection",
    description:
      "We are a multi-specialty group helping to improve lives since 1959. Our therapists are knowledgeable in a wide variety of mental health issues.",
    url: "http://careconnectionphiladelphia.com/",
    image: "/logo.png",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Care Connection",
        short_name: "careconn",
        start_url: "/",
        background_color: "#10c8ae",
        theme_color: "#8B5CF6",
        display: "standalone",
        icon: "src/images/logo.png",
      },
    },
  ],
};
