// import React, { useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { setFilter } from '../store/productSlice'
// const Dropdown = ({product}) => {
//     const[selection,setSeletion] = useState()
//      const handle=(e)=>{
//         setSeletion(e.target.value);
//      }
//     const dispatch = useDispatch();
//     dispatch(setFilter(selection));
//   return (
//     <div className='rounded-md border-2 border-black px-2'>
//         <select name='Filter'  value={selection} onChange={handle}>
//             <option>Filter</option>
//             <option name= "Price high to lower">Price high to lower</option>
//             <option name= "Price lower to higher">Price lower to higher</option>
//             <option name= "Sort(a to z)">Sort(a to z)</option>
//             <option name= "Sort(z to a)">Sort(z to a)</option>
//         </select>
//     </div>
//   )
// }

// export default Dropdown
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setFilter } from '../store/productSlice';
// Inside Dropdown component
const Dropdown = ({ product, onFilterChange }) => {
  const [selection, setSelection] = useState();

  const dispatch = useDispatch();
  const handle = (e) => {
      const selectedFilter = e.target.value;
      setSelection(selectedFilter);
      dispatch(setFilter(selectedFilter));
    //   onFilterChange(selectedFilter);
  };
  //kya me yahi pr dispatch kr sakta hu ???


  return (
      <div className='rounded-md border-2 border-black px-2'>
          <select name='Filter' value={selection} onChange={handle}>
              <option>Filter</option>
              <option value="Price high to lower">Price high to lower</option>
              <option value="Price lower to higher">Price lower to higher</option>
              <option value="Sort(a to z)">Sort(a to z)</option>
              <option value="Sort(z to a)">Sort(z to a)</option>
          </select>
      </div>
  );
};

export default Dropdown;