import React from 'react'

const AddProducts = () => {
  return (
    <div className="productsection">
        <form action="" className="productform">
        <h2>Add Product</h2>
                <label htmlFor="">Product Name:</label><br/>
                <input type="text"  placeholder="Enter your product name"/>
                <label htmlFor="">Price:</label><br/>
                <input type="text"  placeholder="Enter Price"/>
                <label htmlFor="">Category:</label><br/>
                <input type="text" placeholder='Enter Caategory' />
                <label htmlFor="">Bestseller:</label><br/>
                <input type="text"  placeholder='Enter Bestseller'/>
                <label htmlFor="">Description:</label><br/>
                <input type="text"  placeholder='Enter Description'/>
                <label htmlFor="">Product Image:</label><br/>
                <input type="file" />
            <button type="submit" className="btnsubmit">Submit</button>
        </form>
    </div>
  )
}

export default AddProducts