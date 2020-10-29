module.exports = {
  siteMetadata: {
    title: `Omega Gatsby`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'nutriklinika',
        accessToken: 'MC5YNWtzU0JBQUFDSUFoSnBi.77-977-977-9aShO77-977-977-9C--_vS_vv71uSu-_vTNG77-977-9eu-_ve-_ve-_vXhN77-9Vmvvv73vv70r',
        schemas: {
          articles: require('./src/schemas/article.json'),
        },
        lang: '*',
        prismicToolbar: true,
        imageImgixParams: {
          auto: 'compress,format',
          fit: 'max',
          q: 50,
        },
        imagePlaceholderImgixParams: {
          w: 100,
          blur: 15,
          q: 50,
        },
        typePathsFilenamePrefix:
          'prismic-typepaths---nutriklinika',
      },
    },
  ],
};
