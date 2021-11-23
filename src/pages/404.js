import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import * as styles from "./../scss/home.module.scss";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className={styles.error__main}>
      <div className={styles.error__header}>
        <h1>404</h1>
        <p>The page cannot be found.</p>
      </div>
    </div>
  </Layout>
);

export default NotFoundPage;
