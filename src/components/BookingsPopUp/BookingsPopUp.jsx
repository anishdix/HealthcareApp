import React from 'react'
import styles from "./BookingsPopUp.module.css"
import Search from "../../Assets/Search.png"
const BookingsPopUp = () => {
  return (
    <div className={styles.BookingsPopUpContainer}>
      <input type="text" placeholder='Search by Hospital' className={styles.BookingsPopUpInput}/>
      <button className={styles.BookingsPopUpButton}>
        <img src={Search} alt='search Icon' />
        Search
      </button>
    </div>
  )
}

export default BookingsPopUp
