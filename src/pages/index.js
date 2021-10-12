import React, { createRef, useState } from "react";
import { isMobile } from "react-device-detect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import { Scrollbar } from "react-scrollbars-custom";
import useWindowSize from "./../utils/window-size";
import { Link } from "gatsby";
import ReactPlayer from "react-player";
import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

import * as styles from "./../scss/home.module.scss";

const IndexPage = () => (
  <Layout>
    <SEO title="Work Portfolio" />
    <div className={styles.home__main}>
      <div className={styles.home__header}>
        <h1>Kameron Zach</h1>
        <h2>
          Product Designer & Engineer
          <br />
          based in Los Angeles, CA
        </h2>
      </div>
      <div className={styles.home__works}>
        <ul>
          <li className={styles.project}>
            <h2>Partner</h2>
            <h3>
              <a
                className="other"
                target="_blank"
                href="https://www.letsbuild.la"
              >
                Let&apos;s Build
              </a>
            </h3>
            <div className={styles.projectDate}>
              Los Angeles, CA - 2012 - Current
            </div>
            <p>
              I work with a small team creating custom apps and low-latency
              video products for brands. Our tools allow businesses to capture
              and broadcast secure, scalable live streams and low-latency
              "zoom-like" video conferences that can be customized based on the
              required use case.
            </p>
            <p>
              Clients included: Adobe, Colgate, Ralph Lauren, HBO, Virgin
              Hyperloop One, Jeremy Scott, Viacom and other entertainment
              clients. Lead a small team in developing technical solution, pitch
              and producing projects through to launch and beyond.
            </p>
            <p>
              Technologies used: Javascript, Go, React + Redux, Serverless,
              THREE.js, Redis.
            </p>
            <Scroller>
              <div className={styles.projectThumbs}>
                <VideoPlayer alt="Adobe" src="/video/adobe-n.mp4" />
                <VideoPlayer alt="My Friend's Place" src="/video/mfp-new.mp4" />
                <VideoPlayer
                  alt="Skittles x RPDR"
                  src="/video/skittles-2.mp4"
                />
                <VideoPlayer
                  alt="RPDR Fan Brunch 2020"
                  src="/video/lr-new.mp4"
                />
                <a
                  target="_blank"
                  href="https://www.ralphsclubfragranceevent.com"
                >
                  <VideoPlayer
                    alt="Ralph Lauren, Ralph's Club Live Stream"
                    src="/video/ralphs-club-1.mp4"
                  />
                </a>
                <VideoPlayer
                  alt="Virgin Hyperloop One Simulator"
                  src="/video/simulator.mp4"
                />
                <VideoPlayer alt="RPDR Fan Brunch 2020" src="/video/rpdr.mp4" />
                <VideoPlayer
                  alt="Virgin Hyperloop One Route Simulator"
                  src="/video/routes.mp4"
                />
                <a target="_blank" href="https://confirmationhbo.com/">
                  <VideoPlayer
                    alt="HBO Microsites"
                    src="/video/confirmation-hbo.mp4"
                  />
                </a>
                <a
                  target="_blank"
                  href="http://www.spendyourleapsecondhere.com/"
                >
                  <VideoPlayer
                    alt="HBO Microsites"
                    src="/video/last-week-tonight.mp4"
                  />
                </a>
                <VideoPlayer
                  alt="Equinox Microsites"
                  src="/video/equinox-lb-1.mp4"
                />
                <VideoPlayer alt="Jeremy Scott" src="/video/jeremy-scott.mp4" />
                <VideoPlayer
                  alt="Jeremy Scott Nude Runway Concept"
                  src="/video/js-nude-runway.mp4"
                />
                <VideoPlayer
                  alt="Melody Ehsani Custom Designer"
                  src="/video/melody-ehsani.mp4"
                />
              </div>
            </Scroller>
          </li>
          <li className={styles.project}>
            <h2>Senior Engineer</h2>
            <h3>
              <a
                target="_blank"
                className="other"
                href="https://www.equinox.com"
              >
                Equinox
              </a>
            </h3>
            <div className={styles.projectDate}>
              New York, NY — April 2019 - August 2020
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
              generation motivated{" "}
              <a
                target="_blank"
                className="other"
                href="https://www.equinox.com"
              >
                Equinox.com
              </a>{" "}
              to an editorial destination for members during COVID-19 gym
              closures.
            </p>
            <Scroller height={270}>
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
            </Scroller>
          </li>
          <li className={styles.project}>
            <h2>Javascript Course Instructor</h2>
            <h3>
              <a
                target="_blank"
                className="other"
                href="https://generalassemb.ly/"
              >
                General Assembly
              </a>
            </h3>
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
            <h3>
              <a
                target="_blank"
                className="other"
                href="https://www.imdb.com/title/tt1582461/"
              >
                The X Factor USA
              </a>
              {` `}(
              <a
                target="_blank"
                className="other"
                href="https://www.sonymusic.com/"
              >
                Sony Music
              </a>{" "}
              /{" "}
              <a
                target="_blank"
                className="other"
                href="https://tinyhorse.com/"
              >
                Tiny Horse
              </a>
              )
            </h3>
            <div className={styles.projectDate}>
              Los Angeles, CA - 2011 - 2012
            </div>
            <p>
              Multimedia producer for Seasons 1 & 2. Worked with producers and
              editors to create supplemental digital content for the series.
            </p>
          </li>
          <li className={styles.project}>
            <h2>Associate Producer</h2>
            <h3>
              MTV Networks /{" "}
              <a
                target="_blank"
                className="other"
                href="https://www.viacomcbs.com/"
              >
                Viacom
              </a>
            </h3>
            <div className={styles.projectDate}>
              New York, NY - September 2009 - April 2012
            </div>
            <p>
              Multimedia / backpack producer for Viacom brands like{" "}
              <a
                className="other"
                target="_blank"
                href="https://www.mtv.com/news/"
              >
                MTV News
              </a>
              ,{" "}
              <a
                className="other"
                target="_blank"
                href="http://www.logotv.com/"
              >
                LogoTV
              </a>{" "}
              and VH1 News. Shot, edited and produced on-air, online short-form
              content and integrated marketing video projects.
            </p>
          </li>
          <li className={styles.project}>
            <h2>Summer Associate</h2>
            <h3>
              MTV Networks /{" "}
              <a
                target="_blank"
                className="other"
                href="https://www.viacomcbs.com/"
              >
                Viacom
              </a>
            </h3>
            <div className={styles.projectDate}>New York, NY</div>
            {/* <p>
              Participated in highly competitive 12-week post college work
              training program with MTV Networks where I worked hands-on
              designing features and UX for MTV’s then social web product: Flux.
            </p> */}
          </li>
          <li>
            <h2>Bachelor of Arts - Video / Film Production</h2>
            <h3>
              <a target="_blank" className="other" href="https://webster.edu/">
                Webster University
              </a>
              , St. Louis Missouri
            </h3>
          </li>
        </ul>
      </div>
      <div className={styles.contact}>
        <h3>
          Get in touch:{" "}
          <a href="mailto:contact@kameron.work">contact@kameron.work</a>
        </h3>
      </div>
    </div>
  </Layout>
);

const VideoPlayer = ({ alt, src }) => {
  return (
    <span className={styles.videoWrap}>
      <ReactPlayer
        width={"100%"}
        height="auto"
        autoPlay
        muted
        loop
        playsinline
        playing={true}
        url={[{ src: src, type: "video/mp4" }]}
      />
    </span>
  );
};

export default IndexPage;

const Scroller = ({ height = "310px", children }) => {
  const size = useWindowSize();
  return (
    <>
      {size.width < 768 ? (
        <div className={styles.workMobile}>{children}</div>
      ) : (
        <Scrollbar
          className={styles.workDesktop}
          style={{
            width: "100%",
            height: height,
            top: "0%",
            left: "0",
            zIndex: 60,
            backgroundColor: "transparent",
          }}
          thumbXProps={{
            renderer: (props) => {
              const { elementRef, style, ...restProps } = props;
              return (
                <div
                  {...restProps}
                  ref={elementRef}
                  style={{
                    ...style,
                    backgroundColor: "#000",
                  }}
                />
              );
            },
          }}
        >
          {children}
        </Scrollbar>
      )}
    </>
  );
};
