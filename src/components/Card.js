import React from 'react';
import images from '../imageGetter';

function Card(props) {
    const {model, pic, price} = props.car;
    console.log(pic);
    return (
        <div className='card'>
            <img src={images[pic].default} alt={model}/>
            <h2 className='model'>{model}</h2>
            <p className='price'>$ {price}</p>
        </div>
    );
}

export default Card;