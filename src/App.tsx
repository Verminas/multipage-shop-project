import React from 'react';
import './App.css';
import {Header} from "./layout/header/Header";
import {Footer} from "./layout/footer/Footer";
import {Main} from "./layout/main/Main";

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
