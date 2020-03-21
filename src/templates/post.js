import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import Image from "gatsby-image"
import useContentfulImage from "../hooks/useContentfulImage"
import { BLOCKS } from "@contentful/rich-text-types"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      author
      body {
        json
      }
    }
  }
`

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: node => {
      const fluid = useContentfulImage(
        node.data.target.fields.file["en-US"].url
      )
      return (
        <Image title={node.data.target.fields.title["en-US"]} fluid={fluid} />
      )
    },
  },
}

// const options = {
//   renderNode: {
//     "embedded-asset-block": node => {
//       const fluid = useContentfulImage(
//         node.data.target.fields.file["en-US"].url
//       )
//       return (
//         <Image title={node.data.target.fields.title["en-US"]} fluid={fluid} />
//       )
//       // const alt = node.data.target.fields.title["en-US"]
//       // const url = node.data.target.fields.file["en-US"].url
//       // return <Image src={url} fluid={url} alt={alt} />
//     },
//   },
// }
const PostTemplate = ({ data: { contentfulBlogPost: post } }) => {
  return (
    <Layout>
      <h1>{post.title}</h1>
      <p
        css={css`
          font-size: 0.75rem;
        `}
      >
        Posted by {post.author}
      </p>
      {documentToReactComponents(post.body.json, options)}
      {/* {post.body.body} */}
    </Layout>
  )
}
export default PostTemplate
