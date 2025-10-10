import React from "react";

const Cornerbox = ({name}) => {

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

            <div className="px-2 py-2 hover:text-orange-500 rounded flex items-center justify-center gap-2 cursor-pointer">
                 Logout
            </div>
        </div>

    )

}

export default Cornerbox