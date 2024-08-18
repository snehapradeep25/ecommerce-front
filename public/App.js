import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch, BrowserRouter, Routes, Link } from 'react-router-dom';
import ShopCategory from './pages/ShopCategory';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import Product from './pages/Product';
import Login from './pages/Login';
import Register from './pages/Register';
import Checkout from './pages/Checkout';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import mb1 from './pages/images/banners/mb1.jpg';
import wb1 from './pages/images/banners/wb1.jpg';
import kb2 from './pages/images/banners/kb2.jpg';
import Banner from './pages/Banner';


import { ShopContext } from './pages/ShopContext';
import ProductDisplay from './pages/ProductDisplay';
import Home from './pages/Home';
import NewCollections from './pages/NewCollections';
import Popular from './pages/Popular';
import Orders from './pages/Orders';
function App() {
  return (
    <>
   <Router>

<Navbar/>


    <Routes>
    <Route path ='/' element ={<Home/>}></Route>
    <Route path ='/Home' element ={<Home/>}></Route>
    <Route path ='/Login' element ={<Login/>}></Route>
    <Route path ='/Register' element ={<Register/>}></Route>
    <Route path ='/Checkout' element ={<Checkout/>}></Route>
   <Route path ='/Shop' element ={<Shop/>}></Route>
   <Route path ='/Contact' element ={<Contact/>}></Route>
   <Route path ='/mens' element ={<ShopCategory banner={mb1} category='men'/>}></Route>
   <Route path ='/womens' element ={<ShopCategory banner={wb1} category='women'/>}></Route>
   <Route path ='/kids' element ={<ShopCategory banner={kb2} category='kid'/>}></Route>
   <Route path ='/Product' element ={<Product/>}></Route>
   <Route path='/product/:productId' element={<Product/>}></Route>
   <Route path='/cart' element={<Cart/>}></Route>
   <Route path='/ADD TO CART' element={<Cart/>}></Route>
   <Route path='/NewCollections' element={<NewCollections/>}></Route>
   <Route path='/Popular' element={<Popular/>}></Route>
   <Route path='/Orders' element={<Orders/>}></Route>
   
    </Routes>
   
   
<Footer/>
   </Router>
      </>
  );
}
export default App;

