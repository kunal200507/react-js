// import react from 'react';

export default function Error({
    errorMessage,
    divClassName,
    paraClassName,
}){
   return(
    <div className={`${divClassName}`}>
        <p className={`text-red-700 text-2xl ${paraClassName}`}>{errorMessage}</p>
    </div>
    )
}