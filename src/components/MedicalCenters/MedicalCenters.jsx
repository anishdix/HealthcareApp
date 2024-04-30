import React, { useState } from 'react'
import styles from "./MedicalCenters.module.css"
import ads from "../../Assets/MedicalCenterCard/Ads.png"
import HospitalIcon from "../../Assets/MedicalCenterCard/HospitalIcon.png"
import RatingIcon from "../../Assets/MedicalCenterCard/RatingIcon.png"
import Carousel from '../Carousel/Carousel'
import SelectSession from '../SelectSession/SelectSession'
import { useSelector } from 'react-redux'
const MedicalCenters = ({allData}) => {
    console.log(allData,"allData")
    const hospitaldata=useSelector(state => state.hospitals.data)
    let data;
if (allData) {
  data = allData;
} else {
  data =hospitaldata ;
}

    // const date=useSelector((state)=>state.appoinments.data)
    // console.log(date)
    
    

    const [bookingStates,setBookingStates]=useState(Array(data.length).fill(false))
    const [date,setDate]=useState(null)

 
    const handleClick=(index)=>{
        const newBookingStates = [...bookingStates];
        newBookingStates[index] = !newBookingStates[index];
        setBookingStates(newBookingStates);

        
    }
    const handleDate=(data)=>{
        setDate(data)
        
    }
    console.log(date,"date")

    
    
    

  return (
    <>
    
      {data.length && 
      <div className={styles.MedicalCentersContainer}>
        <div className={styles.MedicalCentersHeadings}>
            <h1>
            {data.length} medical centers available in 
            </h1>
            <p style={{color:"rgba(120, 120, 135, 1)", marginTop:"0px"}}>
            Book appointments with minimum wait-time & verified doctor details
            </p>
        </div>
        <div>

        <div className={styles.MedicalCentersCardInnerContainer}>
            <div className={styles.MedicalCentersCardsContainer}>

        {(data).map((ele,index)=>
        (
            <div className={styles.MedicalCentersSessions} key={ele["Provider ID"]}>

                <div className={styles.MedicalCentersCard}>
            <div className={styles.HospitalIcon}>
                <img src={HospitalIcon} alt="hospitalIcon" />
            </div>
            <div className={styles.MedicalCentersCardText}>
                <h2 style={{color:"rgba(20, 190, 240, 1)"}}>{ele['Hospital Name']}</h2>
                <div style={{fontWeight:"700"}}>{ele.Address},{ele.City},{ele.State}</div>
                <div style={{fontWeight:"400"}}>{ele['Hospital Type']}</div>
                <span style={{color:"rgba(2, 164, 1, 1)",fontWeight:"700"}}>FREE</span>
                <span style={{display:"inline-block",paddingLeft:"8px"}}>Consultation fee at clinic</span>
                <div className={styles.RatingContainer}>
                    <img src={RatingIcon} alt="ratingicon" />
                    <span style={{paddingLeft:"5px"}}>{ele["Hospital overall rating"]}</span>
                        
                    
                </div>
            </div>
            {allData ? (
                <div className={styles.bookingButtonContainer}>
                    <button className={styles.time}>{ele.time}</button>
                    <button className={styles.date}>{ele.date}</button>
                </div>)
                :
            (<div className={styles.MedicalCentersCardButtonContainer}>
                <div style={{color:"rgba(2, 164, 1, 1)", }}>Available Today</div>
                <button className={styles.MedicalCentersCardButton} onClick={()=>handleClick(index)}>{bookingStates[index]? "Cancel":"FREE Center Visit"}</button>
            </div>
            )
        }
            </div>


            {bookingStates[index]&&
            (
                <div className={styles.bookingContainer}>
                    <div className={styles.greenLine}></div>
                    <Carousel data={ele}  handleDate={handleDate}/>
                </div>
            )}
            {/* date[index] && date[index]["date"] && */}
            {( bookingStates[index]) && (
                <SelectSession data={date} 
                
            />
            )}
        </div>
        )
        )}
        </div>

        <div className={styles.MedicalCentersAds}>
        <img src={ads} alt="advertisement" />
        </div>
        </div>
        </div>
      
    </div>
        }
        </>
  )
}

export default MedicalCenters
