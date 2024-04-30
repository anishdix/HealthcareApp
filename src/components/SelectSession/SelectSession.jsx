import React from 'react'
import styles from "./SelectSession.module.css"
import { useDispatch,useSelector } from 'react-redux';
import { addDateAndTime,addAppointment } from '../../Redux/Appoinments/AppoinmentSlice';
const SelectSession = ({data}) => {
  
  
  const dispatch=useDispatch()

  const handleClick = (event) => {
    const optionValue = {...data,time: event.target.value };
    dispatch(addDateAndTime(optionValue));
    console.log(optionValue,"all");
    dispatch(addAppointment(optionValue))
  };
  
    return (
      <div onClick={handleClick} className={styles.sessionContainer}>
        <div className={styles.subContainer}>
          <h3>Morning</h3>
          <div className={styles.buttonContainer}>
            <button className={styles.subContainerButton} data-category="morning" value="11:30 AM">11:30 AM</button>
            
          </div>
        </div>
  
        <div className={styles.subContainer}>
          <h3>Afternoon</h3>
          <div className={styles.buttonContainer}>
            <button className={styles.subContainerButton} data-category="afternoon" value="12:00 PM">12:00 PM</button>
            <button className={styles.subContainerButton} data-category="afternoon" value="12:30 PM">12:30 PM </button>
            <button className={styles.subContainerButton} data-category="afternoon" value="01:30 PM">01:30 PM</button>
            <button className={styles.subContainerButton} data-category="afternoon" value="02:30 PM">02:30 PM</button>
            <button className={styles.subContainerButton} data-category="afternoon" value="03:30 PM">03:30 PM</button>
          </div>
        </div>
  
        <div className={styles.subContainer}>
          <h3>Evening</h3>
          <div className={styles.buttonContainer}>
            <button className={styles.subContainerButton} data-category="noon" value="06:00 PM">06:00 PM</button>
            <button className={styles.subContainerButton} data-category="noon" value="06:30 PM">06:30 PM</button>
            <button className={styles.subContainerButton} data-category="noon" value="07:00PM">07:00PM</button>
            <button className={styles.subContainerButton} data-category="noon" value="07:30 PM">07:30 PM</button>
          </div>
        </div>
      </div>
    );
  };
  

export default SelectSession
