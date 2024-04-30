import React, { useState } from 'react'
import styles from "./MyBookings.module.css"
import Announcement from '../../components/Announcement/Announcement'
import Navbar from '../../components/Navbar/Navbar'
import BookingsPopUp from '../../components/BookingsPopUp/BookingsPopUp'
import MedicalCenters from '../../components/MedicalCenters/MedicalCenters'
import { useSelector } from 'react-redux'
const MyBookings = () => {
  const allData=useSelector(state=>state.appoinments.data)
  return (
    <div className={styles.MyBookingsContainer}>
      <Announcement />
      <Navbar background={true} MyBookings={true}/>
      <BookingsPopUp/>
      <MedicalCenters allData={allData} fromBookings={true}/>
      </div>
  )
}

export default MyBookings
