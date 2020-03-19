import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "@emotion/styled"

const Heading = styled(Link)`
  margin: 0;
  font-size: 100px;
  display: block;
  text-decoration: none;
  color: white;
  line-height: 1.1;
`
const NavLink = styled(Link)`
  color: white;
  padding: 10px;
  transition: 1s;
  border-radius: 5px;
  text-decoration: none;
  margin-right: 5px;

  :hover {
    background-color: #3a165f;
    transition: 1s;
  }
`

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <Heading to="/">{siteTitle}</Heading>
      <NavLink to="/blog">Blog</NavLink>
      <NavLink to="/about">About</NavLink>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
