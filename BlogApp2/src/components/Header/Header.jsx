import React from "react";
import { Link, NavLink } from "react-router"
import Logout from "./Logout";
import Signup from "../Signup";
import Userlogo from "../Userlogo";

function Header() {
    const headerComp = [
        {
            name: "home",
            to: "/home"
        },
        {
            name: "posts",
            to: "/posts"
        },
        {
            name: "authors",
            to: "/authors"
        },
    ]

    return (
        <>
            <header className='w-full h-20 border-b-1 shadow'>
                <div className='w-full h-full flex flex-wrap flex-row justify-around'>
                    <div className='text-black p-1 mt-4 m-1 ml-6  bg-green-300 w-10 h-10' >logo</div>
                    <div className=' ml-4 m-2 w-6xl h-14'>
                        <div className=' p-2 mt-2 ml-16 h-10 w-5xl'>
                            <ul className='flex flex-wrap flex-row justify-center items-center'>
                                {
                                    headerComp.map((obj) => (
                                        <li key={obj.name} className="mr-2 ml-2 hover:underline" >
                                            <NavLink to={obj.to} className={({ isActive }) =>
                                                isActive ? "text-blue-500 font-bold" : "text-gray-400"
                                            }>
                                                {obj.name}
                                            </NavLink>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    {/* <div className=" bg-red-600 ml-10 m-2 h-14 pt-2" >
                        <Userlogo/>
                    </div> */}
                    <div className=" flex flex-wrap flex-row ">
                        <div className=" ml-4 m-2 h-14 pt-2" >
                            <Logout />
                        </div>
                        <div className="  ml-4 m-2 h-14 pt-2" >
                            <Signup />
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header