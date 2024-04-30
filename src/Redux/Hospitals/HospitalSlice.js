import {createSlice}from "@reduxjs/toolkit";

const HospitalSlice=createSlice({
    name:"hospitals",
    initialState:{
        data:[],
        
    },
    reducers:{
        addHospitals:(state,action)=>{
            state.data=(action.payload); 
        },
        

    },

});
export const {addHospitals}=HospitalSlice.actions;
export default HospitalSlice.reducer;