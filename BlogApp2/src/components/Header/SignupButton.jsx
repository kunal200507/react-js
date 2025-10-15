import { useState } from 'react'
import { useNavigate } from "react-router"
import {Button} from '../index.js'

function SignupButton(){
    const navigate = useNavigate();
    return(
        <Button text="Sign Up" func={()=>navigate("/signup")}/>
    )
}

export default SignupButton