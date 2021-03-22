import React from 'react';
import {useParams, Link} from 'react-router-dom';
import {cars} from '../../data';
import images from '../../imageGetter';

function ProductDetail() {
    let {id} = useParams();
    console.log(id);

    let car= cars.find(x => x.model === id);

    return (
        <div className='product main'>
            <div className='img-wrapper'>
                <img className='car-img' src={images[car.pic].default} alt={id}/>
            </div>
            <div className='description'>
                <h3 className='text text-margin'>{id}</h3>
                <p className='text text-margin'>Price: {car.price}</p>
                <p className='text text-margin'>Description:</p>
                <p className='text-margin-small'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <div className='desc-buttons text-margin'>
                    <Link><button className='add-to-cart'>Add to cart</button></Link>
                    <Link to='/shop'><button className='add-to-cart'>Go back</button></Link>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;