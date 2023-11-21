import React from 'react';
import { useSelector } from 'react-redux';
import LeftSideBar from '../components/LeftSideBar';
import RightSidebar from '../components/RightSidebar';

const Products = () => {
  const product = useSelector((state)=>state.product.data);
  console.log(product);
  return (
    <div className='flex 00 mx-8 mt-7 justify-around'>
        <div className=''>
         <LeftSideBar/>
        </div>
        <div className=''>
          <RightSidebar/>
        </div>
    </div>
  )
}

export default Products