// productSlice.js
import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'products',
  initialState: { data: [], categories: {},selectedProduct :null,categoryFilter: 'All',range:0,filter:null },
  reducers: {
    setProducts: (state, action) => {
      state.data = action.payload;
      state.categories = classifyProductsByCategory(action.payload);
    },
    setSelectedProduct : (state,action)=>{
      state.selectedProduct = action.payload
    },
    setCategoryFilter:(state,action)=>{
      state.categoryFilter = action.payload;
    },
    setRange:(state,action)=>{
      state.range = action.payload
    },
    setFilter: (state,action)=>{
      state.filter = action.payload;
    }
  },
});

const classifyProductsByCategory = (products) => {
  const categories = {
    men: [],
    women: [],
    electronics: [],
    jewelry: [],
  };

  products.forEach((product) => {
    switch (product.category) {
      case "men's clothing":
        categories.men.push(product);
        break;
      case "women's clothing":
        categories.women.push(product);
        break;
      case 'electronics':
        categories.electronics.push(product);
        break;
      case 'jewelery':
        categories.jewelry.push(product);
        break;
      default:
        break;
    }
  });

  return categories;
};

export const { setProducts,setSelectedProduct,setCategoryFilter,setRange ,setFilter} = productSlice.actions;
export default productSlice.reducer;
