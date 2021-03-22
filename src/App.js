import React, {useState} from 'react';
import './styles/reset.css';
import './styles/App.css';
import Header from './components/Header';
import Routes from './components/Routes';
import Footer from './components/Footer';

function App() {
  const [cartNum, setCartNum] = useState(0);
  const [cart, setCart] = useState([]);

  function addToCart(newItem) {
    let count;
    if(cart.some(obj => obj.model === newItem)) {
      let newCart= [...cart];
      let index= cart.findIndex(x => x.model === newItem);
      let obj= cart.find(x => x.model === newItem);
      count= obj.num + 1;
      newCart[index]= {model: newItem, num: count};
      setCart(newCart);
    } else {
      count = 1;
      setCart([...cart, {model: newItem, num: count}]);
    }
  }

  function updateCartList(newItem, count) {
    
  }

  function incrementCartNum() {
    setCartNum(cartNum + 1);
  }

  function decrementCartNum() {
    if(cartNum === 0) {
      return;
    }
    setCartNum(cartNum - 1);
  }

  return (
    <div className="App">
      <Header cartNum={cartNum} />

      <Routes cart={cart} incFunc={incrementCartNum} addToCart={addToCart} />      

      <Footer />
    </div>
  );
}

export default App;