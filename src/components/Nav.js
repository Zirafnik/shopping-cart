import React from 'react';
import {Link} from 'react-router-dom';

function Nav(props) {

    return(
        <nav>
            <ul className='nav-links'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/shop'>Shop</Link>
                </li>
                <li>
                    <Link to='/cart'>Cart ({props.cartNum})</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;