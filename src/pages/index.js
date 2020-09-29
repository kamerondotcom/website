import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

import styles from "./../scss/home.module.scss";

const IndexPage = () => (
  <Layout>
    <SEO title="Portfolio" />
    <div className={styles.home__main}>
      <div className={styles.home__header}>
        <h1>
          Kameron Zach
          {/* <br /> */}
        </h1>
        <h2>Technical Director, Experience Designer</h2>
      </div>
      <div className={styles.home__works}>
        <ul>
          <li className={styles.project}>
            <h2>Director, Digital Experience and Development</h2>
            <h3>Digital Pride Fest & Digital Drag Fest, PEG</h3>
            <div className={styles.projectDate}>
              Los Angeles, CA - Summer 2020
            </div>
            <p>
              Worked with a small creative team to design and brand Digital
              PrideFest a digital live streaming event featuring 70+ live events
              with LGTBQ artists and drag performers from around the world.
              Built custom ticketing admin/reporting, live stream tools for
              artist capture and broadcast using SaaS tools like Dolby.io and
              Mux among others.
            </p>
            <p>
              Technologies included Next.js, React, Redis, Mongo and Express.
            </p>
            <div className={styles.projectThumbs}>
              <video className={styles.projectThumbs__item} autoPlay muted loop>
                <source src="/video/pride-fest-1.mp4" />
              </video>

              <video className={styles.projectThumbs__item} autoPlay muted loop>
                <source src="/video/pride-fest-2.mp4" />
              </video>

              <video className={styles.projectThumbs__item} autoPlay muted loop>
                <source src="/video/pride-fest-3.mp4" />
              </video>
            </div>
          </li>
          <li className={styles.project}>
            <h2>Partner / CTO</h2>
            <h3>Let's Build / Let's Stream</h3>
            <div className={styles.projectDate}>
              Los Angeles, CA - 2012 - 2020
            </div>
            <p>
              Managed a small team to design and build digital experiences and
              business solutions for clients like Equinox, HBO, Dermalogica,
              Virgin Hyperloop One, Jeremy Scott, Carolina Herrera and other
              entertainment clients. Led team in developing technical solution,
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
            <div className={styles.projectThumbs}>
              <a target="_blank" href="https://www.inc-cap.com">
                <img
                  className={styles.projectThumbs__item}
                  src="/images/inc-cap.png"
                />
              </a>
              <video
                title="Route Calculator Hyperloop One"
                alt="Route Calculator Hyperloop One"
                className={styles.projectThumbs__itemVideo}
                autoPlay
                muted
                loop
              >
                <source src="/video/routes.mp4" />
              </video>
              <video
                title="Simulator Hyperloop One"
                alt="Simulator Hyperloop One"
                className={styles.projectThumbs__itemVideo}
                autoPlay
                muted
                loop
              >
                <source src="/video/simulator.mp4" />
              </video>
              <a target="_blank" href="https://www.myfriendsplace.org">
                <img
                  className={styles.projectThumbs__item}
                  src="/images/myfriendsplace.png"
                />
              </a>
              <a target="_blank" href="https://www.trixiecosmetics.com">
                <img
                  className={styles.projectThumbs__item}
                  src="/images/trixie-cosmetics.png"
                />
              </a>
              <a target="_blank" href="https://www.katharinekidd.com">
                <img
                  className={styles.projectThumbs__item}
                  src="/images/katharine-kidd.png"
                />
              </a>
              <a target="_blank" href="https://www.trixieandkatya.com">
                <img
                  className={styles.projectThumbs__item}
                  src="/images/trixie-katya.png"
                />
              </a>
            </div>
          </li>
          <li className={styles.project}>
            <h2>Senior Engineer</h2>
            <h3>Equinox</h3>
            <div className={styles.projectDate}>
              Los Angeles, CA / New York, NY — 2019 - Present
            </div>
            <p>
              Led small team of engineers to relaunch their flagship brand
              website (equinox.com) on a completely new technology (Next.js,
              React) stack and CMS (Contentful). Worked with team to break up
              intricate design systems (from Work & Co), animations with the
              goal to balance aesthetic presentation, usability, conversion and
              performance.
            </p>
            <div className={styles.projectThumbs}>
              <a target="_blank" href="https://www.equinox.com">
                <video
                  className={styles.projectThumbs__item}
                  autoPlay
                  muted
                  loop
                >
                  <source src="/video/equinox-3.mp4" />
                </video>
              </a>
              <a target="_blank" ti href="https://www.equinox.com">
                <video
                  className={styles.projectThumbs__item}
                  autoPlay
                  muted
                  loop
                >
                  <source src="/video/equinox-1a.mp4" />
                </video>
              </a>
              <a target="_blank" href="https://www.equinox.com">
                <video
                  className={styles.projectThumbs__item}
                  autoPlay
                  muted
                  loop
                >
                  <source src="/video/equinox-2.mp4" />
                </video>
              </a>
            </div>
          </li>
          <li className={styles.project}>
            <h2>Javascript Course Instructor</h2>
            <h3>General Assembly</h3>
            <div className={styles.projectDate}>
              Santa Monica, CA - 2014 - 2016
            </div>
            <p>
              Taught Javascript (ES6) and computer science basics to a group of
              14-18 students during a 12- week evening program.
            </p>
          </li>
          <li className={styles.project}>
            <h2>Associate Producer</h2>
            <h3>MTV Networks</h3>
            <div className={styles.projectDate}>
              New York, NY - September 2009 - April 2012
            </div>
            <p>
              Multimedia / backpack producer for MTV brands like MTV News, Logo
              and VH1. Shot, edited and produced on air, online and integrated
              marketing video projects.
            </p>
          </li>
          <li className={styles.project}>
            <h2>Summer Associate</h2>
            <h3>MTV Networks</h3>
            <div className={styles.projectDate}>New York, NY - Summer 2009</div>
            <p>
              Participated in highly competitive 12-week post college work
              training program with MTV Networks where I worked hands-on
              designing features and UX for MTV’s then social web product: Flux.
            </p>
          </li>
          <li>
            <h2>Bachelor of Arts - Video/Film Production</h2>
            <h3>Webster University, Saint Louis Missouri</h3>
          </li>
        </ul>
      </div>
      <div className={styles.contact}>
        <h3>
          Get in touch,{" "}
          <a href="mailto:kamerondotcom@mac.com">kamerondotcom@mac.com</a>
        </h3>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
