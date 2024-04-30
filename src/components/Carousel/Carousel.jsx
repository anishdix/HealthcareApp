import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,FreeMode } from 'swiper/modules'
import { addDays, format } from 'date-fns';
import 'swiper/css';
import 'swiper/css/free-mode'
import 'swiper/css/navigation';
import styles from "./Carousel.module.css"
// Initialize Swiper Navigation
import { useDispatch } from 'react-redux';
import { addDateAndTime } from '../../Redux/Appoinments/AppoinmentSlice';

const Carousel = ({data,handleDate}) => {
  // const [selectedDate, setSelectedDate] = useState(new Date());
    
  const dispatch = useDispatch();
  const swiperRef = useRef(null);

  const dates = Array.from({ length: 7 }, (_, i) => addDays(new Date(), i));

  const handleDateClick = (date) => {
    
    const formattedDate = format(date, 'dd MMMM yyyy');
    let result={...data,date:formattedDate}
    handleDate(result)
    
  };

  
  

  return (
    <div className={styles.carouselContainer}>
      
      <Swiper
        ref={swiperRef}
        spaceBetween={5}
        slidesPerView={3}
        freeMode={true}
        navigation={true} modules={[Navigation,FreeMode]}
        style={{maxWidth:"100%"}}
      >
        {dates.map((date, index) => (
          <SwiperSlide key={index}  className={styles.swiperItem} style={{ width: "calc(100% / 3)" }}>
            <div className={`date-item `} onClick={() => handleDateClick(date)}>
              <div className={styles.swiperDate}>{format(date, 'EEEEEEE')},{format(date, 'dd/MM')}</div>
              
              <div style={{color:"green"}}> 11 Slots Available</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
    </div>
  );
};

export default Carousel;
