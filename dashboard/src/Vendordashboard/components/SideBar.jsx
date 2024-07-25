import React from 'react'

const SideBar = ({showfirmhandler,showproducthandler}) => {
  return (
    <div className="sidebar">
        <ul>
            <li onClick={showfirmhandler}>Add Firm</li>
            <li onClick={showproducthandler}>Add Products</li>
            <li>All Products</li>
            <li>User Details</li>
        </ul>

    </div>
  )
}

export default SideBar