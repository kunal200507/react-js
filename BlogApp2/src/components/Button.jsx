import React from "react";

function Button({ classNameDiv, classNameButton,func, text }) {
    return (
        <div className={` h-10 w-21 ${classNameDiv}`}>
            <button className={`border-2 border-blue-600 h-8 w-19 m-1 box-border rounded-2xl cursor-pointer hover:border-orange-400 ${classNameButton}`} onClick={func} >
                {text}
            </button>
        </div>

    )
}

export default Button