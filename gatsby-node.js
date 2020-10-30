const path = require('path')

exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions;

  if (page.path.match(/sign|reset|coming/)) {
    page.context.layout = "bare";
    createPage(page);
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const pages = await graphql(`
    {
      allPrismicArticle {
        nodes {
          id
          uid
          data {
            title {
              text
            }
          }
        }
      }
    }
  `)

  const pageTemplates = {
    Article: path.resolve(__dirname, 'src/templates/article.js'),
  }

  pages.data.allPrismicArticle.nodes.forEach((node) => {
    createPage({
      path: `/${node.uid}`,
      component: pageTemplates.Article,
      match: '/:uid',
 /*     context: {
        uid: node.uid,
      },*/
    })    
  })
}