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
}

export default App;
