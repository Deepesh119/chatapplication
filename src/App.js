import React from 'react';
import Navbar from './components/navbar';
import Navbarthree from './components/navbarthree';
import Navbartwo from './components/navbartwo';
import Bottom from './components/bottom'
import Category from './components/category';
import ProductList from './components/product_list';
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import ProductDetails from './components/product_details'; 

const App = () => {
  return (
  <Routes>
    <Route path="/" element={<Ecom />} />
    <Route path="/details/:productId" element={<ProductDetails />} />
    <Route element={<Ecom />} />
  </Routes>);
}

const Ecom = ()=>{
  return (
    <>
       <Navbar/>
      <Navbartwo/>
      <Navbarthree/> 
      <Category/>
      <ProductList/>
       <Bottom/> 
        
    
    </>
  )
}

export default App

