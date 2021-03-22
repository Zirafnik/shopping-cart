import React from 'react';
import {cars} from '../../data';
import images from '../../imageGetter';

function CartItem(props) {
    let car = cars.filter(obj => obj.model === props.model);
    
    return (
        <div className='cart-item'>
            <div className='img-wrapper'>
                <img className='car-img' src={images[car[0].pic].default} alt={props.model}/>
            </div>

            <p>{props.model}</p>

            <input className='cart-input' type='number' min='0' defaultValue={props.num} />

            <p>$</p>
        </div>
    );
}

export default CartItem;