const path = require("path")
const { paginate } = require(`gatsby-awesome-pagination`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
              titulo
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw new Error(result.errors)
  }

  //Extract Querys
  const posts = result.data.allMarkdownRemark.edges

  //Load Templates
  const indexTemplate = path.resolve("./src/templates/index.js")
  const postTemplate = path.resolve("./src/templates/post.js")

  posts.forEach(({ node }) => {
    node.frontmatter.url = `/${node.frontmatter.slug}/`
    createPage({
      path: node.frontmatter.url,
      component: postTemplate,
      context: {
        slug: node.frontmatter.slug,
      },
    })
  })

  paginate({
    createPage,
    items: posts,
    itemsPerPage: 5,
    component: indexTemplate,
    pathPrefix: ({ pageNumber }) => {
      if (pageNumber === 0) {
        return `/`
      } else {
        return `/page`
      }
    },
  })
}
