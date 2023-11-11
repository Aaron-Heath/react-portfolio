import React from 'react';
import './App.css';
import Header from './Components/Header';
import BioFeature from './Components/BioFeature';


let App = () => {


  return (
    <>
    <Header></Header>
    <main class="container">
      <BioFeature/>
    </main>
    </>
  );
}

export default App;
