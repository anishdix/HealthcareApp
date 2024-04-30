import React from 'react'
import styles from "./Footer.module.css"
import FooterImage from "../../Assets/Footer/FooterImage.png"
import FooterSocials from "../../Assets/Footer/FooterSocials.png"
import AboutUs1 from "../../Assets/Footer/AboutUs1.png"
import AboutUs2 from "../../Assets/Footer/AboutUs2.png"
import AboutUs3 from "../../Assets/Footer/AboutUs3.png"
const Footer = () => {
  return (
    <div className={styles.FooterContainer}>
        <div className={styles.FooterImageContainer}>
            <img src={FooterImage} alt="footer" />
        </div>
        <div className={styles.footerInnerContainer}>
            <div className={styles.AboutUsContainer}>
                <div className={styles.FooterSocials}> 
                    <img src={FooterSocials} alt="footerSocials" />
                </div>
                <div>
                    <img src={AboutUs1} alt="about us 1" />
                </div>
                <div>
                    <img src={AboutUs2} alt="about us 2" />
                </div>
                <div style={{width:"230px"}}>
                    <img src={AboutUs3} alt="about us 3" />
                </div>
            </div>
            <div>
                <p style={{color:"white",fontWeight:"400", textAlign:"start",padding:"1rem"}}>Copyright ©2023 Surya Nursing Home.com. All Rights Reserved</p>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
