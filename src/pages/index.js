import React from "react";
import { Link } from "gatsby";
import Div100vh from "react-div-100vh";
import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

import "./../scss/home.scss";

const IndexPage = () => (
  <Layout>
    <SEO title="Kameron Zach" />
    <Div100vh className="home">
      <div className="home__main">
        <h1>
          Kameron Zach
          <br />
        </h1>
      </div>
    </Div100vh>
  </Layout>
);

export default IndexPage;
