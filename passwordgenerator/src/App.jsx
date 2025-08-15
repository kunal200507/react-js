import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numAllowed, setnumAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setpassword] = useState("")
  
  const passRef=useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numAllowed) str = str + "1234567890"
    if (charAllowed) str = str + "!@#$%^&*~`,.'"

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass = pass + str.charAt(char);
    }

    setpassword(pass);
  }
  , [length, numAllowed, charAllowed])

  const copyToClipboard = ()=>{
    passRef.current?.select();
    window.navigator.clipboard.writeText(password)
  }

  useEffect(() => {
    passwordGenerator()
  }, [length, numAllowed, charAllowed])

  return (
    <>
      {/* <div className='min-h-screen flex items-center justify-center bg-gradient-to-r from-yellow-200 via-orange-300 to-red-300 blur-sm'> */}
      <div className='w-full h-screen bg-white/30 relative blur-2xl '></div>
      <div className='w-4xl h-45 bg-black rounded-4xl absolute left-55 top-45 flex flex-col justify-center items-center z-10'>
        <h1 className='text-3xl text-white text-center '>password generator</h1>
        <div className='w-4xl h-15 bg-orange-400 flex flex-row justify-center items-center'>
          <input
            type="text"
            readOnly
            value={password}
            placeholder='password'
            className='bg-[#212121] text-3xl text-white text-center '
          />
          <button 
          className='ml-2 w-15 h-9 bg-[#212121] text-white cursor-pointer '
          onClick={copyToClipboard}
          ref={passRef}
          >
            copy
          </button>
        </div>
        <div className='w-4xl h-15 flex flex-row justify-around items-center'>
          <div className='flex flex-row justify-center items-center'>
            <input
              type="range"
              min={8}
              max={100}
              onChange={(e) => { setlength(e.target.value) }}
            />
            <label className='text-white pl-2' >{length}</label>
          </div>
          <div className='flex flex-row justify-center items-center'>
            <input
              type="checkbox"
              onChange={() => { setnumAllowed((prev) => !prev ) }}
            />
            <label className='text-white pl-2'>Number</label>
          </div>
          <div className='flex flex-row justify-center items-'>
            <input
              type="checkbox"
              onChange={() => { setcharAllowed((prev) =>!prev) }}
            />
            <label className='text-white pl-2'>Special Character</label>
          </div>
        </div>

      </div>
      {/* </div> */}
    </>
  )
}

export default App
