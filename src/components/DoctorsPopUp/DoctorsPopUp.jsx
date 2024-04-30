import React, { useEffect, useState } from 'react'
import styles from "./DoctorsPopUp.module.css"
import WhiteSearch from "../../Assets/WhiteSearch.png"
import LocationIcon from "../../Assets/LocationIcon.png"
import axios from 'axios'
import { useSelector,useDispatch } from 'react-redux'
import { addHospitals } from '../../Redux/Hospitals/HospitalSlice'


const DoctorsPopUp = () => {
  const [states,setStates]=useState([])
  const [cities,setCities]=useState([])
  const [selectedState,setSelectedState]=useState(null)
  const [selectedCity,setSelectedCity]=useState(null)
 

  const hospital=useSelector(state=>state.hospitals.data)
  // console.log(hospital,"hosp")
  const dispatch=useDispatch()


  useEffect(()=>{
    axios.get("https://meddata-backend.onrender.com/states")
    .then((res)=>{
      
      setStates(res.data)})
      .catch((err)=>console.log(err))
      
  },[])


  useEffect(()=>{
    if(selectedState){
      
      axios.get(`https://meddata-backend.onrender.com/cities/${selectedState}`)
      .then((res)=>{
        console.log(res.data)
        setCities(res.data)})
      .catch((err)=>console.log(err))
    }
  },[selectedState])


    const handleSubmit=(e)=>{
      e.preventDefault()
      console.log(selectedState,selectedCity)
      axios.get(`https://meddata-backend.onrender.com/data?state=${selectedState}&city=${selectedCity}`)
      .then((res)=>{
       dispatch(addHospitals(res.data))})
      .catch((err)=>console.log(err))

    }

  return (
    <div className={styles.DoctorsPopUpConatiner}>
        <form onSubmit={handleSubmit} className={styles.formContainer}>
                <div className={styles.formInputContainer}>
                <input list="states" className={styles.formInput} name="states"  placeholder='enter the state' onChange={(e)=>setSelectedState(e.target.value)}/>
                <img src={LocationIcon} alt="LocationIcon" className={styles.LocationIcon} />
                <datalist id="states">
                  {states.map(ele=>(
                    <option value={ele} key={ele}></option>
                  ))}
  
                </datalist>
                </div>

                <div className={styles.formInputContainer}>
                <input list="cities" className={styles.formInput} name="cities"  placeholder='enter the city' onChange={(e)=>setSelectedCity(e.target.value)}/>
                <img src={LocationIcon} alt="LocationIcon" className={styles.LocationIcon} />
                <datalist id="cities">
                {cities.map(ele=>(
                  <option value={ele} key={ele}></option>
                ))}
                </datalist>
                </div>

                
                <button type='submit' className={styles.formButton}>
                <img src={WhiteSearch} alt="Search" />
                Search
                </button>
            </form>
      
    </div>
  )
}

export default DoctorsPopUp
