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
        <ParallaxLayer offset={1}  speed={0.1} sticky={{ start: 0.90, end: 1.5 }} >
          <About />
        </ParallaxLayer>
        <ParallaxLayer offset={1.5} speed={0.3} >
          <Images img={1} />
        </ParallaxLayer>
        <ParallaxLayer offset={1.7} speed={0.5} >
          <Images img={2} />
        </ParallaxLayer>
        <ParallaxLayer offset={1.8} speed={0.7} >
          <Images img={3} />
        </ParallaxLayer>
        <ParallaxLayer offset={1.95} speed={1} >
          <Images img={4} />
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={5} sticky={{ start: 3, end: 5 }}>
          <Team />
        </ParallaxLayer>
        <ParallaxLayer offset={4}  speed={10} sticky={{ start: 3.5, end: 5 }} >
          <Cards />
        </ParallaxLayer>
        <ParallaxLayer offset={5} speed={5} sticky={{ start: 4.9, end: 5 }}>
          <Services />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export { Home }; // Export the Home component as a named export
