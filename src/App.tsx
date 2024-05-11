import React from 'react';
import './App.css';
import {Header} from "./layout/header/Header";
import {Footer} from "./layout/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <div style={{height:'300px', background: 'lightblue'}}>
        Content
      </div>
      <Footer/>
    </div>
  );
}

export default App;
