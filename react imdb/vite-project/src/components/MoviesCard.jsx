import React from "react";

function MoviesCard({
  movieObj,
  poster_path,
  name,
  handleAddtoWatchlist,
  handleRemoveFromWatchlist,
  watchlist,
}) {
  function doesContain(movieObj) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id == movieObj.id) {
        return true
      }
    }
    return false
  }
  return (
    <div
      className="h-[50vh] w-[160px] bg-cover bg-center m-5 rounded-xl flex flex-col  justify-between items-end hover:scale-110 duration-300 hover:cursor-pointer"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      {doesContain(movieObj) ? (
        <div
          onClick={() => {
            handleRemoveFromWatchlist(movieObj);
          }}
          className="flex justify-center m-4 h-8 w-8 items-center rounded-lg bg-gray-900/60 p-1 hover:cursor-pointer">
          &#10060;
        </div>
      ) : (
        <div
          onClick={() => {
            handleAddtoWatchlist(movieObj);
          }}
          className="flex justify-center m-4 h-8 w-8 items-center rounded-lg bg-gray-900/60 p-1 hover:cursor-pointer">
         &#129392;
        </div>
      )}
      <div className="text-white w-full text-center text-xl p-2   bg-gray-900/60">
        {name}
      </div>
    </div>
  );
}

export default MoviesCard;
