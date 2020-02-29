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
              slug
              categories
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

  //* you'll call `createPage` for each result
  pages.forEach(({ node }, index) => {
    // grab primary category, defined by first in list of categories
    const category = node.frontmatter.categories.split(", ")[0]
    // change any spaces within the category to `-` instead, add slug and make path
    const categoryAndSlug = `${category.split(" ").join("-")}/${
      node.frontmatter.slug
    }`
    node.fileAbsolutePath.includes("blog")
      ? createPage({
          path: `/blog/${categoryAndSlug}`,
          component: path.resolve(`./src/templates/blog-template.jsx`),
          context: { id: node.id },
        })
      : node.fileAbsolutePath.includes("work")
      ? createPage({
          path: `/work/${categoryAndSlug}`,
          component: path.resolve(`./src/templates/work-template.jsx`),
          context: { id: node.id },
        })
      : null
  })
}
