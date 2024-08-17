import React, { useContext } from "react";
import './ShopCategory.css'
import { ShopContext } from "./ShopContext";
import dropdown_icon from './Assets/dropdown_icon.png'
import Item from "./Item";
const ShopCategory=(props) => {
   const {all_product} = useContext(ShopContext)
    return (
        <div className="shop-category">
            <img  className='shopcategory-banner' src={props.banner}/>
            <div className="shopcategory-indexSort">
                <p>
                    <span>Show 1-12</span>out of 36 products
                </p>
                
            </div>
            <div className="shopcategory-products">
                {all_product.map((item,i)=>{
                    if(props.category==item.category){
                        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    }
                    else{
                        return null;
                    }
                })}
            </div>
           
                
        </div>
    )
      
    
}
export default ShopCategory;