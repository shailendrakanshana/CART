import React from "react";

const Navbar = (props) =>{
    const {cartSize} = props
    return(
        <div className="nav-bar" style={styles.nav}>
            <div style={styles.cartIconContainer}>
                <img style={styles.cartIcon} src="https://cdn-icons-png.flaticon.com/128/419/419910.png" alt="cart-icon"/>
                <span style={styles.cartCount}>{cartSize}</span>
            </div>
        </div>
    );
}


const styles = {
    cartIcon: {
        height:32,
        marginRight:40
    },
    nav: {
        height: 70,
        background: '#4277b2',
        display : 'flex',
        justifyContent:'flex-end',
        alignItems: 'center'
    },
    cartIconContainer: {
        position : 'relative'
    },
    cartCount: {
        background: 'yellow',
        borderRadius: '50%',
        padding: '4px 10px',
        position: 'absolute',
        right: 15,
        top: -9
    }
};

export default Navbar;