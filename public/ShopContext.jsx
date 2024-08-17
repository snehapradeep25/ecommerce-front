import React, { createContext, useState,useEffect } from "react";
import all_product from "./Assets/all_product";

export const ShopContext = createContext(null);
const getDefaultCart =() =>{
    let cart={};
    for (let index=0; index <all_product.length+1; index++){
        cart[index]=0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const[cartItems,setCartItems] = useState(getDefaultCart());

    useEffect(() => {
        console.log("Cart items changed:", cartItems);
        // Perform any side effects, e.g., saving to local storage
      }, [cartItems]);
   
      const [_, forceUpdate] = useState(0);

      const addToCart = (itemId) => {
        setCartItems((prev) => {
          const updatedCartItems = { ...prev, [itemId]: (prev[itemId] || 0) + 1 };
          console.log(updatedCartItems);
          return updatedCartItems;
        });
      };
      
    
      const removeFromCart = (id) => {
        setCartItems(prevItems => {
          const newItems = { ...prevItems };
          delete newItems[id];
          return newItems;
        });
      };
      const getTotalCartAmount = () => {
        let totalAmount=0;
        for(const item in cartItems){
            if(cartItems[item]>0)
            {
                let itemInfo = all_product.find((product)=>product.id===Number(item))
                totalAmount += itemInfo.new_price*cartItems[item];
            }
            return totalAmount;
        }
      }
    
    
    const contextValue ={all_product,cartItems,addToCart,removeFromCart, getTotalCartAmount};
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;