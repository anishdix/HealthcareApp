import {createSlice}from "@reduxjs/toolkit";

const AppoinmentSlice=createSlice({
    name:"Appoinment",
    initialState:{
        data:[],
        date:{}
        
        
        
    },
    reducers:{
        addDateAndTime: (state, action) => {
            
            state.date=(action.payload)
            },
            
          
          
          addAppointment: (state, action) => {
            state.data.push(state.date)
          },
        
        
        

       

    },

});
export const {addAppointment,addDateAndTime}=AppoinmentSlice.actions;
export default AppoinmentSlice.reducer;