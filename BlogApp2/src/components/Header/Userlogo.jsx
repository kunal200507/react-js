import { useEffect, useState } from 'react';
import { Cornerbox } from '../index.js'
import { useSelector } from 'react-redux';

function Userlogo() {

    const [showCornerBox, setShowCornerBox] = useState(false);
    const [firstLetter, setFirstLetter] = useState("")
    const [rgb,setrgb] = useState("")
    const name = useSelector((state) => state.appwriteAuthstore.data).name

    useEffect(() => {
        setFirstLetter(name[0])
    }, [])


    return (
        <div className={`sm:p-1 sm:w-65 relative w-15 `}>
            <button className={` bg-red-200 absolute sm:left-53 left-3 top-1
            border-2 border-gray-400 h-8 w-8 m-auto rounded-full cursor-pointer  hover:border-orange-400 text-2xl text-white` } onClick={() => setShowCornerBox(!showCornerBox)} >
                {firstLetter}
            </button>
            <div className='absolute sm:top-9 top-12 -left-69.5 z-10 ' >
                {showCornerBox && <Cornerbox />}
            </div>
        </div>
    )
}

export default Userlogo