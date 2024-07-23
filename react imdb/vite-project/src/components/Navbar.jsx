import React from 'react'
import Logo from '../movielogo.png'
import{ Link} from'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex border space-x-5 items-center pl-2 py-1 '>
        <a href='/'><img src={Logo} className='w-[40px]'/></a>
        <Link to="/" className='text-blue-600 text-0.1xl font-bold'>Movies</Link>
    <Link to="/watchlist" className='text-blue-600 text-0.1xl font-bold'>Watchlist</Link>
    </div>
  )
}

export default Navbar
