import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import BioFeature from './Components/BioFeature';
import ContactFeature from './Components/ContactFeature';


let App = () => {
  const [page, setPage] = useState("home");

  // Switch case determines which main page or "feature" should render.
  // Child elements that can change this state should be passed the "setPage" function
  switch(page){
    case "contact":return (
      <>
      <Header setPage={setPage}></Header>
      <main class="container">
        <ContactFeature/>
      </main>
      </>
    );

    default: return (
      <>
      <Header setPage={setPage}></Header>
      <main class="container">
        <BioFeature/>
      </main>
      </>);
  }
  
}

export default App;
