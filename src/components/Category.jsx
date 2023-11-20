import React from 'react'
import jew from '../Jewellery.jpg'
// import men from '../Mens.jpg'
import { NavLink } from 'react-router-dom'
import Men from '../Men.jpg'
import watch from '../Watch.jpg'
import women from '../women.jpg'
const Category = () => {
  return (
    <div className=' w-full   '>
        <div className='flex justify-center items-center text-5xl mb-7 font-semibold'>Categories</div>
        <div className='flex justify-between mx-3 gap-2 md:mx-32'>
            <NavLink to='/men'>

            <div className=' relative '>
                <img src={Men} className =' w-40 h-52 overflow-hidden rounded-md border-2 border-black'alt="" />
                <p className=' absolute top-40 right-0 left-0 bottom-0 flex items-center justify-center text-black font-serif font-bold'>Mens </p>
            </div>
            </NavLink>
            <NavLink to='/electronic'>
            <div className=' relative '>
                <img src={watch} className =' w-40 h-52 overflow-hidden rounded-md border-2 border-black'alt="" />
                <p className=' absolute top-40 right-0 left-0 bottom-0 flex items-center justify-center text-black font-serif font-bold whitespace-nowrap'>Watch </p>
            </div>
            </NavLink>
            <NavLink to='/jewllery'>
            <div className=' relative '>
                <img src={jew} className =' w-40 h-52 overflow-hidden rounded-md border-2 border-black'alt="" />
                <p className=' absolute top-40 right-0 left-0 bottom-0 flex items-center justify-center text-black font-serif font-bold whitespace-nowrap'>jewellery </p>
            </div>
            </NavLink>
            <NavLink to='/women'>
            <div className=' relative '>
                <img src={women} className =' w-40 h-52 overflow-hidden rounded-md border-2 border-black'alt="" />
                <p className=' absolute top-40 right-0 left-0 bottom-0 flex items-center justify-center text-black font-serif font-bold'>Women </p>
            </div>
            </NavLink>
            {/* <div className=''><img src={watch}  className =' w-40 h-52 overflow-hidden rounded-md border-2 border-black' alt="" /></div>
            <div className=''><img src={jew} className =' w-40 h-52 overflow-hidden rounded-md border-2 border-black'  alt="" /></div>
            <div className=''><img src={women}  className ='w-40 h-52 overflow-hidden rounded-md border-2 border-black' alt="" /></div> */}
        </div>
               
    </div>
  )
}

export default Category