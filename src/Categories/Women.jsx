import React from 'react';
import { useSelector } from 'react-redux';
import CategoryProductCard from '../components/CategoryProductCard';
const Women = () => {
  const women = useSelector((state)=>state.product.categories.women);
  const name = {
    name : "Women's Categories"
  }
  return (
    <>
    <CategoryProductCard obj ={women} name={name}  />
    </>
  )
}

export default Women