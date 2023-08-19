import React from 'react'
import styles from './HeaderButton.module.css'
const HeaderButton = (props) => {
  return (
    <div className={styles.headerbutton}>{props.value}</div>
  )
}

export {HeaderButton}