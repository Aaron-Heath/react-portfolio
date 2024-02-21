import React, { useState } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import './App.css';
import Header from './components/Header';
import BioFeature from './components/bioFeature';
import ContactFeature from './components/contact/ContactFeature';
import AboutMe from './about/AboutMe';
import ProjectsFeature from './components/projects/ProjectFeature';
import Footer from './components/Footer';


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
      <Footer></Footer>
      </>
    );

    case "about": return (
      <>
        <Header setPage={setPage}></Header>
        <main className="container">
          <AboutMe/>
        </main>
        <Footer></Footer>
      </>
    );

    case "projects": return (
      <>
      <Header setPage={setPage}></Header>
      <main className="container">
        <ProjectsFeature/>
      </main>
      <Footer></Footer>
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
      <Footer></Footer>
      </>);
  }
  
}

export default App;
