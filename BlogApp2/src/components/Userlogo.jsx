import Button from './Button'


function Userlogo(){

    const rbgGenerator=()=>{
        let r=Math.floor((Math.random())*100)+1;
        let b=Math.floor((Math.random())*100)+1;
        let g=Math.floor((Math.random())*100)+1;

        return 'rgb(r,b,g)'
    }

    const cornerBar = ()=>{
    }
    return(
        <div className={`bg-blue-500 p-1`}>
            <button style={{ backgroundColor: rbgGenerator }} className={` border-2 border-gray-400 h-8 w-8 m-auto rounded-full cursor-pointer  hover:border-orange-400 text-2xl` } onClick={cornerBar} >
                s
            </button>
        </div>
    )
}

export default Userlogo