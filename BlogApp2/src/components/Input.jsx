import React from "react";

const Input = ({classNameDiv,classNameLabel,classNameInput,placeholder,label,type,id})=>{
    return(
        <div className={` h-auto w-1/4 flex flex-row justify-center items-center ${classNameDiv} `}>
            <label className={ `m-1 mr-3 ${classNameLabel}`} htmlFor={id}>
                {label}
            </label>
            <input className={ `m-1 w-full border border-gray-300 rounded-lg p-2 shadow-sm focus:border-blue-500 ${classNameInput}`} id={id} type={type} placeholder={placeholder} />

        </div>
    )
}

export default Input