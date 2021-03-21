import React from 'react';
import {Link} from 'react-router-dom';
import Nav from './Nav';

function Header() {

    return(
        <header>
            <h1><Link to='/'>Volvo</Link></h1>
            <Nav />
        </header>
    );
}

export default Header;