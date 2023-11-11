import React from 'react';
import './App.css';
import { Button, Navbar } from 'react-bootstrap';
import Header from './Components/Header';
import Name from './Components/Name'
import Link from './Components/Link';

let App = () => {
  return (
    <>
    <Header></Header>
    <main class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="col-md-6">
            <Name inline={false} />
            <div id="socials">
              <Link href={"https://github.com/Aaron-Heath"} text="Github"/>  |  <Link href="https://www.linkedin.com/in/aaron-heath-2b0a5510b/" text="LinkedIn"/>

            </div>
            <Button id="contact-btn" variant="contact">CONTACT ME</Button>
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
