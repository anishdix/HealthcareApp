import React, { useEffect, useState } from 'react'
import styles from "./FindDoctors.module.css"
import Announcement from '../../components/Announcement/Announcement'
import Navbar from '../../components/Navbar/Navbar'
import DoctorsPopUp from '../../components/DoctorsPopUp/DoctorsPopUp'
import MedicalCenters from '../../components/MedicalCenters/MedicalCenters'
import Faqs from '../../components/Faqs/Faqs'
import Footer from '../../components/Footer/Footer'
const FindDoctors = () => {


  const [allData,setAllData]=useState([])

  useEffect(() => {
    // console.log(allData, "data");
}, [allData]);

  const getState=(data)=>{

  }

  const getDateAndTime=(data)=>{
    setAllData(prev=>[...prev,data])
    // console.log(allData,"data")
    
  }
  return (
    <div className={styles.FindDoctorsContainer}>
      <Announcement />
      <Navbar background={true}/>
      <DoctorsPopUp/>
      <MedicalCenters data={allData} getDateAndTime={getDateAndTime}/>
      <Faqs/>
      <Footer/>

    </div>
  )
}

export default FindDoctors
