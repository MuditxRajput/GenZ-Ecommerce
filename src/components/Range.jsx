import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setRange } from '../store/productSlice';
const Range = () => {
    const[value, setValue] = useState(1000);
    const handle=(e)=>{
        setValue(e.target.value);
    }
    const dispatch = useDispatch();
    dispatch(setRange(value));
  return (
    <div>
        <div>${value}</div>
         <input type="range" name="" id="" max={1000} min={1} className='text-black' onChange={handle}  /> 
    </div>
  )
}

export default Range