import React from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar'; 


const App = () => {
  return (
    <>

          <NavBar />
          <ItemListContainer greeting="Proximamente tus productos favoritos" />
    </>
  )
}

export default App;
