import React, { useState } from 'react';
import { API_URL } from '../../helpers/ApiPath';

const AddFirm = () => {
  const [firmName, setFirmName] = useState("");
  const [area, setArea] = useState("");
  const [category, setCategory] = useState([]);
  const [region, setRegion] = useState([]);
  const [offer, setOffer] = useState("");
  const [image, setImage] = useState(null);

  const handleCategoryChange = (event) => {
    const value = event.target.value;
    if (category.includes(value)) {
      setCategory(category.filter((item) => item !== value));
    } else {
      setCategory([...category, value]);
    }
  };

  const handleRegionChange = (event) => {
    const value = event.target.value;
    if (region.includes(value)) {
      setRegion(region.filter((item) => item !== value));
    } else {
      setRegion([...region, value]);
    }
  };

  const handleImageUpload = (event) => {
    const selectedImage = event.target.files[0];
    setImage(selectedImage);
  };

  const handleFirmSubmit = async (e) => {
    e.preventDefault();
    try {
      const loginToken = localStorage.getItem('logintoken');
      console.log(loginToken)
      if (!loginToken) {
        console.error("User not authenticated");
        return; 
      }

      const formData = new FormData();
      formData.append('firmName', firmName);
      formData.append('area', area);
      formData.append('offer', offer);

      category.forEach((value) => {
        formData.append('category', value);
      });

      region.forEach((value) => {
        formData.append('region', value);
      });

      const response = await fetch(`${API_URL}/firm/add-firm`, {
        method: "POST",
        headers: {
          'token': `${loginToken}`
        },
        body: formData
      });

      const data = await response.json();
      if (response.ok) {
        console.log(data);
        alert('Firm added successfully');
      } else {
        console.error('Failed to add firm:', data.error || 'Unknown error');
        alert('Failed to add firm')
      }
    } catch (error) {
      console.error('Failed to add firm:', error);
    }
  };

  return (
    <div className="firmsection1">
      <form action="" className='tableform1' onSubmit={handleFirmSubmit}>
        <h2 className='name-section'>Add Firm</h2>
        <label htmlFor="" className='first-name'>FirmName:</label><br />
        <input type="text" placeholder='Enter FirstName' name='firmName' value={firmName} onChange={(e) => setFirmName(e.target.value)} /><br />

        <label htmlFor="" className='area'>Area:</label><br />
        <input type="text" placeholder='Enter Area' name='area' value={area} onChange={(e) => setArea(e.target.value)} /><br />

        <div className='category'>
          <label htmlFor="" className='category-label'>Category:</label><br />
          <div className="checkInp checkboxcontainer">
            <div>
              <p>Veg:</p>
              <input type="checkbox" checked={category.includes('veg')} value="veg" onChange={handleCategoryChange} className='vegcontainer' name='veg' id='veg' />
            </div>
            <div>
              <p>Non-Veg:</p>
              <input type="checkbox" checked={category.includes('non-veg')} value="non-veg" className='non-vegcontainer' onChange={handleCategoryChange} name='non-veg' id='non-veg' />
            </div>
          </div>
        </div>

        <div className='region'>
          <label htmlFor="" className='region-label'>Region:</label><br />
          <div className="checkInp checkboxcontainer">
            <div>
              <p>South-Indian:</p>
              <input type="checkbox" checked={region.includes('south-indian')} value="south-indian" onChange={handleRegionChange} className='vegcontainer' name='veg' id='south-indian' />
            </div>
            <div>
              <p>North-Indian:</p>
              <input type="checkbox" checked={region.includes('north-indian')} value="north-indian" className='non-vegcontainer' onChange={handleRegionChange} name='non-veg' id='north-indian' />
            </div>
            <div>
              <p>Chinese:</p>
              <input type="checkbox" value="chinese" checked={region.includes('chinese')} className='non-vegcontainer' onChange={handleRegionChange} name='non-veg' id='chinese' />
            </div>
            <div>
              <p>Bakery:</p>
              <input type="checkbox" value="Bakery" checked={region.includes('Bakery')} className='non-vegcontainer' onChange={handleRegionChange} name='non-veg' id='bakery' />
            </div>
          </div>
        </div>

        <label htmlFor="" className='offer'>Offer:</label><br />
        <input type="text" name='offer' placeholder='Enter Offer' value={offer} onChange={(e) => setOffer(e.target.value)} />

        <label htmlFor="" className='firmmage'>FirmImage:</label><br />
        <input type="file" placeholder='Enter FirmImage' onChange={handleImageUpload} />

        <button type="submit" className="btnsubmit">Submit</button>
      </form>
    </div>
  );
};

export default AddFirm;
