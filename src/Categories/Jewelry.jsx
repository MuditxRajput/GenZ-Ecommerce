import React from 'react'
import { useSelector } from 'react-redux'
import CategoryProductCard from '../components/CategoryProductCard'
const Jewelry = () => {
  const name = {
    name : "Jewelry Categories"
  }
  const jew = useSelector((state)=>state.product.categories.jewelry)
  return (
    <>
    <CategoryProductCard  obj={jew}  name={name} />
    </>
  )
}

export default Jewelry