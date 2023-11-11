import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import BioFeature from './Components/BioFeature';


let App = () => {
  const [page, setPage] = useState("home");


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
