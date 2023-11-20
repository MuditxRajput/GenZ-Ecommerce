import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setSelectedProduct } from '../store/productSlice';
const CategoryProductCard = ({ obj, name }) => {
    const dispatch = useDispatch();
    const handleClick=(val)=>{
        dispatch(setSelectedProduct(val))
    }
  return (
    <div className='flex flex-col justify-center mt-6'>
      <h2 className='flex justify-center items-center font-sans text-2xl text-white bg-gray-800 py-2 rounded-md'>
        {name.name}
      </h2>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-4'>
        {obj?.map((val) => (
          <div key={val.id} className='bg-white p-4 rounded-md shadow-md shadow-black flex flex-col justify-center items-center'>
            <div className=' b flex justify-center w-full h-52  '>
            <img src={val.image} alt={val.title} className='h-52 object-cover mb-4 rounded-md' />
            
            </div>
            <div className=' w-full mt-3 mb-3 h-16 flex flex-col justify-around'>
            <h3 className='text-MD font-semibold'>{val.title}</h3>
            <p className='text-gray-600'>{val.price} $</p>
            </div>
            <NavLink to='/singleProduct'>
            <button className='mt-2 bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-700' onClick={()=>handleClick(val)}>
              View Details
            </button>
            </NavLink>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryProductCard;
