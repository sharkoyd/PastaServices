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
import {Contact} from "../layout/contact.jsx";
import {Scroll} from "../common/Scroll.jsx";

const Home = () => {
  const ref = useRef();
  function scrollDown(page) {
    console.log(page);
    ref.current.scrollTo(page);

  }

  // Your Home component logic here
  return (
    <div className={styles.home}>
      

      <Parallax pages={7}  className={styles.homepara} ref={ref}>

          <Navbar scroll={scrollDown} />
          <ParallaxLayer offset={0}  speed={2} onClick={()=>ref.current.scrollTo(1)}>
            <Scroll  />
          </ParallaxLayer>


        <ParallaxLayer offset={0}  speed={3}>
          <Header />
        </ParallaxLayer>
        
        <ParallaxLayer offset={1}  speed={0.1} sticky={{ start: 1, end: 3 }} >
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

        <ParallaxLayer offset={3} speed={2} sticky={{ start: 3, end: 4 }}>
          <Team />
        </ParallaxLayer>
        
        <ParallaxLayer offset={4.3}  speed={0.1} sticky={{ start: 4, end: 7 }} >
          <Services />
        </ParallaxLayer>
        <ParallaxLayer offset={5}  speed={5} sticky={{ start: 5.2, end: 6 }}>
          <Contact />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export { Home }; // Export the Home component as a named export
