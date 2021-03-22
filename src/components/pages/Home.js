import React from 'react';
import {Link} from 'react-router-dom';

function Home() {

    return (
        <div className='home main'>
            <Link to='/shop' ><button className='home-btn'>Visit The Shop</button></Link>
        </div>
    );
}

export default Home;