import React from 'react'
import './App.css';
import Header from './Header'
import Counter from './Counter'

function App() {
  return (
    <>
      <Header name="ProgBr" links={["Sobre", "Comprar", "Contato", "Login"]}></Header>
      <Counter count={3}></Counter>
    </>
  );
}

export default App;
