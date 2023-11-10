import React from 'react';
import './App.css';
import { Button, Navbar } from 'react-bootstrap';
import Header from './Components/Header';
import Name from './Components/Name'

let App = () => {
  return (
    <>
    <Header></Header>
    <main class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="col-md-6">
            <Name inline={false} />
          </div>
          <div class="col-md-6">
            
          </div>
        </div>
        <div class ="col-md-4">

        </div>
        
      </div>
    </main>
    </>
  );
}

export default App;
