import { useState } from 'react'
import './index.css'


function App() {
  return (
    <>
      <div className='w-full h-full bg-black flex flex-col justify-center align-middle' >
        <button className='w-15 bg-red-600'>red</button>
        <button className='bg-blue-600'>blue</button>
        <button className='bg-green-600'>green</button>
        <button className='bg-orange-600'>orange</button>
        <button className='bg-white'>white</button>
        <button className='bg-black'>black</button>
      </div>
    </>
  )
}

export default App
