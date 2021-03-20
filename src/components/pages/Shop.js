import React from 'react';
import {cars} from '../../data';
import Card from '../Card';

function Shop(props) {
    const productCards= cars.map((car) => 
        <Card key={car.model} car={car} />
    );

    return(
        <div className='shop main'>
            {productCards}
        </div>
    );
}

export default Shop;