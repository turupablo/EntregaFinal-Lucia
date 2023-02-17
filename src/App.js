import React from 'react';
import CarritoProvider from "./components/CarritoProvider"
import { BrowserRouter } from "react-router-dom"
import './App.css';

import Header from './components/Header'; 
import Main from './components/Main'; 


const App = () => {
  return (
    <>
      <CarritoProvider>
        <BrowserRouter>
            <Header />
            <Main />
        </BrowserRouter>
      </CarritoProvider>
    </>
  )
}

export default App;
