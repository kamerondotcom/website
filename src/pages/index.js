import React, { createRef, useState } from "react";
import { isMobile } from "react-device-detect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

import * as styles from "./../scss/home.module.scss";

const IndexPage = () => (
  <Layout>
    <SEO title="Portfolio" />
    <div className={styles.home__main}>
      <div className={styles.home__header}>
        <h1>
          Kameron Zach
          {/* <br /> */}
        </h1>
      </div>
      <div className={styles.home__works}>
        <ul>
          <li className={styles.project}>
            <h2>Partner</h2>
            <h3>Let&apos;s Build</h3>
            <div className={styles.projectDate}>
              Los Angeles, CA - 2012 - 2020
            </div>
            <p>
              I work with a small team of Engineers and Designers to build low
              latency branded live stream video tools for businesses. Our
              platform, built using Node.js and React, allows business to
              capture and broadcast secure, scalable live streams that can be
              customized based on the required use case.
            </p>
            <p>
              Clients include Adobe, Viacom Velocity, Colgate, Ralph Lauren,
              HBO, Virgin Hyperloop One, Jeremy Scott, and other entertainment
              clients. Lead a small team in developing technical solution, pitch
              and producing projects through to launch and beyond.
            </p>
            <p>
              Technologies used: Javascript, Go, React + Redux, Gatsby, Next.js,
              Lamba / Serverless, Redis and AWS.
            </p>
            <p>
              Technologies included: React JS, Next.js, THREE.js, Redis and
              Pixi.
            </p>
          </li>
          <li className={styles.project}>
            <h2>Senior Engineer</h2>
            <h3>Equinox</h3>
            <div className={styles.projectDate}>
              New York, NY — 2019 - August 2020
            </div>
            <p>
              Transitioned from an agency / client relationship to an internal
              consultant to help Equinox relaunch their flagship brand website
              (equinox.com) on a completely new technology (React, Next) stack
              and CMS (Contentful). Worked with team to break up intricate
              design systems (from Work & Co) and animations with the goal to
              balance aesthetic presentation, usability and performance.
              Established and implemented development style / structure
              standards that made modules and interface elements more flexible
              and re-usable.
            </p>
            <p>
              Recently led team to pivot sales previously sales / lead
              generation motivated Equinox.com to an editorial destination for
              members during COVID-19 gym closures.
            </p>
            <div className={styles.projectThumbs}>
              <a target="_blank" href="https://www.equinox.com">
                <VideoPlayer
                  alt="Equinox"
                  src="/video/equinox-3.sameformat.mp4"
                />
              </a>
              <a target="_blank" ti href="https://www.equinox.com">
                <VideoPlayer
                  alt="Equinox"
                  src="/video/equinox-1a.sameformat.mp4"
                />
              </a>
              <a target="_blank" href="https://www.equinox.com">
                <VideoPlayer
                  alt="Equinox"
                  src="/video/equinox-2.sameformat.mp4"
                />
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
              14-18 students during a 12-week evening program.
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
            <h2>Bachelor of Arts - Video / Film Production</h2>
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

const VideoPlayer = ({ alt, src }) => {
  const player = createRef();
  const [playing, setPlaying] = useState(isMobile === false);
  const playingSingleton = playing ? { autoPlay: true } : {};
  return (
    <span className={styles.videoWrap}>
      <video
        ref={player}
        alt={alt}
        className={styles.projectThumbs__itemVideo}
        {...playingSingleton}
        muted
        loop
      >
        <source type="video/mp4" src={src} />
      </video>
    </span>
  );
};

export default IndexPage;
