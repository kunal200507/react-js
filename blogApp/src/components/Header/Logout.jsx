import React from "react";
import AuthObject from "../../Authentication/Authentication";
import { useDispatch } from "react-redux";
import { logout } from "../../store/authenticationSlice";

function Logout(){
    const dispatch = useDispatch()
    const checkLogout = ()=>{
        AuthObject.logout()
        .then(()=>{
            dispatch(logout())
        })
    }

    return(
        <button
        className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
        onClick={()=>checkLogout}
        >
            Logout
        </button>
    ) 
}

export default Logout