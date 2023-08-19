import React from 'react'
import styles from './about.module.css'
import { useState } from "react";
import {Parallax, ParallaxLayer} from '@react-spring/parallax';


const About = () => {
    // State to track mouse coordinates
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // Function to update the mouse position when it changes
    const handleMouseMove = (event) => {

      setMousePosition({ x: event.clientX, y: event.clientY });
    };
  
    // Calculate the transform values based on mouse movements
    const getTransformValue = (index, multiplier) => {
        const deltaX = mousePosition.x * multiplier;
        const deltaY = mousePosition.y * multiplier;
        const rotation = `rotate(${((deltaX/2)+deltaY)/3}deg)`;
        return `${rotation} ${`translate(${deltaX}px, ${deltaY}px)`}`;
    };


  return (
    <div className={styles.about} onMouseMove={handleMouseMove}>
      <Parallax pages={2}>
        <ParallaxLayer className={styles.paralayer} speed={2} sticky={{start:0,end:0.3}}>
          <div className={styles.firsthalf}>
            <div className={styles.titlecontainer}>
                <h1>Who are we ?</h1>
            </div>
            <div className={styles.paragraphcontainer}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
            
          </div>
        </ParallaxLayer>
        <ParallaxLayer className={styles.paralayer} offset={1} speed={0.5}>
        <div  className={styles.secondhalf}>
          <div className={styles.titlecontainer}>
              <h1>The team</h1>
          </div>
          <div className={styles.paragraphcontainer}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </div>

        </div>
        </ParallaxLayer>
        <ParallaxLayer  className={styles.paralayer} speed={0.2} >
          <div className={styles.lowerparticlescontainer}>
                <div className={styles.lowerparticle1} style={{ transform: getTransformValue(0, 0.01)}}></div>
                  <div className={styles.lowerparticle2}  style={{ transform: getTransformValue(0, 0.01) }}></div>
                  <div className={styles.lowerparticle3}  style={{ transform: getTransformValue(0, 0.01) }}></div>
                  <div className={styles.lowerparticle4}  style={{ transform: getTransformValue(0, 0.005) }}></div>
          </div>
          </ParallaxLayer>
        </Parallax>
    </div>

  )
}

export {About}