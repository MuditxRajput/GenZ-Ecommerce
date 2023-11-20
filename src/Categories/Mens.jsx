import React from 'react';
import { useSelector } from 'react-redux';
import CategoryProductCard from '../components/CategoryProductCard';
const Mens = () => {
  const menProducts = useSelector((state) => state.product.categories.men);
  const name = {
    name : "Mens Categories"
  }
  // console.log(menProducts);
  return (
    // <div>Mens</div>
    <>
    <CategoryProductCard obj = {menProducts} 
      name ={name}
    />
    
    </>
  )
}

export default Mens