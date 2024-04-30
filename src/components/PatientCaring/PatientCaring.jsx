import React from 'react'
import styles from "./PatientCaring.module.css"
import PatientCaringImage from "../../Assets/PatientCaring/PatientCaringImage.png"
import PatientCaringText from "../../Assets/PatientCaring/PatientCaringText.png"
const PatientCaring = () => {
  return (
    <div className={styles.PatientCaringContainer}>
        <div>
        <img src={PatientCaringImage} alt="PatientCaringImage" />
        </div>
        <div>
        <img src={PatientCaringText} alt="PatientCaringText" />
        </div>
      
    </div>
  )
}

export default PatientCaring
