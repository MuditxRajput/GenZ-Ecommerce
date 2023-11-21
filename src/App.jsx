import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Electronic from './Categories/Electronic';
import Jewelry from './Categories/Jewelry';
import Mens from './Categories/Mens';
import Women from './Categories/Women';
import Home from './Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Products from './Pages/Products';
import Footer from './components/Footer';
import Header from './components/Header';
import SingleProduct from './components/SingleProduct';
import fetchProduct from './service/apiService';
const App = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    fetchProduct();
  },[dispatch])
  return (
      <BrowserRouter>
      <Header/>
        <Routes>
            <Route path='/' element ={<Home/>} />
            <Route path='/about' element ={<About/>} />
            <Route path='/contact' element ={<Contact/>} />
            <Route path='/products' element ={<Products/>} />
            <Route path='/men' element ={<Mens/>} />
            <Route path='/electronic' element ={<Electronic/>} />
            <Route path='/jewllery' element ={<Jewelry/>} />
            <Route path='/women' element ={<Women/>} />
            <Route path='/singleProduct' element ={<SingleProduct/>} />
        </Routes>
      <Footer/>
    </BrowserRouter>
  )
}
export default App