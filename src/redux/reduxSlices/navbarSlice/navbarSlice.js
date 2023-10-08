import { createSlice } from "@reduxjs/toolkit";


export const navbarSlice = createSlice({
    name:'navbar',
    initialState: {
        hamburgerActive:false
    },
    reducers:{
        closeHamburgerActive: (state, action) =>{
            state.hamburgerActive = action.payload
        },
        setHamburgerActive: (state, action) =>{
            state.hamburgerActive = action.payload;
        },
    }
})


export const {closeHamburgerActive, setHamburgerActive} = navbarSlice.actions;
export default navbarSlice.reducer;


