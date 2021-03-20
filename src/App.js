import React from 'react';
import './styles/reset.css';
import './styles/App.css';
import Header from './components/Header';
import Routes from './components/Routes';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes />      

      <Footer />
    </div>
  );
}

export default App;