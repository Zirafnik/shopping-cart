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

  function updateCartList(e) {
    let item= e.target.getAttribute('name');
    let newCart= [...cart];
    let index= cart.findIndex(x => x.model === item);
    let count= Number(e.target.value);
    let obj= cart.find(x => x.model === item);
    newCart[index]= {model: item, num: count};

    if(obj.num !== count) {
      let diff= count - obj.num;
      setCartNum(cartNum + diff);
    }
    setCart(newCart);
  }

  function incrementCartNum() {
    setCartNum(cartNum + 1);
  }

  return (
    <div className="App">
      <Header cartNum={cartNum} />

      <Routes cart={cart} updateCartList={updateCartList} incFunc={incrementCartNum} addToCart={addToCart} />      

      <Footer />
    </div>
  );
}

export default App;