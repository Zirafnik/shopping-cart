import React from 'react';
import {cars} from '../../data';
import CartItem from './CartItem';

function Cart(props) {
    let totalPrice = 0;
    props.cart.map(item => {
        let car = cars.filter(obj => obj.model === item.model);
        let price= Number(car[0].price.slice(0,2) + car[0].price.slice(3));
        let productPrice= price * item.num;
        totalPrice+= productPrice;
    })

    let cartItems = props.cart.map(item => 
            <CartItem updateCartList={props.updateCartList} key={item.model} model={item.model} num={item.num} />
        );
    
    return (
        <div className='main cart-wrapper'>
            <div className='cart'>
                <h2>Your Shopping Cart:</h2>
                {cartItems}
                <p className='total'>TOTAL: ${totalPrice}</p>
                <button className='cart-btn btn-style' onClick={() => alert('Thank you for your order!')}>Go to checkout</button>
            </div>
        </div>
    );
}

export default Cart;