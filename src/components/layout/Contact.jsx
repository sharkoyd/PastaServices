import React from 'react'
import styles from './contact.module.css'


const Contact = () => {



  return (
    <div className={styles.contact}>


          <div className={styles.titlecontainer}>
              <h1>Contact Us</h1>
          </div>
          <div className={styles.body}>
              <div className={styles.left}>
                <div className={styles.facebook}></div>
                <div className={styles.instagram}></div>
              </div>
    
              <div className={styles.right}>
                <div className={styles.card}></div>
              </div>
          </div>


    </div>

  )
}

export {Contact}