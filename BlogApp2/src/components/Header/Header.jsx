import { NavLink, useNavigate } from "react-router"
import { useSelector } from 'react-redux'
import { LoginButton, SignupButton, Userlogo } from '../index.js'
import { useEffect, useState } from "react"

function Header() {
    const userState = useSelector((state) => state.appwriteAuthstore.isLoggedIn)
    const navigate = useNavigate()
    const [menuBar, setMenuBar] = useState(false)
    const headerComp = [
        {
            name: "home",
            to: "/"
        },
        {
            name: "All Posts",
            to: "/allposts"
        },
    ]

    return (
        <>
            <header className={`w-full h-20 border-b-1 shadow sm:sticky top-0 z-10 sm:bg-transparent bg-slate-50`}>
                <div className='w-full h-full flex flex-wrap flex-row justify-evenly'>
                    <button className='text-blue-600 p-1 mt-4 m-1 ml-6 cursor-pointer w-10 h-10' onClick={() => navigate("/")} >Writeit</button>
                    <div className='lg:ml-4 lg:m-2 lg:h-14'>
                        <div className=' p-2 mt-2 ml-16 h-10'>
                            <ul className='flex flex-wrap flex-row justify-center items-center'>
                                {
                                    headerComp.map((obj) => (
                                        <li key={obj.name} className="mr-2 ml-2 hover:underline" >
                                            <NavLink to={obj.to} className={({ isActive }) =>
                                                `${isActive ? "text-blue-500 font-bold" : "text-gray-400"} hidden lg:block`
                                            }>
                                                {obj.name}
                                            </NavLink>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    {/* for mobile */}
                    {!userState && (<div className="sm:hidden m-2 h-14 pt-2 absolute top-2 right-10 ">
                        <button onClick={() => setMenuBar(!menuBar)}>
                            {menuBar ? (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-8 self-center text-slate-900 lg:hidden">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>) : (<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                                <path d="M 3 9 A 1.0001 1.0001 0 1 0 3 11 L 47 11 A 1.0001 1.0001 0 1 0 47 9 L 3 9 z M 3 24 A 1.0001 1.0001 0 1 0 3 26 L 47 26 A 1.0001 1.0001 0 1 0 47 24 L 3 24 z M 3 39 A 1.0001 1.0001 0 1 0 3 41 L 47 41 A 1.0001 1.0001 0 1 0 47 39 L 3 39 z"></path>
                            </svg>)
                            }
                            {
                                menuBar && (
                                    <div className="m-2 h-14 pt-2">
                                        <div className="flex bg-slate-50 flex-col justify-center items-center w-screen absolute -left-74 top-15 ">
                                            <ul className="w-full flex flex-col justify-center items-center pt-4">
                                                {
                                                    headerComp.map((obj) => (
                                                        <li key={obj.name} className="mr-2 ml-2 hover:underline mb-4" >
                                                            <NavLink to={obj.to} className={({ isActive }) =>
                                                                `${isActive ? "text-gray-900 font-bold" : "text-black"} sm:hidden`
                                                            }>
                                                                {obj.name}
                                                            </NavLink>
                                                        </li>
                                                    ))
                                                }
                                                <li className="mr-2 ml-2 hover:underline mb-4">
                                                    <NavLink to={"/login"} className={({ isActive }) =>
                                                        `${isActive ? "text-gray-900 font-bold" : "text-black"} sm:hidden`
                                                    }>
                                                        Login
                                                    </NavLink>
                                                </li>
                                                <li className="mr-2 ml-2 hover:underline mb-4">
                                                    <NavLink to={"signup"} className={({ isActive }) =>
                                                        `${isActive ? "text-gray-900 font-bold" : "text-black"} sm:hidden`
                                                    }>
                                                        SignUp
                                                    </NavLink>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                )
                            }
                        </button>
                    </div>)}
                    {userState ? (<div className=" m-2 h-14 pt-2"  >
                        <Userlogo />
                    </div>) : (<div className="hidden lg:flex lg:flex-wrap lg:flex-row ">
                        <div className=" ml-4 m-2 h-14 pt-2" >
                            <LoginButton />
                        </div>
                        <div className="  ml-4 m-2 h-14 pt-2" >
                            <SignupButton />
                        </div>
                    </div>)}

                </div>
            </header>
        </>
    )
}

export default Header