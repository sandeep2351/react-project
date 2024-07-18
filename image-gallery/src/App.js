import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import axios from 'axios';
import Gallery from './Gallery'
import 'bootstrap/dist/css/bootstrap.min.css';

const apikey="636e1481b4f3c446d26b8eb6ebfe7127";
function App() {
  const[search,setSearch]=useState("");
  const[data,setData]=useState([]);
  const changeHandler = e=>{
      setSearch(e.target.value);
  }
  const submitHandler = e=>{
    e.preventDefault();
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apikey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      if (response.data && response.data.photos && response.data.photos.photo) {
        setData(response.data.photos.photo);
      } else {
        console.error("Invalid response format");
      }
    })
    .catch(error => {
      console.error("Error fetching data:", error);
    });
  
    console.log(search);
  }
  return (
    <div className="App">
      
      <form onSubmit={submitHandler}>
        <h1>GALLERY SNAPSHOT</h1>
        <input size="30" className="hello"type="text" value={search} onChange={changeHandler}/><br></br>
        <input className="button"type="submit" name="search"/>
      </form>
      <br></br>
      <br></br>
      {data.length>=1?<Gallery data={data}/>:<h4>No Data Loaded</h4>}
    </div>
  );
}

export default App;
