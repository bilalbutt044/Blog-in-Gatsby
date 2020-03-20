import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostPreview from "../components/postPreview"
import usePosts from "../hooks/use-posts"

const IndexPage = () => {
  const posts = usePosts()
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Blog</h1>
      {posts.map(post => (
        <PostPreview key={post} post={post} />
      ))}
    </Layout>
  )
}

export default IndexPage
