import React from 'react'
import MoviesCard from './MoviesCard'
import { useEffect } from 'react'
import axios from 'axios'
import {useState} from 'react'
import Pagination from './Pagination'

function Movies({handleAddtoWatchlist ,handleRemoveFromWatchlist,watchlist}) {
  const [movies, setMovies] = useState([])
  const [pageNo , setPageNo] = useState(1)

  const handlePrev=()=>{
    if(pageNo==1){
      setPageNo(1)
    }
    else{
    setPageNo(pageNo-1)
    }
  }

const handleNext=()=>{
  setPageNo(pageNo+1)
}
  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=5fa7878ebc51758b5efdf7b872fe871d&language=en-US&page=${pageNo}`).then(function(res){
      setMovies(res.data.results);
    })
  },[pageNo])
  return (
    <div className="py-5">
    <div className='font-bold m-4 text-center'>Trending Movies</div>
    <div className='flex flex-row flex-wrap justify-between m-3 rounded-xl'>
      {movies.map((movieObj)=>
      {
        return <MoviesCard key={movieObj.id} movieObj={movieObj} poster_path={movieObj.poster_path} name={movieObj.original_title} handleAddtoWatchlist={handleAddtoWatchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist} watchlist={watchlist}/>
      })}
    </div>
    <Pagination pageNo={pageNo} handleNext={handleNext} handlePrev={handlePrev}/>
    </div>
  )
}

export default Movies