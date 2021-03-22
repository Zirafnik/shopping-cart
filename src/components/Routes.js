import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import ProductDetail from './pages/Product';

function Routes(props) {
    const site='/shopping-cart';
    return(
        <Switch>
                <Route exact path={`${site}/`} component={Home} />
                <Route exact path={`${site}/shop`} component={Shop} />
                <Route exact path={`${site}/cart`}>
                    <Cart updateCartList={props.updateCartList} cart={props.cart} />
                </Route>
                <Route exact path={`${site}/shop/:id`}>
                    <ProductDetail incFunc={props.incFunc} addToCart={props.addToCart} />
                </Route>
        </Switch>
    );
}

export default Routes;