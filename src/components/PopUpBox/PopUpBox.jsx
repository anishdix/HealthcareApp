import React from 'react'
import styles from "./PopUpBox.module.css"
import Search from "../../Assets/Search.png"
import WhiteSearch from "../../Assets/WhiteSearch.png"
import Hospital from "../../Assets/Hospital.png"
import {ReactComponent as DoctorCard } from "../../Assets/DoctorCard.svg"
import {ReactComponent as LabsCard } from "../../Assets/LabsCard.svg"
import {ReactComponent as MedicalStoreCard } from "../../Assets/MedicalStoreCard.svg"
import {ReactComponent as AmbulanceCard } from "../../Assets/AmbulanceCard.svg"
import {Link}from "react-router-dom";
const PopUpBox = () => {
    const handleSubmit=()=>{

    }
    const handleClick=()=>{
        

    }
  return (
    <div className={styles.popUpContainer}>
        <div >
            <form onSubmit={handleSubmit} className={styles.formContainer}>
                <div className={styles.formInputContainer}>
                <input type="text" className={styles.formInput}  placeholder='enter the state'/>
                <img src={Search} alt="serach" className={styles.searchIcon} />
                </div>

                <div className={styles.formInputContainer}>
                <input type="text" className={styles.formInput}  placeholder='enter the city'/>
                <img src={Search} alt="serach" className={styles.searchIcon} />
                </div>
                <button type='submit' className={styles.formButton}>
                <img src={WhiteSearch} alt="Search" />
                Search
                </button>
            </form>
        </div>

        <p className={styles.popUpHeading}>You may be looking for</p>

        <div className={styles.popUpIcons}>
            <Link to="FindDoctors">
            <div><DoctorCard className={styles.DoctorCard} /></div>
            </Link>
            <div><LabsCard className={styles.popUpCard}/></div>
            <Link to="FindDoctors">
            <div className={styles.hospitalCard}>
                <img src={Hospital} alt="hospital icon" className={styles.hospitalCardImg}/>
                <p className={styles.hospitalCardText}>Hospital</p>
            </div>
            </Link>
            <div><MedicalStoreCard className={styles.popUpCard}/></div>
            <div><AmbulanceCard className={styles.popUpCard}/></div>
        </div>
      
    </div>
  )
}

export default PopUpBox
