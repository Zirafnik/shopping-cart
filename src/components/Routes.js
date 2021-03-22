import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import ProductDetail from './pages/Product';

function Routes(props) {
    
    return(
        <Switch>
                <Route exact path='/'component={Home} />
                <Route exact path='/shop' component={Shop} />
                <Route exact path='/cart'>
                    <Cart cart={props.cart} />
                </Route>
                <Route exact path='/shop/:id'>
                    <ProductDetail incFunc={props.incFunc} addToCart={props.addToCart} />
                </Route>
        </Switch>
    );
}

export default Routes;