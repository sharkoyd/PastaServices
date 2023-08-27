import React from 'react'
import styles from './images.module.css'
import {HeaderButton} from '../common/HeaderButton'
import { useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
const Images = (props) => {


  return (
    <div className={styles.images} >
        {props.img == 1 ?<div className={styles.img1}></div> :null}
        {props.img == 2 ?<div className={styles.img2}></div> :null}
        {props.img == 3 ?<div className={styles.img3}></div> :null}
        {props.img == 4 ?<div className={styles.img4}></div> :null}
    </div>
  )
}

export {Images}