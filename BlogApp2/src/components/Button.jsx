import React from "react";

function Button({ type, classNameDiv, classNameButton, func, text }) {
    return (
        <div className={` h-auto w-auto ${classNameDiv}`}>
            <button
                type={type}
                className={`
                        border-2 border-blue-600
                        px-4
                        py-1              
                        h-auto
                        w-auto              
                        m-1
                        rounded-2xl
                        cursor-pointer
                        transition duration-300 shadow-2xl hover:shadow-2xs focus:outline-none focus:ring-4 focus:ring-orange-300 focus:ring-opacity-50 mb-8 cursor-pointer"  
                        ${classNameButton}
                        `}
                onClick={func}
            >
                {text}
            </button>

        </div>

    )
}

export default Button