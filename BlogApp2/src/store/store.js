import {configureStore} from '@reduxjs/toolkit'
import userReducer from './userslice'

const store = configureStore({
    reducer: {
        appwriteAuthstore:userReducer,//keeps the data here
    },
})

export default store