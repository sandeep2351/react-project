import React, { useEffect,useState } from 'react';

import genreids from '../assets/Resources/genre';

function WatchList({ watchlist,setWatchList,handleRemoveFromWatchlist }) {
  const[search,setSearch]=useState('');
  const[genreList , setGenreList]=useState(["All Genre"])
  const[currGenre , setCurrGenre]=useState('All Genre')
  let handleSearch = (e)=>
    {
        setSearch(e.target.value)
    }

    let handleFilter = (genre)=>{
      setCurrGenre(genre)
    }

  let sortIncreasing = ()=>{
    let sortedIncreasing=watchlist.sort((movieA,movieB)=>{
      return movieA.vote_average-movieB.vote_average
    })

    setWatchList([...sortedIncreasing])
  }
  let sortDecreasing = ()=>{
    let sortedDecreasing=watchlist.sort((movieA,movieB)=>{
      return movieB.vote_average-movieA.vote_average
    })
    setWatchList([...sortedDecreasing])
  }
  useEffect(()=>
  {
      let temp=watchlist.map((movieObj)=>{
        return genreids[movieObj.genre_ids[0]]
      })
      temp=new Set(temp)
      setGenreList(['All Genre' , ...temp])
      console.log(temp)
  } , [watchlist])

  return (
    <>
      <div className='flex justify-center flex-wrap mx-4'>
        {genreList.map((genre)=>{
        return <div onClick={()=>handleFilter(genre)} className={currGenre==genre?'flex justify-center items-center bg-blue-400 h-[2.2rem] w-[6rem] rounded-xl text-black font-bold m-4' : 'flex justify-center items-center bg-gray-400/60 h-[2.2rem] w-[6rem] rounded-xl text-white font-bold  m-4' }>{genre}</div>
      })}
      </div>
      <div className='flex justify-center my-4 '>
        <input onChange={handleSearch} value={search} type="text" placeholder='Search Movies' className='h-[2.2rem] w-[14rem] bg-gray-200 outline-none px-4 rounded-xl'/>
      </div>
      <div className='overflow-hidden rounded-lg border border-gray m-5 '>
        <table className='w-full text-black-200 text-center '>
          <thead className='border-b-2'>
            <tr>
              <th>Name</th>
              <th className='flex justify-center'>
              <div onClick={sortIncreasing}className='p-2'><i class="fa-solid fa-arrow-up"></i></div>
              <div className='p-2'>Ratings</div>
              <div onClick={sortDecreasing} className='p-2'><i class="fa-solid fa-arrow-down"></i></div>
              </th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {watchlist.filter((movieObj)=>{
                if(currGenre=='All Genre'){
                  return true
                }
                else{
                  return genreids[movieObj.genre_ids[0]]==currGenre;
                }
            }).filter((movieObj)=>
            {
              return movieObj.title.toLowerCase().includes(search.toLocaleLowerCase());

            }).map((movieObj, index) => (
              <tr key={index} className='border-b-2'>
                <td className='flex items-center px-6 py-4'>
                  <img className='h-[6rem] w-[10rem]' src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`} alt={`${movieObj.title} poster`} />
                  <div className='px-20'>{movieObj.title}</div>
                </td>
                <td>{movieObj.vote_average}</td>
                <td>{movieObj.popularity}</td>
                <td>{genreids[movieObj.genre_ids[0]]}</td>
                <td onClick={()=>handleRemoveFromWatchlist(movieObj)} className='text-red-800 m-5 '>Delete</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
