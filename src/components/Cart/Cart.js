import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((total, prd) => total + prd.price, 0)

    return (
        <div >
            <h4 class="font-weight-bold">Order Summary</h4>
            <br/>
            <p>Course Purchased: {cart.length}</p>
            <p>Total Price: {totalPrice}</p>
        </div>
    );
};

export default Cart;