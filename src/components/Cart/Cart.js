import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    //const total = cart.reduce((total, product) => total + product.price, 0);
    let total = 0;
    for(let i= 0; i<cart.length; i++){
        const product = cart[i];
        total =total + product.price;
    }

    let shipping = 0;
    if(total > 200){
        shipping = 0;
    }
    else if (total > 12.99){
        shipping = 4.99;
    }
    else if(total > 0)
    {shipping = 12.99}

    const tax = (total/10).toFixed(2);
    const grandTotal =(total +shipping + Number(tax)).toFixed(2);

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }


    return (
        <div>
            <h4>Order Summary</h4>
            <p>Ordered Items : {cart.length}</p>
            <p>Product Price : {formatNumber(total)}</p>
            <p><small> Shipping Cost : {shipping}</small></p>
            <p><small>Tax : {tax}</small></p>
            <p>Total Price: {grandTotal}</p>
            <br/>
            <button className="perviewBtn" >Preview Order</button>
    

        </div>
    );
};

export default Cart;