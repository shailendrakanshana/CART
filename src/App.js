import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
import NewProduct from "./NewProduct";
import {db} from "./firebase"
import { collection, getDoc,onSnapshot, getDocs, addDoc, doc, updateDoc, deleteDoc } from "firebase/firestore";

class App extends React.Component{
  constructor (){
    super();
    this.state = {
      products : [],
      loading :true
        // products:[
        //     {
        //         price:99,
        //         title:'Smart Watch',
        //         qty:1,
        //         img:'https://images.unsplash.com/photo-1544117519-31a4b719223d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c21hcnQlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
        //         id:1
        //     },
        //     {
        //         price:999,
        //         title:'Mobile Phone',
        //         qty:1,
        //         img:'https://images.unsplash.com/photo-1580910051074-3eb694886505?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        //         id:2
        //     },
        //     {
        //         price:1599,
        //         title:'Laptop',
        //         qty:1,
        //         img:'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        //         id:3
        //     },
        //     {
        //         price:199,
        //         title:'Bluetooth Speaker',
        //         qty:1,
        //         img:'https://images.unsplash.com/photo-1582978571763-2d039e56f0c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ymx1ZXRvb3RoJTIwc3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
        //         id:4
        //     },
        //     {
        //         price:19,
        //         title:'Water Bottle',
        //         qty:1,
        //         img:'https://images.unsplash.com/photo-1544003484-3cd181d17917?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdhdGVyJTIwYm90dGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        //         id:5
        //     }
        // ]
    }

    // this.increaseQuantity = this.increaseQuantity.bind(this);
  }

  //Using componentDidMount method which runs just after the component is rendered
  componentDidMount() {
    //TO DO
    const prods = collection(db,'products');
    
    onSnapshot(prods,(snapshot) =>{
      const products = snapshot.docs.map((doc) =>{
        const data = doc.data();

        data['id'] = doc.id;
        return data;
      });

      this.setState({
        products:products,
        loading:false
      });
    })
    
  }

  handleIncreaseQuantity = (product) =>{
      // console.log("INcrease Quantity of" ,product);
      //THIS CODE IS FOR STATE ONLY
      const{products} = this.state;
      // //Finding index
      const index = products.indexOf(product);
      // products[index].qty += 1;

      // this.setState({
      //     products:products
      // });

      //Code for Firebase update code
      const docRef = doc(db,'products',products[index].id);

      updateDoc(docRef,{
        qty:Number(products[index].qty)+1
      });
  }

  handleDecreaseQuantity = (product) =>{
      // console.log("Decrease Quantity of" ,product);

      const{products} = this.state;
      //Finding index
      const index = products.indexOf(product);
      //THIS CODE IS ONLY FOR STATE UPDATE
      // if(products[index].qty==0) return;

      // products[index].qty -= 1;

      // this.setState({
      //     products:products
      // });

      //Code for Fireabse update 
      if(products[index].qty==0) return;

      const docRef = doc(db,'products',products[index].id);
      if(products[index].qty===1){
        this.handleDelete(products[index]);
        return;
      }

      updateDoc(docRef,{
        qty : products[index].qty-1
      });
  }

  handleDelete = (product) =>{
      console.log("Delete Functionality", product);

      const{products} = this.state;
      if(products.length==0) return;

      const index = products.indexOf(product);

      //THIS CODE IS ONLY FOR STATE
      // products.splice(index,1);

      // this.setState({
      //     products:products,
      //     // size:products.length
      // });
      
      //We can also do this
      // const items = products.filter((item) => item.id!==id);
      // this.setState({products:items});

      //This code is for firebase updation
      const docRef = doc(db,'products',products[index].id);

      deleteDoc(docRef);
  }

  getCount = () =>{
    const{products} = this.state;

    let count = 0;
    products.forEach((product) =>{
      count = count + Number(product.qty);
    })

    return count;
  }

  getTotalPrice =() =>{
    const{products} = this.state;
    let sum = 0;
    products.forEach((product)=>{
      sum = sum + (product.price*product.qty);
    });

    return sum;
  }

  addProduct = () =>{
    const prods = collection(db,'products');

    addDoc(prods,{
      img:'https://media.istockphoto.com/id/1137138120/photo/photo-of-white-washing-machine-with-soft-and-fresh-bright-towels-on-top-standing-isolated.webp?b=1&s=170667a&w=0&k=20&c=ACytnXYxJiLRV4YMy1KyaUI_wOaRDK1g1Rg1upl3C4U=',
      price:900,
      qty:1,
      title:'Washing Machine'
    });
  }

  render(){
    const{products,loading} = this.state;
    
    return (
      <div className="App">
        <Navbar
          cartSize = {this.getCount()}
        />
        <div className="mainScreen">
          <Cart
            products = {products}
            onIncreaseQuantity = {this.handleIncreaseQuantity}
            onDecreaseQuantity = {this.handleDecreaseQuantity}
            onDelete = {this.handleDelete}
          />

          {loading && <h1>Loading Products...</h1>}

          <NewProduct/>
        </div>

        {/* <button className="addProductBtn">Add a product</button> */}

        <div className="total">TOTAL : {this.getTotalPrice()} $</div>
      </div>
    );
  }
}

// const styles = {
//   total:{
//     background:'#4243b2',
//     padding : '10px',
//     width:120,
//     color:'white',
//     margin:auto
//   }
// }

export default App;
