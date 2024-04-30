import React from 'react'
import styles from "./Specialization.module.css"
import dentistry from "../../Assets/SpecializationImages/Dentistry.png"
import primaryCare from "../../Assets/SpecializationImages/PrimaryCare.png"
import BloodTest from "../../Assets/SpecializationImages/BloodTest.png"
import Cardiology from "../../Assets/SpecializationImages/Cardiology.png"
import Laboratory from "../../Assets/SpecializationImages/Laboratory.png"
import Mri from "../../Assets/SpecializationImages/Mri.png"
import Piscologist from "../../Assets/SpecializationImages/Piscologist.png"
import Xray from "../../Assets/SpecializationImages/Xray.png"

const Specialization = () => {
  return (
    <div className={styles.specializationContainer}>
        <h1 className={styles.specializationHeading}>Find By Specialization</h1>
        <div className={styles.specializationCategory}>
            <div>
                <img src={dentistry} alt="dentistry" style={{width:"270px"}} />
            </div>
            <div>
                <img src={primaryCare} alt="primaryCare" style={{width:"270px"}}/>
            </div>
            <div>
            <img src={BloodTest} alt="BloodTest" style={{width:"270px"}}/>
            </div>
            <div>
            <img src={Cardiology} alt="Cardiology" style={{width:"270px"}}/>
            </div>
            <div>
            <img src={Laboratory} alt="Laboratory" style={{width:"270px"}}/>
            </div>
            <div>
            <img src={Mri} alt="Mri" style={{width:"270px"}} />
            </div>
            <div>
            <img src={Piscologist} alt="Piscologist" style={{width:"270px"}}/>
            </div>
            <div>
            <img src={Xray} alt="Xray" style={{width:"270px"}}/>
            </div>
        </div>
        <div>
            <button className={styles.specializationButton}>View All</button>
        </div>
      
    </div>
  )
}

export default Specialization
