import React from 'react'

function Pagination({handlePrev ,handleNext,pageNo}) {
  return (
    <div className='bg-gray-400 p-2 m-1 flex justify-center rounded-xl '>
        <div onClick={handlePrev}className='px-8 hover:cursor-pointer'><i class="fa-solid fa-arrow-left"></i></div>
        <div className='font-bold'>{pageNo}</div>
        <div onClick={handleNext}className='px-8'><i class="fa-solid fa-arrow-right-long"></i></div>
    </div>
  )
}

export default Pagination