import React from "react";
import userAuth from '../appwrite/appwriteAuth'
import { useSelector, useDispatch } from 'react-redux';
import {userLogin, userLogout} from '../store/userslice'
const Cornerbox = ({name}) => {
    const userData = useSelector((state)=>state.appwriteAuthstore.data)
    const dispatch = useDispatch()
    const logout = async()=>{
        if(userData){
            const logoutStatus = await userAuth.userLogout(userData.$id);
            console.log(logoutStatus)
            if(logoutStatus){
                dispatch(userLogout())
            }
        }

    }

    return (
        <div className="w-60 bg-white text-black rounded-lg shadow-lg p-2">
            {/* Profile header */}
            <div className="flex items-center justify-center gap-2 p-2 border-b border-gray-700">
                <img
                    src="https://via.placeholder.com/32"
                    alt="profile"
                    className="w-8 h-8 rounded-full"
                />
                <span className="hover:text-orange-500 font-semibold">{name}</span>
            </div>

            {/* Menu items */}
            <ul className="mt-2">
                <li className="px-2 py-2 hover:text-orange-500 rounded flex items-center justify-center gap-2 cursor-pointer">
                    Profile
                </li>
                <li className="px-2 py-2 hover:text-orange-500 rounded flex items-center justify-center gap-2 cursor-pointer">
                    Your posts
                </li>
            </ul>

            <button className="px-2 py-2 hover:text-orange-500 rounded flex items-center justify-center gap-2 cursor-pointer" onClick={()=>logout}>
                 Logout
            </button>
        </div>

    )

}

export default Cornerbox