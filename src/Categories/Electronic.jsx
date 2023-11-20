import React from 'react';
import { useSelector } from 'react-redux';
import CategoryProductCard from '../components/CategoryProductCard';
const Electronic = () => {
  const electronic = useSelector((state)=>state.product.categories.electronics)
  // console.log(electronic);
  const name = {
    name : "Electronic Categories"
  }
  return (
    <>
    <CategoryProductCard obj ={electronic} name ={name} />
    </>
  )
}

export default Electronic