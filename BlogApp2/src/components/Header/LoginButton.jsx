import { useSelector } from "react-redux"
import Button from '../Button'
import { Navigate, useNavigate } from "react-router"

function LoginButton(){
    // const userStatus = useSelector((state)=>state.appwriteAuthstore.isLoggedIn)
    const navigate = useNavigate()

    return(
        <Button text="Login" func={()=>navigate("/login")}>
        </Button>
    )
}

export default LoginButton