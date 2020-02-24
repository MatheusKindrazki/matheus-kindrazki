import { useState, useEffect } from "react";
import Head from "next/head";

import { Container } from "./styles";

import Section from "../components/Section";

export default function Home() {
  const [view, setView] = useState(false);

  const t1 = new TimelineMax();
  function animate() {
    const hero = document.querySelectorAll(".hero");
    const slider = document.querySelectorAll(".slider");

    t1.fromTo(
      hero,
      1,
      { height: "0%" },
      { height: "80%", ease: Power2.easeInOut }
    )
      .fromTo(
        hero,
        1.2,
        { width: "100%" },
        { width: "80%", ease: Power2.easeInOut }
      )
      .fromTo(slider, 1.2, { x: "-100%" }, { x: "0%", ease: Power2.easeInOut })
      .pause();
  }

  useEffect(() => animate(), []);

  return (
    <Container className="container" view={view}>
      <Head>
        <title>Matheus Kindrazki</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="logo-section">
        <div className="logo">
          <svg
            width="140"
            height="74"
            viewBox="0 0 140 74"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M72.284 4.472V2.972H70.784H60.32H59.3192L58.935 3.89609L37.0767 56.4644L14.8536 3.888L14.4665 2.972H13.472H3.008H1.508V4.472V71V72.5H3.008H11.744H13.244V71V25.8408L31.6647 71.5606L32.0432 72.5H33.056H40.832H41.8479L42.2249 71.5567L60.548 25.7074V71V72.5H62.048H70.784H72.284V71V4.472ZM94.994 71V43.3457L120.6 71.9995L121.047 72.5H121.718H132.47H135.849L133.582 69.9938L103.59 36.834L133.572 4.33715L135.895 1.82H132.47H121.814H121.147L120.7 2.31523L94.994 30.81V3.32V1.82H93.494H84.758H83.258V3.32V71V72.5H84.758H93.494H94.994V71Z"
              stroke="white"
              stroke-width="3"
            />
          </svg>
        </div>
        <div className="explorer">
          <button
            type="button"
            onClick={() => {
              setView(true), t1.play();
            }}
          >
            Conheça
          </button>
        </div>
      </section>
      <Section view={view} />

      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          height: 100%;
        }

        #__next {
          height: 100%;
        }
      `}</style>

      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TimelineMax.min.js"
        integrity="sha256-fIkQKQryItPqpaWZbtwG25Jp2p5ujqo/NwJrfqAB+Qk="
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js"
        integrity="sha256-lPE3wjN2a7ABWHbGz7+MKBJaykyzqCbU96BJWjio86U="
        crossorigin="anonymous"
      ></script>
    </Container>
  );
}
