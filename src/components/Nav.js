import React from 'react';
import {Link} from 'react-router-dom';

function Nav(props) {

    return(
        <nav>
            <ul className='nav-links'>
                <li>
                    <Link to='/shopping-cart/'>Home</Link>
                </li>
                <li>
                    <Link to='/shopping-cart/shop'>Shop</Link>
                </li>
                <li>
                    <Link to='/shopping-cart/cart'>Cart ({props.cartNum})</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;