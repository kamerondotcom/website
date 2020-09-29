import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

import styles from "./../scss/home.module.scss";

const IndexPage = () => (
  <Layout>
    <SEO title="Kameron Zach" />
    <div className={styles.home__main}>
      <div className={styles.home__header}>
        <h1>
          Kameron Zach
          <br />
        </h1>
        <h2>Technical Director, Experience Designer</h2>
      </div>
      <div className={styles.home__works}>
        <ul>
          <li>
            <h2>Director, Digital Experience</h2>
            <h3>Digital Pride Fest & Digital Drag Fest, PEG</h3>
            <p>
              Managed a small creative team to design and brand Digital Pride
              Fest. Built custom ticketing admin/reporting, live stream tools
              for artist capture and broadcast using SaaS tools like Dolby.io
              and Mux among others.
            </p>
          </li>
          <li>
            <h2>Partner / CTO</h2>
            <h3>Let's Build / Let's Stream</h3>
            <p>
              Managed a small team to design and build digital experiences and
              business solutions for clients like Equinox, HBO, Dermalogica,
              Virgin Hyperloop One, Jeremy Scott, Carolina Herrera and other
              entertainment clients. Lead team in developing technical solution,
              pitch and build Javascript apps / integrations to full websites
              and native apps.
            </p>
            <p>
              Let’s Stream is a custom video streaming platform for business,
              built using Node.js and React. The platform allows business to
              capture and broadcast secure, scalable live streams that can be
              customized based on the required use case.
            </p>
            <p>
              Agency Highlights: client retention rate of 68%, winner of 3 site
              of the days awards from AWWWARDS, nominated for a Digital Emmy.
            </p>
            <p>
              Technologies used: React JS/Native, Express, Gatsby, Next.js,
              Python, AWS.
            </p>
          </li>
          <li>
            <h2>Senior Engineer</h2>
            <h3>Equinox</h3>
            <p>
              Led small team of engineers to relaunch their flagship brand
              website (equinox.com) on a completely new technology (Next.js,
              React) stack and CMS (Contentful). Worked with team to break up
              intricate design systems (from Work & Co), animations with the
              goal to balance aesthetic presentation, usability and performance.
            </p>
          </li>
          <li>
            <h2>Javascript Course Instructor</h2>
            <h3>General Assembly</h3>
            <p>
              Taught Javascript (ES6) and computer science basics to a group of
              14-18 students during a 12- week evening program.
            </p>
          </li>
          <li>
            <h2>Associate Producer</h2>
            <h3>MTV Networks</h3>
            <p>
              Multimedia / backpack producer for MTV brands like MTV News, Logo
              and VH1. Shot, edited and produced on air, online and integrated
              marketing video projects.
            </p>
          </li>
          <li>
            <h2>Summer Associate</h2>
            <h3>MTV Networks</h3>
            <p>
              Participated in highly competitive 12-week post college work
              training program with MTV Networks where I worked hands-on
              designing features and UX for MTV’s then social web product: Flux.
            </p>
          </li>
        </ul>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
