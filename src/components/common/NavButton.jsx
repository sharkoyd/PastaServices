import React from 'react'
import styles from './NavButton.module.css'
const NavButton = (props) => {
  
  return (
    <div className={styles.NavButton} onClick={()=>props.scroll(props.topage)}>{props.value}</div>
  )
}

export {NavButton}