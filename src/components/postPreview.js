import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import Image from "gatsby-image"

const Article = styled("article")`
  border-bottom: 1px solid #ddd;
  display: flex;
  margin-top: 0;
  padding-bottom: 1rem;

  :first-of-type {
    margin-top: 1rem;
  }
`
const PostImage = styled(Image)`
  * {
    margin-top: 0;
  }
`
const PostImageLink = styled(Link)`
  width: 100px;
  max-width: 100px;
`

const PostInfo = styled("div")`
  padding-left: 10px;
`

const Title = styled(Link)`
  line-height: 1.1;
  font-size: 35px;
  text-decoration: none;
  font-weight: bold;
`
const Author = styled("p")`
  font-size: 15px;
  margin-bottom: 5px;
`
const PostPreview = ({ post }) => (
  <Article>
    <PostImageLink to={post.slug}>
      <PostImage fluid={post.image} alt={post.title} />
    </PostImageLink>
    <PostInfo>
      <Title to={post.slug}>{post.title}</Title>
      <Author>{post.author}</Author>
      <p>{post.description}</p>
    </PostInfo>
  </Article>
)

export default PostPreview
