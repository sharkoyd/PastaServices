// Home.jsx
import React, { useRef, useState } from "react";
import { Navbar } from "../layout/Navbar.jsx";
import { Header } from "../layout/Header.jsx";
import { About } from "../layout/About.jsx";
import { Team } from "../layout/Team.jsx";
import { Services } from "../layout/Services.jsx";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Cards } from "../layout/Deck.tsx";
import { Images } from "../layout/Images.jsx";
import styles from "./home.module.css";
const Home = () => {
  const ref = useRef();
  function scrollDown(page) {
    console.log(page);
    ref.current.scrollTo(page);

  }

  // Your Home component logic here
  return (
    <div className={styles.home}>
      <Parallax pages={6}  className={styles.homepara} ref={ref}>

          <Navbar scroll={scrollDown} />


        <ParallaxLayer offset={0}  speed={10}>
          <Header />
        </ParallaxLayer>
        <ParallaxLayer offset={1}  speed={4} sticky={{ start: 0.75, end: 2 }} >
          <About />
        </ParallaxLayer>
        <ParallaxLayer offset={2}  speed={10} sticky={{ start: 1.8, end: 2 }} >
          <Cards />
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={2} sticky={{ start: 2.8, end: 4 }}>
          <Team />
        </ParallaxLayer>
        <ParallaxLayer offset={4} speed={0.3}  >
          <Images img={1} />
        </ParallaxLayer>
        <ParallaxLayer offset={4.3} speed={0.5} >
          <Images img={2} />
        </ParallaxLayer>
        <ParallaxLayer offset={4.6} speed={0.7} >
          <Images img={2} />
        </ParallaxLayer>
        <ParallaxLayer offset={4.9} speed={1} >
          <Images img={2} />
        </ParallaxLayer>
        <ParallaxLayer offset={5} speed={5}>
          <Services />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export { Home }; // Export the Home component as a named export
