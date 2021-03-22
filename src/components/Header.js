import React from 'react';
import {Link} from 'react-router-dom';
import Nav from './Nav';

function Header(props) {

    return(
        <header>
            <h1><Link to='/shopping-cart/'>Volvo</Link></h1>
            <Nav cartNum={props.cartNum} />
        </header>
    );
}

export default Header;