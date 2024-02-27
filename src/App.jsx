import React, { useState } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import './App.css';
import Header from './components/Header';
import Footer from './components/footer'
import { Outlet } from 'react-router-dom';


let App = () => {
  const [page, setPage] = useState("home");

  return(
    <>
      <Header setPage={setPage}/>
      <main className='container'>
        <Outlet/>
      </main>
      <Footer/>
    </>
  )

  // Switch case determines which main page or "feature" should render.
  // Child elements that can change this state should be passed the "setPage" function
  // switch(page){
  //   case "contact":return (
  //     <>
  //     <Header setPage={setPage}></Header>
  //     <main className="container">
  //       <ContactFeature/>
  //     </main>
  //     <Footer></Footer>
  //     </>
  //   );

  //   case "about": return (
  //     <>
  //       <Header setPage={setPage}></Header>
  //       <main className="container">
  //         <AboutMe/>
  //       </main>
  //       <Footer></Footer>
  //     </>
  //   );

  //   case "projects": return (
  //     <>
  //     <Header setPage={setPage}></Header>
  //     <main className="container">
  //       <ProjectsFeature/>
  //     </main>
  //     <Footer></Footer>
  //     </>
  //   )

  //   default: return (
  //     <>
  //     <Header setPage={setPage}></Header>
  //     <main className="container">
  //       <BioFeature/>
  //       {/* <AboutMe/>
  //       <ProjectsFeature></ProjectsFeature>
  //       <ContactFeature/> */}
  //     </main>
  //     <Footer></Footer>
  //     </>);
  // }
  
}

export default App;
