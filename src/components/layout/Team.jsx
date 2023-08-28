import React from 'react'
import styles from './team.module.css'


const Team = () => {



  return (
    <div className={styles.team}>


          <div className={styles.titlecontainer}>
              <h1>The team</h1>
          </div>
          <div className={styles.paragraphcontainer}>
              <p>We're a group of four university students who share a passion for business and technology. Each of us plays a unique role in our agency, contributing diverse skills and perspectives.

From strategic thinkers to tech enthusiasts, our combined expertise spans various disciplines. Together, we drive our agency's vision with creativity, innovation, and a shared commitment to navigating the digital landscape.

Individually, we shine; together, we thrive. Our goal is to make a meaningful impact by seamlessly merging business and technology."</p>
          </div>


    </div>

  )
}

export {Team}