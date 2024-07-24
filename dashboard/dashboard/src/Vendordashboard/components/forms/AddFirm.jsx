import React from 'react';

const AddFirm = () => {
  return (
    <div className="firmsection1">
      <form action="" className='tableform1'>
        <h2 className='name-section'>Add Firm</h2>
        <label htmlFor="" className='first-name'>FirmName:</label><br/>
        <input type="text" placeholder='Enter FirstName' /><br />
        
        <label htmlFor="" className='area'>Area:</label><br/>
        <input type="text" placeholder='Enter Area'/><br />
        
        <div className='category'>
          <label htmlFor="" className='category-label'>Category:</label><br/>
          <div className="checkInp checkboxcontainer">
            <div>
              <p>Veg:</p>
              <input type="checkbox" value="veg" className='vegcontainer' name='veg' id='veg'/>
            </div>
            <div>
              <p>Non-Veg:</p>
              <input type="checkbox" value="Non-Veg" className='non-vegcontainer' name='non-veg' id='non-veg'/>
            </div>
          </div>
        </div>
        
        <div className='region'>
          <label htmlFor="" className='region-label'>Region:</label><br/>
          <div className="checkInp checkboxcontainer">
            <div>
              <p>South-Indian:</p>
              <input type="checkbox" value="South-Indian" className='vegcontainer' name='veg' id='south-indian'/>
            </div>
            <div>
              <p>North-Indian:</p>
              <input type="checkbox" value="North-Indian" className='non-vegcontainer' name='non-veg' id='north-indian'/>
            </div>
            <div>
              <p>Chinese:</p>
              <input type="checkbox" value="Chinese" className='non-vegcontainer' name='non-veg' id='chinese'/>
            </div>
            <div>
              <p>Bakery:</p>
              <input type="checkbox" value="Bakery" className='non-vegcontainer' name='non-veg' id='bakery'/>
            </div>
          </div>
        </div>
        
        <label htmlFor="" className='offer'>Offer:</label><br/>
        <input type="text" placeholder='Enter Offer' />
        
        <label htmlFor="" className='firmmage'>FirmImage:</label><br/>
        <input type="file" placeholder='Enter FirmImage' />
        
        <button type="submit" className="btnsubmit">Submit</button>
      </form>
    </div>
  );
};

export default AddFirm;
