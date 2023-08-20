import React, { useState } from "react";
import {db} from "./firebase"
import { collection,addDoc} from "firebase/firestore";

function NewProduct(){

    const [productTitle,setTitle] = useState(null);
    const [productImg,setImg] = useState(null);
    const [productPrice,setPrice] = useState(null);
    const [productQty,setQty] = useState(null);

    function getTitle(event){
        setTitle(event.target.value);
    }
    function getImg(event){
        setImg(event.target.value);
    }
    function getPrice(event){
        setPrice(event.target.value);
    }
    function getQty(event){
        setQty(event.target.value);
    }

    function addProduct(){
        if(productImg===null || productPrice===null || productQty===null || productTitle===null) return;
        const prods = collection(db,'products');
    
        addDoc(prods,{
          img:productImg,
          price:productPrice,
          qty:productQty,
          title:productTitle
        });

        setTitle(null);
        setImg(null);
        setPrice(null);
        setQty(null);
      }

    return(
        <div className="newProductForm">
            <h2>ADD NEW PRODUCT TO CART</h2>
            <h4>Enter Product Title : </h4>
            <input
            type="text"
            placeholder="Enter product title..."
            value={productTitle}
            onChange={getTitle}
            />
            <h4>Enter Product Img Address : </h4>
            <input
            type="text"
            placeholder="Enter image address..."
            value={productImg}
            onChange={getImg}
            />
            <h4>Enter Product Price : </h4>
            <input
            type="number"
            placeholder="Enter price of product..."
            value={productPrice}
            onChange={getPrice}
            />
            <h4>Enter Product Quantity : </h4>
            <input
            type="number"
            placeholder="Enter qty..."
            value={productQty}
            onChange={getQty}
            />

            <button className="addProductBtn" onClick={addProduct}>Add Product</button>
        </div>
    );
}

export default NewProduct;