import React from "react";
import { useParams } from "react-router";

export default function User(){
    const {userId} = useParams()
    return(
        <>
        <div className="text-center text-3xl">User {userId}</div>
        </>
    )
}