import { createSlice } from "@reduxjs/toolkit";

const appNavSlice = createSlice({
    name : 'AppSlice' ,
    initialState : {
        isMenuOpen : true 
    },
    reducers : {
        toggleMenu : (state)=> {
           state.isMenuOpen = !state.isMenuOpen
        } ,
        closeMenu : (state)=> {
            state.isMenuOpen = false 
        }

    } 
})

export const { toggleMenu  , closeMenu } = appNavSlice.actions ;

export default appNavSlice.reducer