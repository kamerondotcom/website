import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

import "./../scss/home.scss";

const IndexPage = () => (
  <Layout>
    <SEO title="Kameron Zach" />
    <div className="home">
      <div className="home__main">
        <h1>
          Kameron Zach
          <br />
        </h1>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
