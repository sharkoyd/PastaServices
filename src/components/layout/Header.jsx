import React from 'react'
import styles from './Header.module.css'
import {HeaderButton} from '../common/HeaderButton'
import { useState } from "react";
const Header = () => {
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
      return `translate(${deltaX}px, ${deltaY}px)`;
    };

  return (
    <div className={styles.Header} onMouseMove={handleMouseMove}>
        <div className={styles.headertxt}>
            <h1 className={styles.title}>Our Name</h1>
            <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <div className={styles.headerbuttonholder}>
                <HeaderButton value='Get in touch' />
                <HeaderButton value='View offers' />
            </div>
        </div>
        <div className={styles.headerimg}>
        <div className={styles.upperparticlescontainer}>
                <div className={styles.upperparticle1}></div>
                <div className={styles.upperparticle2}></div>
                <div className={styles.upperparticle3}></div>
            </div>
            <div className={styles.splashimg}>
              
            </div>
            
            <div className={styles.lowerparticlescontainer}>
              <div className={styles.lowerparticle1}></div>
                <div className={styles.lowerparticle2}></div>
                <div className={styles.lowerparticle3}></div>
                <div className={styles.lowerparticle4}></div>
            </div>
            <div className={styles.lowerparticlescontainer}>
              <div className={styles.lowerparticle1}></div>
                <div className={styles.lowerparticle2}></div>
                <div className={styles.lowerparticle3}></div>
                <div className={styles.lowerparticle4}></div>
            </div>
            
        </div>
        <div className={styles.trianglescontainer} >
      <div className={styles.triangle1} style={{ transform: getTransformValue(0, 0.005) }}></div>
      <div className={styles.triangle2} style={{ transform: getTransformValue(1, 0.005) }}></div>
      <div className={styles.triangle3} style={{ transform: getTransformValue(2, 0.005) }}></div>
      <div className={styles.triangle4} style={{ transform: getTransformValue(3, 0.005) }}></div>
      <div className={styles.triangle5} style={{ transform: getTransformValue(4, 0.01) }}></div>
      <div className={styles.triangle6} style={{ transform: getTransformValue(5, 0.005) }}></div>
      <div className={styles.triangle7} style={{ transform: getTransformValue(6, 0.005) }}></div>
    </div>
    </div>
  )
}

export {Header}