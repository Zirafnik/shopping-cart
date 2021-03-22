import React, { useState } from 'react';
import {cars} from '../../data';
import images from '../../imageGetter';

function CartItem(props) {
    let car = cars.filter(obj => obj.model === props.model);

    let price= Number(car[0].price.slice(0,2) + car[0].price.slice(3));
    let productPrice= price * props.num;
    
    return (
        <div className='cart-item'>
            <div className='img-wrapper'>
                <img className='car-img' src={images[car[0].pic].default} alt={props.model}/>
            </div>

            <p>{props.model}</p>

            <input onChange={props.updateCartList} className='cart-input' type='number' min='0' name={props.model} defaultValue={props.num} />

            <p>${productPrice}</p>
        </div>
    );
}

export default CartItem;