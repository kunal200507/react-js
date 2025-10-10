import { useState } from 'react';
import Button from './Button'
import Cornerbox from './CornerBox';


function Userlogo(){

    const [showCornerBox,setShowCornerBox] = useState(false);

    const rbgGenerator=()=>{
        let r=Math.floor((Math.random())*100)+1;
        let b=Math.floor((Math.random())*100)+1;
        let g=Math.floor((Math.random())*100)+1;

        return (String)(rgb(r,b,g))
    }

    return(
        <div className={`p-1 w-65 relative `}>
            <button style={{ backgroundColor: rbgGenerator }} className={`absolute left-53 border-2 border-gray-400 h-8 w-8 m-auto rounded-full cursor-pointer  hover:border-orange-400 text-2xl` } onClick={()=>setShowCornerBox(!showCornerBox)} >
                s
            </button>
            <div className='absolute top-9' >
            {showCornerBox && <Cornerbox/> }
            </div>
        </div>
    )
}

export default Userlogo