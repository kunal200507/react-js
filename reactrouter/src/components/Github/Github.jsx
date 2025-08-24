import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

export default function Github(){
    const data=useLoaderData()
    // const[data, setData]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/kunal200507')
    //     .then((responce)=>responce.json())
    //     .then((data)=>{
    //         setData(data)
    //         console.log(data)})
    // },[])

    return(
        <>
        <div className="text-center text-3xl">Login: {data["login"]}</div>
        <img src={data.avatar_url} alt="github img" />
        </>
    )
}

export const githubInfoLoader = async ()=>{
    const responce=await fetch('https://api.github.com/users/kunal200507')
    return await responce.json()
}