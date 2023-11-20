import React from 'react';
import { IoStar, IoStarHalfOutline, IoStarOutline } from "react-icons/io5";
const Star = ({star}) => {
    const starRating = Array.from({length:5},(elem,index)=>
    {
        const number = index+0.5;
        return(
            <>
            {star>=index+1 ? <IoStar/> : star>=number?<IoStarHalfOutline/> : <IoStarOutline/> }
            </>
        )
    }
    )
  return (
    <div className='flex text-yellow-500 text-lg'>
        {starRating}
    </div>
  )
}

export default Star