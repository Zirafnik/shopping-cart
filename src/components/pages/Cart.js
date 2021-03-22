import React from 'react';
import CartItem from './CartItem';

function Cart(props) {

    let cartItems = props.cart.map(item => 
            <CartItem key={item.model} model={item.model} num={item.num} />
        );

    return (
        <div className='main cart-wrapper'>
            <div className='cart'>
                <h2>Your Shopping Cart:</h2>
                {cartItems}
                <p className='total'>TOTAL:</p>
                <button className='cart-btn btn-style' onClick={() => alert('Thank you for your order!')}>Go to checkout</button>
            </div>
        </div>
    );
}

export default Cart;