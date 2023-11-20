import React from 'react';
import { useSelector } from 'react-redux';

const Products = () => {
  const product = useSelector((state)=>state.product.data);
  console.log(product);
  return (
    <div>Products</div>
  )
}

export default Products