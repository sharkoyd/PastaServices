import React from 'react'
import styles from './images.module.css'
import {HeaderButton} from '../common/HeaderButton'
import { useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
const Images = (props) => {


  return (
    <div className={styles.images} >
        {props.img == 1 ?<div className={styles.img1}>Online Presence Excellence</div> :null}
        {props.img == 2 ?<div className={styles.img2}>Strategic Marketing</div> :null}
        {props.img == 3 ?<div className={styles.img3}>Media Crafting</div> :null}
        {props.img == 4 ?<div className={styles.img4}>Small Business Empowerment</div> :null}
    </div>
  )
}

export {Images}