import React from 'react';
import {Link} from 'react-router-dom';

function Home() {

    return (
        <div className='home main'>
            <button><Link to='/shop' >Visit The Shop</Link></button>
        </div>
    );
}

export default Home;