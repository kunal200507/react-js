import { useSelector } from "react-redux"
import Button from '../Button'
import { Navigate } from "react-router"

function Logout(){
    // const userStatus = useSelector((state)=>state.appwriteAuthstore.isLoggedIn)

    const logout = ()=>{

    }

    return(
        <Button text="Logout" func={logout}/>
    )
}

export default Logout