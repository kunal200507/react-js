// import React from "react";
import { useId,forwardRef } from "react";

const Input = forwardRef(function Input(
    {
        classNameDiv,
        classNameLabel,
        classNameInput,
        placeholder,
        label,
        type,
        ...props
    },ref){
    const id = useId();
    return(
        <div className={`${classNameDiv} `}>
            <label className={ `${classNameLabel}`} htmlFor={id}>
                {label}
            </label>
            <input className={ ` ${classNameInput}`} id={id} type={type} placeholder={placeholder} ref={ref} {...props} />

        </div>
    )
})

export default Input