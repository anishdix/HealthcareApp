import React from 'react'
import styles from "./MedicalSpecialist.module.css"
import medicalSpecialist from "../../Assets/MedicalSpecialist.png"
import pagination from "../../Assets/SwiperPagination.png"
const MedicalSpecialist = () => {
  return (
    <div className={styles.SpecialistContainer}>
        <h1 className={styles.SpecialistHeading}>Our Medical Specialist</h1>
        <div className={styles.SpecialistImageContainer}>
            <img src={medicalSpecialist} alt="dentmedicalSpecialististry"  style={{maxWidth:"98vw",overflow:"hidden"}}/>
        </div>
        <div className={styles.SpecialistPagination}>
        <img src={pagination} alt="pagination" />       
    </div>
    
    </div>
  )
  
}

export default MedicalSpecialist
