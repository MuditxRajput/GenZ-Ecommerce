// import React from 'react';
import { FaListUl } from "react-icons/fa";
import { FiGrid } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../store/productSlice';
import CardLoop from './CardLoop';
import Dropdown from './Dropdown';

const RightSidebar = () => {
    const product = useSelector((state) => state.product.data);
    const range = useSelector((state) => state.product.range);
    const filterName = useSelector((state) => state.product.filter);
    const categoryFilter = useSelector((state) => state.product.categoryFilter);
  
    let value =
      categoryFilter === 'men'
        ? "men's clothing"
        : categoryFilter === 'women'
        ? "women's clothing"
        : categoryFilter === 'electronics'
        ? 'electronics'
        : categoryFilter === 'jewelry'
        ? 'jewelry'
        : 'All';
  
    const filteredProduct =
      categoryFilter && categoryFilter !== 'All'
        ? product.filter((product) => product.category === value)
        : product;
  
        const rangedProduct = filteredProduct.filter(
          (product) => product.price <= range
        );
        console.log('Range:', range);
    
        console.log('Before Price Filter:', filteredProduct);
    console.log('After Price Filter:', rangedProduct);
    
    if (filterName === 'Price high to lower') {
      rangedProduct.sort((a, b) => b.price - a.price);
    } else if (filterName === 'Price lower to higher') {
      rangedProduct.sort((a, b) => a.price - b.price);
    } else if (filterName === 'Sort(a to z)') {
      rangedProduct.sort((a, b) => a.title.localeCompare(b.title));
    } else if (filterName === 'Sort(z to a)') {
      rangedProduct.sort((a, b) => b.title.localeCompare(a.title));
    }
    const dispatch = useDispatch();
    console.log(rangedProduct);
    
    const handleFilterChange = (selectedFilter) => {
      dispatch(setFilter(selectedFilter));
    };
        console.log('Before Price Filter:', filteredProduct);
        console.log('After Price Filter:', rangedProduct);
        return (
          <div>
            <div className='flex justify-between '>
              <div className='flex'>
                <FiGrid />
                <FaListUl />
              </div>
              <div>
                Number of products : <span>{rangedProduct.length}</span>
              </div>
              <div>
                <Dropdown product={rangedProduct} onFilterChange={handleFilterChange} />
              </div>
            </div>
            <div className='grid grid-cols-3 w-[990px] p-2 gap-3'>
              <CardLoop product={rangedProduct} />
            </div>
          </div>
        );
      };
      
      export default RightSidebar;