import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import WatchList from "./components/WatchList";
import Banner from "./components/Banner";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [watchlist, setWatchList] = useState([]);
  const handleAddtoWatchlist = (movieObj) => {
    const newWatchList = [...watchlist, movieObj];
    localStorage.setItem('moviesApp',JSON.stringify(newWatchList))
    setWatchList(newWatchList);
    console.log(newWatchList);
  };

  const handleRemoveFromWatchlist = (movieObj) => {
    const filteredWatchlist = watchlist.filter((movie) => movie.id !== movieObj.id);
    setWatchList(filteredWatchlist);
    localStorage.setItem('moviesApp',JSON.stringify(filteredWatchlist))
    console.log(filteredWatchlist);
  };

    useEffect(()=>{
      let moviesFromLocalStorage =  localStorage.getItem('moviesApp')
      if(!moviesFromLocalStorage){
        return
      }
      setWatchList(JSON.parse(moviesFromLocalStorage))
    }, [] )

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                {/* Pass the watchlist and functions to Movies component */}
                <Movies
                  watchlist={watchlist}
                  handleAddtoWatchlist={handleAddtoWatchlist}
                  handleRemoveFromWatchlist={handleRemoveFromWatchlist}
                />
              </>
            }
          />
          {/* Pass the watchlist to WatchList component */}
          <Route path="/watchlist" element={<WatchList watchlist={watchlist} setWatchList={setWatchList} handleRemoveFromWatchlist={handleRemoveFromWatchlist} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
