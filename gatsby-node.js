const path = require("path")

// create pages for mdx files
exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            fileAbsolutePath
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  const pages = result.data.allMdx.edges

  // you'll call `createPage` for each result
  pages.forEach(({ node }, index) => {
    node.fileAbsolutePath.includes("blog")
      ? createPage({
          path: `/blog/${node.frontmatter.path}`,
          component: path.resolve(`./src/templates/blog-template.jsx`),
          context: { id: node.id },
        })
      : node.fileAbsolutePath.includes("work")
      ? createPage({
          path: `/work/${node.frontmatter.path}`,
          component: path.resolve(`./src/templates/work-template.jsx`),
          context: { id: node.id },
        })
      : null
  })
}
