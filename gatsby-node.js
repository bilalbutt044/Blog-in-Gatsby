/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allContentfulBlogPost(sort: { fields: createdAt, order: DESC }) {
        nodes {
          slug
        }
      }
    }
  `)

  if (result.errors) reporter.panic("failed to create posts", result.errors)

  const posts = result.data.allContentfulBlogPost.nodes

  posts.forEach(post => {
    actions.createPage({
      path: post.slug,
      component: require.resolve("./src/templates/post.js"),
      context: {
        slug: post.slug,
      },
    })
  })
}
