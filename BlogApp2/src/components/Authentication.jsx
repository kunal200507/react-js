import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router"

export default function Loader({ children}) {
    const userState = useSelector((state) => state.appwriteAuthstore.isLoggedIn)
    useEffect(() => {

        if (userState == true ) {
            return (
                children
            )
        } else {
            return (
                <div className='w-screen h-screen flex'>
                    <p className='justify-center items-center m-auto'>loading...</p>
                </div>
            )
        }
    }, [userState])

}