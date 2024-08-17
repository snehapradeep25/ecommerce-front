import React, { useContext,useState,useEffect } from "react";
import './Category.css'
import { ShopContext } from "./ShopContext";
import dropdown_icon from './Assets/dropdown_icon.png';
import Item from './Item';
import all_product from "./Assets/all_product";

const Category = ({category})=>  {
    const {all_products}=useContext(ShopContext);
    const[loading,setLoading]=useState(true);

    useEffect(()=> {
        if (Array.isArray(all_product)) {
            setLoading(false);
        }
    },[all_product]);
    if(loading){
        return <div>loading.</div>
    }
    if (!all_product || !Array.isArray(all_product)) {
        return <div>No products available.</div>;
      }
    
      const filteredProducts = all_product.filter(item => item.category === category);
    

    return (
        <div className="category">
<div className="category-indexSort">
    <p>
        <span>Showing 1-12</span>out of 36 products
    </p>
    <div className="category-sort">
        Sort by <img src={dropdown_icon}/>
    </div>
</div>
<div className="category-products">
    {all_products.map((item,i)=>{
        if(category==item.category){
return(
<Item 
key={i} 
id={item.id} 
name={item.name} 
image={item.image} 
new_price={item.new_price} 
old_price={item.old_price}/>
 );}
 else{
    return null;
 } })}
</div>


        </div>
    );
};

export default Category;