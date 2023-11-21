import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryFilter } from '../store/productSlice';
import Range from './Range';
const LeftSideBar = () => {
    
    const categories = useSelector((state)=>state.product.categories);
    console.log(categories);
    const dispatch = useDispatch();
    const handleClick=(val)=>{
        // console.log(val);
            dispatch(setCategoryFilter(val));
    };
  return (
    <div className='flex flex-col justify-evenly'>
        <div className='mt-6'>
        <input type="search" name="" id="" placeholder='Search' className='p-1 border-2 border-black rounded-md'  />
        </div>
        <div className='flex flex-col mt-8'>
            <div className='font-semibold text-xl font-sans cursor-pointer  ' onClick={()=>handleClick("All")}>Categories</div>
            {
                Object.keys(categories).map((val)=>{
                    return(
                        
                        <p  className= ' mb-1 capitalize hover:text-green-400 cursor-pointer hover:font-semibold ' onClick={()=>handleClick(val)}>{val}</p>
                    )
                })
            }
        </div>
        <div className='mt-3'>
            <div className='font-semibold text-lg font-sans'>Price</div>
            <Range/>
            
        </div>
        <div className='mt-3'>
          <button className='rounded-lg bg-green-400 px-4 py-2 text-black font-sans font-semibold'>Clear Filter</button>
        </div>
    </div>
  )
}
export default LeftSideBar;