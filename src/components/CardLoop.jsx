import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setSelectedProduct } from '../store/productSlice';
const CardLoop = ({product}) => {
    const dispatch = useDispatch();
    const handleClick=(val)=>{
        dispatch(setSelectedProduct(val))
    }
    // console.log(product);
  return (
    product?.map((product)=>(
        <div key={product.id} className='bg-white  rounded-md shadow-md shadow-black flex flex-col justify-center items-center'>
        <div className=' flex justify-center w-full h-52  '>
        <img src={product.image} alt={product.title} className='h-52 object-cover mb-4 rounded-md' />
        
        </div>
        <div className=' w-full mt-3 mb-3 h-16 flex flex-col justify-around'>
        <h3 className='text-MD font-semibold'>{product.title}</h3>
        <p className='text-gray-600'>${product.price}</p>
        </div>
        <NavLink to='/singleProduct'>
        <button className='mt-2 mb-2 bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-700' onClick={()=>handleClick(product)}>
          View Details
        </button>
        </NavLink>
        
      </div>
    ))
    
  )
}

export default CardLoop