import React from 'react'
import Announcement from '../../components/Announcement/Announcement'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import styles from "./Home.module.css"
import PopUpBox from '../../components/PopUpBox/PopUpBox'
import Offers from '../../components/Offers/Offers'
import Specialization from '../../components/Specialization/Specialization'
import MedicalSpecialist from '../../components/MedicalSpecialist/MedicalSpecialist'
import PatientCaring from '../../components/PatientCaring/PatientCaring'
import Blogs from '../../components/Blogs/Blogs'
import Stats from '../../components/Stats/Stats'
import Faqs from '../../components/Faqs/Faqs'
import Footer from '../../components/Footer/Footer'
const Home = () => {
  return (
    <div className={styles.home}>
      <Announcement/>
      <div className={styles.navAndHeroCont}>
      <Navbar/>
      <Hero/>

      </div>
      <PopUpBox/>
      <Offers/>
      <Specialization/>
      <MedicalSpecialist/>
      <PatientCaring/>
      <Blogs/>
      <Stats/>
      <Faqs/>
      <Footer/>
    </div>
  )
}

export default Home
