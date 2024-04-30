import React from 'react'
import styles from "./Hero.module.css"
import{ReactComponent as HeroImage} from "../../Assets/HeroImage.svg"
const Hero = () => {
  return (
    <div className={styles.heroContainer}>
        <div className={styles.heroText}>
            <h2 style={{margin:"0px",fontSize:"31px"}}>Skip the travel! Find Online</h2>
            <div className={styles.heroHeading}>
                <h1 style={{margin:"0px"}}>Medical</h1><h1 className={styles.heroBlueHeading} style={{margin:"0px"}}>Center</h1>
            </div>
        <span className={styles.heroParagraph}>Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.</span>
        <button className={styles.heroButton}>Find Centers</button>
        </div>
        <div className={styles.heroImage}>
        <HeroImage/>
        </div>
      
    </div>
  )
}

export default Hero
