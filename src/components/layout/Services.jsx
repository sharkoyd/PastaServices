import React from 'react'
import styles from './services.module.css'
import { useState } from "react";

const Services = () => {
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

        return `${`translate(${deltaX}px, ${-deltaY}px)`}`;
    };


  return (
    <div className={styles.services} onMouseMove={handleMouseMove}>
        <div className={styles.titlecontainer}>
            <h1>Our services</h1>
        </div>
        <div className={styles.categoriescontainer}>

            <div className={styles.category}>
                <h1>Design</h1>
                <div className={styles.categorytext}>
                    <p>Our team of designers will help you create a unique and memorable brand identity.</p>
                </div>
                <div className={styles.categorypricing}>
                  <span className={styles.service}><p>service 1: 10$</p></span>
                  <span className={styles.service}><p>service 2: 30$</p></span>
                  <span className={styles.service}><p>service 3: 50$</p></span>
                  <span className={styles.service}><p>service 4: 70$</p></span>
                  <span className={styles.service}><p>service 5: 90$</p></span>
                </div>
            </div>

            <div className={styles.categorysep}></div>

            <div className={styles.category} >
                <h1>Marketing</h1>
                <div className={styles.categorytext}>
                    <p>Our team of marketers will help you create a unique and memorable brand identity.</p>
                </div>
                <div className={styles.categorypricing}>
                  <span className={styles.service} ><p>service 1: 10$</p></span>
                  <span className={styles.service}><p>service 2: 30$</p></span>
                  <span className={styles.service}><p>service 3: 50$</p></span>
                  <span className={styles.service}><p>service 4: 70$</p></span>
                  <span className={styles.service}><p>service 5: 90$</p></span>
                </div>
            </div>

            <div className={styles.categorysep}></div>

            <div className={styles.category} >
                <h1>Development</h1>
                <div className={styles.categorytext}>
                    <p>Our team of developers will help you create a unique and memorable brand identity.</p>
                </div>
                <div className={styles.categorypricing}>
                  <span className={styles.service}><p>service 1: 10$</p></span>
                  <span className={styles.service}><p>service 2: 30$</p></span>
                  <span className={styles.service}><p>service 3: 50$</p></span>
                  <span className={styles.service}><p>service 4: 70$</p></span>
                  <span className={styles.service}><p>service 5: 90$</p></span>
                </div>
            </div>
            

        </div>
        


        <div className={styles.lowerparticlescontainer}>
                <div className={styles.lowerparticle1} style={{ transform: getTransformValue(0, 0.02)}}></div>
                <div className={styles.lowerparticle2}  style={{ transform: getTransformValue(0, 0.02) }}></div>
                <div className={styles.lowerparticle3}  style={{ transform: getTransformValue(0, -0.01) }}></div>
                <div className={styles.lowerparticle4}  style={{ transform: getTransformValue(0, 0.005) }}></div>
        </div>
    </div>
  )
}

export {Services}