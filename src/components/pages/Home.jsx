// Home.jsx
import React, { useRef, useState } from 'react';
import { Navbar } from '../layout/Navbar.jsx';
import { Header } from '../layout/Header.jsx';
import { About } from '../layout/About.jsx';
import { Services } from '../layout/Services.jsx';
import {Parallax, ParallaxLayer} from '@react-spring/parallax';
import styles from './home.module.css';
const Home = () => {
  const ref = useRef();
  const [pos, setPos] = useState(0);
  const [direction,setDirection] = useState('down');

  function scrollDownHandler(){
    console.log(pos);
    if(pos == 2){
      return null
    }
    ref.current.scrollTo(pos+1);
    setPos(pos+1);


  }
  function scrollUpHandler() {
    console.log(pos);
    if(pos == 0){
      return null
    }
    ref.current.scrollTo(pos-1);
    setPos(pos-1);

  }
  
  // Your Home component logic here
  return (
    <div className={styles.home}>
      <div className={styles.previous} style={{visibility: pos > 0 ? 'visible' : 'hidden',}} onClick={scrollUpHandler}></div>
      <Parallax pages={3} ref={ref} className={styles.homepara}>
        <ParallaxLayer>
          <Navbar />
        </ParallaxLayer>
        
          <Header/>

        <ParallaxLayer offset={1} sticky={{start:1,end:1}}>
          <About />
        </ParallaxLayer> 
        <ParallaxLayer offset={2}> 
          <Services />
        </ParallaxLayer>
      </Parallax>
      <div className={styles.next}  style={{visibility: pos < 2 ? 'visible' : 'hidden',}} onClick={scrollDownHandler}></div>
    </div>
  );
};

export { Home }; // Export the Home component as a named export
