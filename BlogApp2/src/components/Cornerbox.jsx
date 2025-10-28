import {  useState } from "react";
import userAuth from '../appwrite/appwriteAuth'
import { useDispatch, useSelector } from 'react-redux';
import { userLogout} from '../store/userslice'
import { NavLink, useNavigate } from "react-router";
const Cornerbox = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [username, setUsername] = useState('')
    const [userId,setUserId] = useState('')

    const userdata = useSelector((state)=>state.appwriteAuthstore.data)
    setUsername(userdata.name)
    setUserId(userdata.$id)

    const logout = ()=>{
        userAuth.userLogout()
        .then(()=>{
            dispatch(userLogout())
            alert("user logout")
            navigate('/')
        })
        .catch((error)=>{
            alert(error)
        })
    }
    return (
        <div className="w-60 bg-white text-black rounded-lg shadow-lg p-2">
            {/* Profile header */}
            <div className="flex items-center justify-center gap-2 p-2 border-b border-gray-700">
                <span className="hover:text-orange-500 font-semibold">{username}</span>
            </div>

            {/* Menu items */}
            <ul className="mt-2">
                <li >
                    <button className="px-2 py-2 hover:text-orange-500 rounded flex items-center justify-center gap-2 cursor-pointer">
                        <NavLink to={"/profile"}>
                            Profile
                        </NavLink>
                    </button>
                </li>
                <li>
                    <button className="px-2 py-2 hover:text-orange-500 rounded flex items-center justify-center gap-2 cursor-pointer">
                        <NavLink to={`/${userId}/addpost`} > 
                            Add post
                        </NavLink> 
                    </button>
                </li>
            </ul>

            <button className="px-2 py-2 hover:text-orange-500 rounded flex items-center justify-center gap-2 cursor-pointer" onClick={()=>logout()}>
                 Logout
            </button>
        </div>

    )

}

export default Cornerbox