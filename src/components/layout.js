/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import Helmet from "react-helmet";
import Header from "./header";
import "./layout.scss";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <>
        <div>
          <Helmet>
            <script src="/js/pace.js" />
            <link href="/css/pace-theme.css" rel="stylesheet" />
            <link href="/css/fonts.css" rel="stylesheet" />
            <meta
              name="google-site-verification"
              content="Lvc1rJvVjPHWzRQujGhbYWuFePC2kaDl113ui68cVjM"
            />
            <meta property="og:title" content="Kameron Zach Portfolio" />
            <meta
              property="og:description"
              content="Kameron Zach Digital Portfolio"
            />
            <meta
              property="og:image"
              content="https://www.kameronzach.com/images/social.jpg"
            />
            <meta property="og:url" content="https://www.kameronzach.com" />
          </Helmet>
          <main>{children}</main>
        </div>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
