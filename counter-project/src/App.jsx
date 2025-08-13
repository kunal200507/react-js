import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [count, setcount] = useState(15)

  // let count = 15
  function increase(){
    if(count>=20){
      count=20;
    }else{
      setcount(count+1)
      console.log("hello "+Math.random()+" "+count)
    }
    //count = count+1
    // setcount(count)
    
  }

  function decrease(){
    if (count<=0) {
      count=0;
    }else{
      setcount(count-1)
    }
    
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={increase} >count increase</button>
      <button onClick={decrease}>count decrease</button>
    </>
  )
}

export default App
