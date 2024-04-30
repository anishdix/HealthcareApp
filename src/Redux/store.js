import { configureStore } from '@reduxjs/toolkit'
import AppoinmentSlice from './Appoinments/AppoinmentSlice'
import HospitalSlice from './Hospitals/HospitalSlice'
export const store =configureStore({
    reducer:{
        hospitals:HospitalSlice,
        appoinments:AppoinmentSlice,
    }
})