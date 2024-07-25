import React from 'react'

const NavBar = ({showloginhandler,showregisterhandler}) => {
  return (
    <div className="navsection">
      <div className="company">
         Vendor DashBoard
      </div>
      <div className="userauth">
      <span onClick={showloginhandler}>Login /</span>
      <span onClick={showregisterhandler}>Register</span>

      </div>
    </div>
  )
}

export default NavBar