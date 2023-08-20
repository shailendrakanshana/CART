import React from "react";

//if we convert this in functional conponent , to do so we have to remove render functions

const CartItem = (props) => {
    // constructor (){
    //     super();
    //     this.state = {
    //         price:999,
    //         title:'Mobile Phone',
    //         qty:1,
    //         img:''
    //     }

    //     // this.increaseQuantity = this.increaseQuantity.bind(this);
    // }

    // increaseQuantity = () =>{ //Use Arrow Function Always
    //     // this.state.qty += 1; -> React don't know that there is any update or not
    //     // console.log('this', this.state);
    //     //Set State form - 1
    //     // this.setState({
    //     //     qty : this.state.qty + 1//Shallow merging
    //     // });

    //     // if we call setState more than one time it will not be called more than once because of the concept of batching
    //     //Set State form - 2 (if prevState require use this)
    //     this.setState((prevState) => {//Calling setState causes the rerender of our component;
    //         return{
    //             qty : prevState.qty + 1
    //         }
    //     });
    // }

    // decreaseQuantity = () =>{ //Use Arrow Function Always
    //     // this.state.qty += 1; -> React don't know that there is any update or not
    //     console.log('this', this.state);
    //     //Set State form - 2 (if prevState require use this)
    //     this.setState((prevState) => {//Calling setState causes the rerender of our component;
    //         if(prevState.qty===0){
    //             return{
    //                 qty : prevState.qty
    //             }
    //         }
    //         else{
    //             return{
    //                 qty : prevState.qty - 1
    //             }
    //         }
    //     });
    // }

        // console.log("this.props", this.props);
        const{price,title,qty} = props.product;
        const{
            product,
            onIncreaseQuantity,
            onDecreaseQuantity,
            onDelete
        } = props;

    return(
        <div className="cart-item">
            <div className="left-block">
                <img style={styles.image} src={product.img}/>
            </div>
            <div className="right-block">
                <div style={{fontSize:25}}>{title}</div>
                <div style={{color:'#777'}}>$: {price}</div>
                <div style={{color:'#777'}}>Qty: {qty}</div>
                <div className="cart-item-actions">
                    {/*Button*/}
                    <img 
                        alt="increase" 
                        className="action-icons" 
                        // onClick={this.increaseQuantity}//We can use bind(this)
                        onClick={() => onIncreaseQuantity(product)}
                        src="https://t4.ftcdn.net/jpg/01/07/62/07/240_F_107620769_UwNVSoXnKS4VNcOKoZjPohlEPn83oE38.jpg"/>
                    <img 
                        alt="decrease" 
                        className="action-icons" 
                        // onClick={this.decreaseQuantity}
                        onClick={() => onDecreaseQuantity(product)}
                        src="https://t3.ftcdn.net/jpg/03/73/49/86/240_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg"/>
                    <img 
                        alt="delete" 
                        className="action-icons" 
                        onClick={() => onDelete(product)}
                        src="https://t4.ftcdn.net/jpg/00/98/26/11/240_F_98261175_Sv69O3rZsHApYkjAdrWbgQixYHwyZyOr.jpg"/>
                </div>
            </div>
        </div>
    );
}


const styles = {
    image: {
        height:110,
        width:110,
        borderRadius:4,
        background:'#ccc'
    }
}

export default CartItem;