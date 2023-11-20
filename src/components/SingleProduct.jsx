import React, { useState } from 'react';
import { FiPlus } from "react-icons/fi";
import { LuMinus } from "react-icons/lu";
import { useSelector } from 'react-redux';
import Star from './Star';
const SingleProduct = () => {
  const singleProduct = useSelector((state)=>state.product.selectedProduct)
  // console.log(singleProduct);
  // let count = 1;
  const[count,setCount] = useState(1);
  const handlePointDec=()=>{
    if(count>1)
    {

      setCount((val)=>val-1);
    }
  }
  const handlePointInc=()=>{
    setCount((val)=>val+1)
  }
  return (
    <div className='flex flex-col md:flex-row justify-around mt-10'>
      <div className=' flex justify-center items-center'>
        <img src={singleProduct.image} alt="" className='w-[200px]' />
      </div>
      <div className=' p-2 w-[600px]'>
        <div className=' font-serif text-3xl '>{singleProduct.title}</div>
        <div><Star star ={singleProduct.rating.rate} /></div>
        <div>{singleProduct.description}</div>
        <div className='bg-green-200 p-1 h-16 mt-1
         flex flex-col'>
          <p className='text-lg font-semibold'>${singleProduct.price}</p>
          <p className=' font-thin'>count: {singleProduct.rating.count}</p>
          </div>
          <div className='flex mt-3  '>
            <div className=' font-bold  text-lg w-9 flex justify-center items-center'>

              <LuMinus  onClick={handlePointDec}/>
            </div>
            <div className=' text-lg flex justify-center w-10 items-center'>
              {count}
            </div>
            <div onClick={handlePointInc} className=' text-lg  flex justify-center items-center w-9'>
              <FiPlus/>
            </div>
          </div>
          <div>
          <button className='mt-2 bg-green-500 text-white px-3 py-1 rounded-md hover:bg-blue-700' >
             Add To Cart
            </button>
          </div>

      </div>
    </div>
  )
}

export default SingleProduct