import userdb from "../appwrite/appwriteDb"
import { useSelector } from "react-redux"

export default function AseHi(){

    const userData = useSelector((state)=>state.appwriteAuthstore.data)

    async function dataResponce(){
        console.log(userData.$id)
        try {
            // console.log(await userdb.getUserData(userData.$id))
            console.log(await userdb.getAllUsersData(userData.$id))
            // console.log(await userdb.getSlug(userData.$id))
            
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <div>
            <button onClick={dataResponce}>
                click Me
            </button>
        </div>
    )
}