import { useState,useCallback,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[length,setLength]=useState(8);
  const[numbersallowed,setNumbersallowed]=useState(false)
  const[symbolallowed,setSymbolallowed]=useState(false)
  const[password,setPassword]=useState('')

  const passwordref=useRef(null)

  const generatepassword =useCallback(()=>{
let pass=""
let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

if(numbersallowed) str +="0123456789"
if(symbolallowed) str+="!@#$%^&*()_+"

    for(let i=1;i<length;i++){
      const char =Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char)
    }
      setPassword(pass)  },[length,numbersallowed,symbolallowed])


  const copypasswordtoclipboard=()=>{
    window.navigator.clipboard.writeText(password)
    alert("password is copied")
    passwordref.current?.select()
    //passwordref.current?.setSelectionRange(0,100)
  }

  useEffect(()=>{
    generatepassword()
  },[length,numbersallowed,symbolallowed])

  return (
   <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
    <h1 className='text-white text-center my-3'>Password Generator</h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text"value={password} className='outline-none bg-gray-800 text-white px-4 py-2 flex-1' placeholder='password' readOnly ref={passwordref} />
        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copypasswordtoclipboard}>copy</button>
    </div>
    <div className='flex text-sm gap-x-2'>
    <div className='flex items-center gap-x-1'>
      <input type="range" min={8} max={100} value={length} className='cursor-pointer' onChange={(e)=>setLength(e.target.value)} name="" id="" />
      <label htmlFor="length">Length:{length}</label>
    </div>
    <div className='flex items-center gap-x-1'>
      <input type="checkbox" defaultChecked={numbersallowed} onChange={()=>{setNumbersallowed((prev)=>!prev)}} name="" id="" />
      <label htmlFor="number">Numbers</label>
    </div>
    <div className='flex items-center gap-x-1'>
      <input type="checkbox" defaultChecked={symbolallowed} onChange={()=>{setSymbolallowed((prev)=>!prev)}} name="" id="" />
      <label htmlFor="charcaters">Characters</label>
    </div>

    </div>
   </div>
  )
}

export default App
