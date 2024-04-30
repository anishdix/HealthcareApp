import React from 'react'
import styles from "./Stats.module.css"
import StatsImage from "../../Assets/Stats/StatsImage.png"
const Stats = () => {
  return (
    <div className={styles.StatsContainer}>
        <div className={styles.Statstext}>
            <span style={{color:"rgba(42, 167, 255, 1)",fontWeight:"600"}}>CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.</span>
            <h1 style={{color:"rgba(27, 60, 116, 1)",fontSize:"48px"}}>Our Families</h1>
            <span style={{color:"rgba(119, 130, 157, 1)",fontWeight:"500"}}>We will work with you to develop individualised care plans, including management of chronic diseases. 
                If we cannot assist, we can provide referrals or advice about the type of practitioner you require. 
                We treat all enquiries sensitively and in the strictest confidence.</span>
        </div>
        <div className={styles.StatsImage}>
            <img src={StatsImage} alt="Stats Image" />
        </div>
    </div>
  )
}

export default Stats
