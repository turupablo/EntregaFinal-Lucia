import React from 'react';
import CarritoProvider from "./components/CarritoProvider"
import { BrowserRouter } from "react-router-dom"
import './App.css';
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from 'react-toastify';

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
        <ToastContainer />
      </CarritoProvider>
    </>
  )
}

export default App;
