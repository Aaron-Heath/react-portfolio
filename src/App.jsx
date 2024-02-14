import React, { useState } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import './App.css';
import Header from './components/Header';
import BioFeature from './components/bioFeature';
import ContactFeature from './components/ContactFeature';
import AboutMe from './about/AboutMe';
import ProjectsFeature from './projects/ProjectsFeature';


let App = () => {
  const [page, setPage] = useState("home");

  // Switch case determines which main page or "feature" should render.
  // Child elements that can change this state should be passed the "setPage" function
  switch(page){
    case "contact":return (
      <>
      <Header setPage={setPage}></Header>
      <main className="container">
        <ContactFeature/>
      </main>
      </>
    );

    case "about": return (
      <>
        <Header setPage={setPage}></Header>
        <main className="container">
          <AboutMe/>
        </main>
      </>
    );

    case "projects": return (
      <>
      <Header setPage={setPage}></Header>
      <main className="container">
        <ProjectsFeature/>
      </main>
      </>
    )

    default: return (
      <>
      <Header setPage={setPage}></Header>
      <main className="container">
        <BioFeature/>
        {/* <AboutMe/>
        <ProjectsFeature></ProjectsFeature>
        <ContactFeature/> */}
      </main>
      </>);
  }
  
}

export default App;
