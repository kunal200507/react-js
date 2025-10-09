import { createSlice } from "@reduxjs/toolkit";

export const userslice=createSlice({
    name: 'appwriteAuthstore',
    initialState:{
        isLoggedIn:True,
        data: {},
    },
    reducers:{
        userLogin:(state,action)=>{
            state.isLoggedIn=true
            state.data = action.payload.data
        },
        userLogout:(state)=>{
            state.isLoggedIn=false
            state.data={}
        }
    }
})


export const {userLogin, userLogout} = userslice.actions

export default userslice.reducer //sends all the information out

