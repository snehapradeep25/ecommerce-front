import React, { useContext } from "react";
import { ShopContext } from "./ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "./Breadcrum";
import ProductDisplay from "./ProductDisplay";

const Product =()=>{
    const {all_product}=useContext(ShopContext);
    const {productId}=useParams();
    const product =all_product.find((e)=>e.id === Number(productId));
    console.log('Product:', product);

    return(
        <div>
           <Breadcrum product={product}/>
           <ProductDisplay product={product}/>
        </div>
    )
}

export default Product;