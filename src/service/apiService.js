import axios from "axios";
import { setProducts } from "../store/productSlice";
import store from "../store/store";
const apiService=async()=>{
    try {
        const res = await axios('https://fakestoreapi.com/products');
        store.dispatch(setProducts(res.data));
        
    } catch (error) {
        console.log('Error in fetching the data');
    }
}
export default apiService;