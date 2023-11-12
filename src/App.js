import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import BioFeature from './Components/BioFeature';
import ContactFeature from './Components/ContactFeature';


let App = () => {
  const [page, setPage] = useState("contact");

  switch(page){
    case "contact":return (
      <>
      <Header></Header>
      <main class="container">
        <ContactFeature/>
      </main>
      </>
    );

    default: return (
      <>
      <Header></Header>
      <main class="container">
        <BioFeature/>
      </main>
      </>);
  }
  
}

export default App;
