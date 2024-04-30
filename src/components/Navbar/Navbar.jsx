import React from 'react'
import styles from "./Navbar.module.css"
import {Link}from "react-router-dom";
import {ReactComponent as Logo } from "../../Assets/Logo.svg"
const Navbar = ({background,MyBookings}) => {
  let navbarContainer = styles.navbarContainer;

  console.log(navbarContainer)
  if (background) {
    navbarContainer = styles.withBackground;
  }


  return (
    <div className={styles.navbarMainContainer}>

    <div className={navbarContainer}>
      <Link to="/">
        <div className={styles.logo}>
        <Logo/>
        </div>
      </Link>
        <Link to="/FindDoctors">
        <div className={styles.FindDoctors}>
            <span>Find Doctor</span>
        </div>
        </Link>
        <div className={styles.navbarItems}>
            <span>Hospitals</span>
            <span>Medicines</span>
            <span>Surgeries</span>
            <span>Software for Provider</span>
            <span>Facilities</span>

        </div>
        <Link to="MyBookings">
          <div >
            <button className={styles.navbarBookingsButton}>My Bookings</button>
        </div>
        </Link>
        </div>
        {background &&
        (<div className={styles.extraSpace}>
        {MyBookings&&(
          <div className={styles.MyBookings}>
            My Bookings
          </div>
        )}
        </div>
        )}
      
    </div>
  )
}

export default Navbar
