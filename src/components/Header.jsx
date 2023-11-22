import React from 'react';
import { CiSearch } from "react-icons/ci";
import { IoMdCart } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setSearch } from '../store/productSlice';
const Header = () => {
  const dispatch = useDispatch();
  const handle=(e)=>{
        // console.log(e.target.value);
        dispatch(setSearch(e.target.value));
  }
  return (
    <div className='flex justify-between bg-black items-center px-3'>
      <div>
        <h1 className='font-bold text-white text-md sm:text-2xl md:text-3xl lg:text-4xl whitespace-nowrap'>E-Commerce</h1>
      </div>
      <div className='flex gap-2 sm:gap-4 md:gap-6 lg:gap-10 '>
        <NavLink to='/'  className='text-white text-sm sm:text-md md:text-xl'>Home</NavLink>
        <NavLink to='/Products' className='text-white text-sm sm:text-md md:text-xl'>Products</NavLink>
        <NavLink to='/About' className='text-white text-sm sm:text-md md:text-xl'>About</NavLink>
        <NavLink to='/Contact' className='text-white text-sm sm:text-md md:text-xl'>Contact</NavLink>
        
      </div>
      <div className='flex gap-1 sm:gap-2 md:gap-4 lg:gap-6 text-xl justify-center items-center' >
        <input type="search" name="" id="" className='rounded-md border-2 border-black px-2' onChange={handle} />
      <CiSearch className='text-white '  />
        <IoMdCart className='text-white' />
      </div>
    </div>
  )
}

export default Header