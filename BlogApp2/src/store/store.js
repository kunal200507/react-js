import {configureStore} from '@reduxjs/toolkit'
import userReducer from './userslice'

configureStore({
    reducer: {
        appwriteAuthstore:userReducer,//keeps the data here
    },
})