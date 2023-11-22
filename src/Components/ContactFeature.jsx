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

  const handleResumeDownload = async function(event) {
    event.preventDefault;

    // download resume
    let resumeUrl = "https://raw.githubusercontent.com/Aaron-Heath/react-portfolio/dev/src/documents/aaron-heath_resume.pdf";
    // try {
      await fetch(resumeUrl).then(response => {
        // Response type is application/octet-stream
        // Process response as ReadableStream

        // https://developer.mozilla.org/en-US/docs/Web/API/Streams_API/Using_readable_streams
        const reader = response.body.getReader();
        return new ReadableStream({
          start(controller) {
            return pump();

            function pump() {
              return reader.read().then(({done, value}) => {

                // When no more data needs to be consumed, close stream
                if (done) {
                  controller.close();
                  return;
                }

                // If more data, add next chunk of data to queue
                controller.enqueue(value);
                return pump();
              });
            }
          },
        });
      })
      // Create new response from stream
      .then(stream => new Response(stream))
      // Create an object URL for the response
      .then((response => response.blob()))
      .then((blob) => URL.createObjectURL(blob))
      .then((url) => {
        console.log(url)
        // Create an anchor element
        const downloadLink = document.createElement('a');
        downloadLink.href = url;
        downloadLink.download = 'aaron-heath_resume.pdf';

        // Click the anchor element to trigger the download
        downloadLink.click();
      });
    

  }

  return (
    <div id="contact-section" className="row">
        <div className="row text-centered">
            <h3>Contact Me</h3>
        </div>
        <div className="row">
            <section id="contact-email" className="col-md-6">
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
            <section id="contact-info" className="col-md-6">
            <ContactCard type="email" text="Email" href="#"/>
              <ContactCard type="linkedin" text="LinkedIn" href="https://www.linkedin.com/in/aaron-heath-2b0a5510b/"/>
              <div className="left-align" >
                <Button id="resume-btn" variant="resume" onClick={handleResumeDownload}><img src={DownloadIcon} alt="Download Icon"/>  Resume</Button>
              </div>
            </section>
        </div>
        
    </div>
  )
}
