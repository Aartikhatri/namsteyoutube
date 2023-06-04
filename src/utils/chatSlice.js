import { createSlice } from "@reduxjs/toolkit";
import {  liveChat_msgCount } from "../Components/ConstantData/YoutubeVideoAPi";

 const chatSlice = createSlice({
    name : "chat" ,
     initialState : {
        message : []
     },
     reducers : {
        addToChat : (state , action) => {
             state.message.splice(liveChat_msgCount , 1)
            state.message.unshift(action.payload)
        }
     }
 }) ;


 export const { addToChat } = chatSlice.actions
 export default chatSlice.reducer
