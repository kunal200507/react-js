import { createSlice } from "@reduxjs/toolkit";

const userslice=createSlice({
    name: 'appwriteAuthstore',
    initialState:{
        isLoggedIn:false,
        data: {},
    },
    reducers:{
        userLogin:(state,action)=>{
            state.isLoggedIn=true
            state.data = action.payload
        },
        userLogout:(state)=>{
            state.isLoggedIn=false
            state.data=null
        },
    }
})


export const {userLogin, userLogout} = userslice.actions

export default userslice.reducer //sends all the information out

