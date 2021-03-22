import React from 'react';
import {Link} from 'react-router-dom';
import images from '../imageGetter';

function Card(props) {
    const {model, pic, price} = props.car;
    return (
        <div className='card'>
             <Link to={`/shopping-cart/shop/${model}`} >
                <img className='car-img' src={images[pic].default} alt={model}/>
                <h2 className='model'>{model}</h2>
                <p className='price'>$ {price}</p>
            </Link>
        </div>
    );
}

export default Card;