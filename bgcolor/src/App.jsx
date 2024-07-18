import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')
  function changecolor(color){
      setColor(color);
  }

  return (
    <div className='w-full h-screen duration-200 bg-black' style={{backgroundColor:color}}>
        <div className=' fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button  onClick={()=>{setColor('red')}}className='outline-none px-4 py-1 rounded-full text-white shadow-lg text-black'style={{backgroundColor:'red'}}>Red</button>
            <button onClick={()=>{setColor('black')}}className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{backgroundColor:'black'}}>black</button>
          </div>
        </div>
    </div>
  )
}

export default App
