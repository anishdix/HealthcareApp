import React from 'react'
import styles from "./Faqs.module.css"
import FaqsImage from "../../Assets/Faqs/FaqsImage.png"
import FaqsText from "../../Assets/Faqs/FaqsText.png"
const Faqs = () => {
  return (
    <div className={styles.FaqsContainer}> 
    <div>
        <span style={{color:"rgba(42, 167, 255, 1)"}}>Get Your Answer</span>
        <h1 className={styles.FaqssHeading}>Frequently Asked Questions</h1>
    </div>
    <div className={styles.FaqsInnerContainer}>
        <div className={styles.FaqsImageContainer} >
        <img src={FaqsImage} alt="FaqsImage" />
        </div>
        <div className={styles.FaqsTextContainer}>
        <img src={FaqsText} alt="FaqsText" />
        </div>
    </div>
      
    </div>
  )
}
export default Faqs
