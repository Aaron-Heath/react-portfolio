import React from 'react'
import ContactCard from './ContactCard'
import { Button, Form } from 'react-bootstrap'
import DownloadIcon from '../icons/icons8-download-52.png'

export default function ContactFeature() {
  const handleSubmit = function(event) {
    // Return if button was not clicked.
    if(!event.target.matches("button")) {
      return;
    }

    // Stop page from reloading automatically
    event.preventDefault();

    console.log(event.target)
  }

  return (
    <div id="contact-section" class="row">
        <div class="row text-centered">
            <h3>Contact Me</h3>
        </div>
        <div class="row">
            <section id="contact-email" class="col-md-6">
              <Form onClick={handleSubmit}>
                <Form.Group className="mb-3" controlId="form-email">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="form-subject">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control type="text" placeholder="Subject" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="form-message">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={4} placeholder="Your message..." />
                </Form.Group>
                <Button id="contact-submit"type="submit"></Button>
              </Form>
            </section>
            <section id="contact-info" class="col-md-6">
            <ContactCard type="email" text="Email" href="#"/>
              <ContactCard type="linkedin" text="LinkedIn" href="https://www.linkedin.com/in/aaron-heath-2b0a5510b/"/>
              <div class="left-align">
                <Button id="resume-btn" variant="resume"><img src={DownloadIcon} alt="Download Icon"/>  Resume</Button>
              </div>
            </section>
        </div>
        
    </div>
  )
}
