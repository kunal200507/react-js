import { useState } from 'react'
import './index.css'


function App() {
    let [color, setcolor] = useState("olive")
  // console.log(document.querySelectorAll("button"))
    // const buttons=document.querySelectorAll("button")

    // buttons.forEach(element => {
    // element.addEventListener('click',()=>{
    //   alert("background color : "+element.style.backgroundColor)
    //   document.body.style.backgroundColor=element.style.backgroundColor;
    // });
  // })

  return (
    <div className='h-screen w-full' style={{backgroundColor:color}}>
      <div className='w-20 absolute right-10 top-20 rounded-lg border-transparent h-100 bg-blue-100 flex flex-col justify-around items-center' >
        <button onClick={()=>setcolor("red")} className='w-15 cursor-pointer rounded border-transparent text-white' style={{backgroundColor:"red"}}>red</button>
        <button onClick={()=>setcolor("blue")} className='w-15 cursor-pointer rounded border-transparent text-white ' style={{backgroundColor:"blue"}}>blue</button>
        <button onClick={()=>setcolor("green")} className='w-15 cursor-pointer rounded border-transparent text-white ' style={{backgroundColor:"green"}}>green</button>
        <button onClick={()=>setcolor("orange")} className='w-15 cursor-pointer rounded border-transparent text-white ' style={{backgroundColor:"orange"}}>orange</button>
        <button onClick={()=>setcolor("white")} className='w-15 cursor-pointer rounded border-transparent text-black ' style={{backgroundColor:"white"}}>white</button>
        <button onClick={()=>setcolor("black")} className='w-15 cursor-pointer rounded border-transparent text-white ' style={{backgroundColor:"black"}}>black</button>
      </div>
    </div>
  )
}

export default App
