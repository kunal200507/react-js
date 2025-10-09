import React from "react";

const Cornerbox = () => {

    return (
        <div className="w-60 bg-gray-900 text-white rounded-lg shadow-lg p-2">
            {/* Profile header */}
            <div className="flex items-center gap-2 p-2 border-b border-gray-700">
                <img
                    src="https://via.placeholder.com/32"
                    alt="profile"
                    className="w-8 h-8 rounded-full"
                />
                <span className="font-semibold">kunal200507</span>
            </div>

            {/* Menu items */}
            <ul className="mt-2">
                <li className="px-2 py-2 hover:bg-gray-800 rounded flex items-center gap-2 cursor-pointer">
                    <span>😊</span> Set status
                </li>
                <li className="px-2 py-2 hover:bg-gray-800 rounded flex items-center gap-2 cursor-pointer">
                    <span>👤</span> Profile
                </li>
                <li className="px-2 py-2 hover:bg-gray-800 rounded flex items-center gap-2 cursor-pointer">
                    <span>📁</span> Repositories
                </li>
                <li className="px-2 py-2 hover:bg-gray-800 rounded flex items-center gap-2 cursor-pointer">
                    <span>⭐</span> Stars
                </li>
                <li className="px-2 py-2 hover:bg-gray-800 rounded flex items-center gap-2 cursor-pointer">
                    <span>📝</span> Gists
                </li>
                <li className="px-2 py-2 hover:bg-gray-800 rounded flex items-center gap-2 cursor-pointer">
                    <span>🏢</span> Organizations
                </li>
                <li className="px-2 py-2 hover:bg-gray-800 rounded flex items-center gap-2 cursor-pointer">
                    <span>🌐</span> Enterprises
                </li>
                <li className="px-2 py-2 hover:bg-gray-800 rounded flex items-center gap-2 cursor-pointer">
                    <span>❤️</span> Sponsors
                </li>
            </ul>

            {/* Divider */}
            <div className="border-t border-gray-700 my-2"></div>

            {/* Settings section */}
            <ul>
                <li className="px-2 py-2 hover:bg-gray-800 rounded flex items-center gap-2 cursor-pointer">
                    <span>⚙️</span> Settings
                </li>
                <li className="px-2 py-2 hover:bg-gray-800 rounded flex items-center gap-2 cursor-pointer">
                    <span>🤖</span> Copilot settings
                </li>
                <li className="px-2 py-2 hover:bg-gray-800 rounded flex items-center gap-2 cursor-pointer">
                    <span>🧪</span> Feature preview <span className="bg-blue-500 text-white text-xs px-1 rounded ml-auto">New</span>
                </li>
                <li className="px-2 py-2 hover:bg-gray-800 rounded flex items-center gap-2 cursor-pointer">
                    <span>🎨</span> Appearance
                </li>
                <li className="px-2 py-2 hover:bg-gray-800 rounded flex items-center gap-2 cursor-pointer">
                    <span>♿</span> Accessibility
                </li>
                <li className="px-2 py-2 hover:bg-gray-800 rounded flex items-center gap-2 cursor-pointer">
                    <span>⬆️</span> Try Enterprise <span className="bg-gray-600 text-white text-xs px-1 rounded ml-auto">Free</span>
                </li>
            </ul>

            {/* Divider */}
            <div className="border-t border-gray-700 my-2"></div>

            <div className="px-2 py-2 hover:bg-gray-800 rounded flex items-center gap-2 cursor-pointer">
                <span>↩️</span> Sign out
            </div>
        </div>

    )

}

export default Cornerbox