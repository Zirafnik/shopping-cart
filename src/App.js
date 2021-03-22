import React, {useState} from 'react';
import './styles/reset.css';
import './styles/App.css';
import Header from './components/Header';
import Routes from './components/Routes';
import Footer from './components/Footer';

function App() {
  const [cartNum, setCartNum] = useState(0);

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

      <Routes incFunc={incrementCartNum} />      

      <Footer />
    </div>
  );
}

export default App;