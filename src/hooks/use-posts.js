import { graphql, useStaticQuery } from "gatsby"

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: createdAt, order: DESC }) {
        nodes {
          title
          slug
          description
          author
          createdAt(formatString: "MMMM Do, YYYY")
          image {
            fluid(maxWidth: 100, maxHeight: 100) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  `)

  return data.allContentfulBlogPost.nodes.map(post => ({
    title: post.title,
    author: post.author,
    description: post.description,
    createdAt: post.createdAt,
    image: post.image.fluid,
    slug: post.slug,
    // excerpt: post.body.body,
  }))
}

export default usePosts
