import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 p-1 mb-4'>tailwind test</h1>

      <Card name="Kundan" surname="Sahil"/>
        
      <Card name="Adiya" surname= "Kartik"/>

    </>
  )
}

export default App
