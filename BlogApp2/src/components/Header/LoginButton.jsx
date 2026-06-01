import Button from '../Button'
import { useNavigate } from "react-router"

function LoginButton(){
    const navigate = useNavigate()

    return(
        <Button text="Login" func={()=>navigate("/login")}>
        </Button>
    )
}

export default LoginButton