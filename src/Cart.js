//PROPS CONCEPT - these are similar to arguments

import React from "react";
import CartItem from "./CartItem";
// import Navbar from "./Navbar";

const Cart = (props) =>{
        
    // const arr = [1,2,3,4,5];
    const {products} = props;

    return (
        
        <div className="cart">
            {/* <Navbar
                cartSize = {size}
            /> */}
            {/* {arr.map((item) =>{//Adding 5 in every item of the Array
                return item + 5;
            })} */}
            {/* <CartItem qty = {1} price = {99} title = {'Watch'} img={''}/>
            <CartItem/>
            <CartItem/>   */}
            {products.map((product) => {
                return (
                    <CartItem  
                        product = {product} 
                        key={product.id}
                        onIncreaseQuantity = {props.onIncreaseQuantity}
                        onDecreaseQuantity = {props.onDecreaseQuantity}
                        onDelete = {props.onDelete}
                    />
                )
            })}
        </div>
    )
}

export default Cart;