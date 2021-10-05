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
import { useModeState } from "../../context/modes";
import Night from "./../../../static/images/night.png";
import Day from "./../../../static/images/sun.png";
import Switch from "react-switch";
import Header from "../header";
import styles from "./modes.scss";
import "./layout.scss";

const Layout = ({ children }) => {
  const {
    state: { isLight },
    dispatch,
  } = useModeState();
  const toggleLightDark = () => {
    dispatch({ type: "TOGGLE_MODE" });
  };
  console.log("styles", styles);
  return (
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
        <div className="modes">
          <Switch
            onChange={toggleLightDark}
            checked={isLight}
            offColor="#000"
            onColor="#000"
            checkedIcon={<img src={Night} />}
            uncheckedIcon={<img src={Day} />}
            height={36}
            width={80}
          />
        </div>
        <main>{children}</main>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
