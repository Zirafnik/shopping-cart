import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import ProductDetail from './pages/Product';

function Routes() {
    
    return(
        <Switch>
                <Route exact path='/'component={Home} />
                <Route exact path='/shop' component={Shop} />
                <Route exact path='/cart' component={Cart} />
                <Route exact path='/shop/:id' component={ProductDetail} />
        </Switch>
    );
}

export default Routes;