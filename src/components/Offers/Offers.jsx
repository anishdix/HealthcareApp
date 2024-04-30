import React from 'react'
import styles from "./Offers.module.css"
import Offers1 from "../../Assets/Offers1.png"
import Offers2 from "../../Assets/Offers2.png"
import pagination from "../../Assets/SwiperPagination.png"
const Offers = () => {
  return (
    <div className={styles.offersContainer}>

    <div className={styles.offersCards}>
        <div>
            <img src={Offers1} alt="Offeers 1" />
        </div>
        <div>
            <img src={Offers2} alt="Offeers 2" />
        </div>
        <div>
            <img src={Offers1} alt="Offeers 1" />
        </div>
    </div>
    <div className={styles.offersPagination}>
        <img src={pagination} alt="pagination" />       
    </div>
    </div>
  )
}

export default Offers
