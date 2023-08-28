import React from "react";
import styles from "./services.module.css";
import { useState } from "react";

import { HeaderButton } from "../common/HeaderButton";
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
        <h1>Limited Time Packages</h1>
      </div>
      <div className={styles.categoriescontainer}>
        <div className={styles.category}>
          <h4>PACKAGE 1</h4>

          <div className={styles.categorypricing}>
            <div className={styles.package}>
            <div className={styles.servicescontainer}>
              <span className={styles.service}>🌐 1 Website/System</span>
              <span className={styles.service}>📇 1 Business Card</span>
              <span className={styles.service}>📷 3 Product Posts</span>
              </div>
              <span className={styles.price}>Starting from 1000TND</span>
            </div>
          </div>
        </div>

        <div className={styles.categorysep}></div>

        <div className={styles.category}>
          <h4>PACKAGE 2</h4>

          <div className={styles.categorypricing}>
          <div className={styles.servicescontainer}>
            <span className={styles.service}>🌐 1 Website (Interface)</span>
            <span className={styles.service}>📇 1 Business Card</span>
            <span className={styles.service}>📷 3 Product Posts</span>
            </div>
            <span className={styles.price}>Starting from 500TND</span>
          </div>
        </div>

        <div className={styles.categorysep}></div>

        <div className={styles.category}>
          <h4>PACKAGE 3</h4>

          <div className={styles.categorypricing}>
            <div className={styles.servicescontainer}>
            <span className={styles.service}>📇 1 Business Card</span>
            <span className={styles.service}>📷 5 Product Posts</span>
            </div>
            <span className={styles.price}>Starting from 150TND</span>
            
          </div>
        </div>
        <div className={styles.categorysep}></div>

<div className={styles.category}>
  <h4>PACKAGE 4</h4>

  <div className={styles.categorypricing}>
    <div className={styles.servicescontainer}>
    <span className={styles.service}>📷 5 Product Posts</span>
    </div>
    <span className={styles.price}>Starting from 100TND</span>
    
  </div>
</div>
      </div>

      <div className={styles.lowerparticlescontainer}>
        <div
          className={styles.lowerparticle1}
          style={{ transform: getTransformValue(0, 0.02) }}
        ></div>
        <div
          className={styles.lowerparticle2}
          style={{ transform: getTransformValue(0, 0.02) }}
        ></div>
        <div
          className={styles.lowerparticle3}
          style={{ transform: getTransformValue(0, -0.01) }}
        ></div>
        <div
          className={styles.lowerparticle4}
          style={{ transform: getTransformValue(0, 0.005) }}
        ></div>
      </div>
      <div className={styles.contact}>
        <HeaderButton value="Contact us for custom services  >" />
      </div>
    </div>
  );
};

export { Services };
