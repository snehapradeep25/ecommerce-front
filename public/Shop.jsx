import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Popular from "./Popular";
import NewCollections from "./NewCollections";
import all_product from "./Assets/all_product";
import Banner from "./Banner";
import Mainbanner from "./Mainbanner";
import { ShopContext } from "./ShopContext";
import { useParams } from "react-router-dom";

const Products=() => {
    
    return (
        <div>
            <Popular/>
            <Mainbanner/>
            <NewCollections/>
       
                
        </div>
    )
      
    
}
export default Products;