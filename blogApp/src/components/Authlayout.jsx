import React,{useState,useEffect} from 'react'
import {useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"

export default function Protected({children, authentication=true}) {
    const [loader,setLoader] = useState(false)
    const authStatus = useSelector((state)=>state.auth.status)
    const navigate = useNavigate()

    useEffect(() => {
        if (authentication && authStatus !== authentication) {
            navigate("/login")
        }else if(!authentication && authStatus !== authentication){
            navigate("/")
        }
        setLoader(false)
    }, [navigate,authStatus,authentication])
    

  return loader?<div>Loading...</div>:{children}
}
