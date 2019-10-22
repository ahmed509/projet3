import React from 'react';
import logo from './logo.svg';
import './App.css';
import './style.css';
import './MyComponent.js';
import './Cop2.js';
import MyComonent from './MyComponent.js';
import Cop2 from './Cop2.js';
function App() {
  return (
    <div style={{ maxWidth:"100vw", border:"solde 1px red"}}>

      <MyComonent / >

        <Cop2 / >

    <h1 className="title red">My title</h1>
  
    <br/>
  
  <img src="logo192.png" />
  
  <br/>
  
    <img src="2.jpg" />
    
  
  </div>
  
  );
}

export default App;
